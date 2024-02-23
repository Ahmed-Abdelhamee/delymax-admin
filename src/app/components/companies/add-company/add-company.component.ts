import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ToastrService } from 'ngx-toastr';
import { Subscription, of, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Category } from 'src/app/shared/interfaces/category.model';
import { Company } from 'src/app/shared/interfaces/company';
import { Price, Product } from 'src/app/shared/interfaces/product.model';
import { Shop } from 'src/app/shared/interfaces/shop';
import { ShopType } from 'src/app/shared/interfaces/shopType';
import { Type } from 'src/app/shared/interfaces/type.model';
import { CategoryService } from 'src/app/shared/service/category.service';
import { DataService } from 'src/app/shared/service/data.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { ShopService } from 'src/app/shared/service/shop.service';
import { TypeService } from 'src/app/shared/service/type.service';
declare const $: any;
export class DomainCompany extends Company {

}


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  @ViewChild('photos', { static: true }) photos;
  file: any;
  localUrl: any;
  localCompressedURl:any;
  sizeOfOriginalImage:number;
  sizeOFCompressedImage:number;
  downloadURL: Observable<string>;
  public id;
  public company: DomainCompany;
  public companyForm: FormGroup;
  public mode: 'edit' | 'add';
  private shopSubscription: Subscription;
  private formSubscription: Subscription;
  logo:string;
  lang:any;
  imageType:string;
  towns:any=[];
  states:any=[];
  countries:any=[];
  public allLang = true;
  categories: Category[] = new Array();
  types:ShopType[] = [{
    type:"Supermarket",id:"1"},
    {type:"Restaurants" ,id:"2"},
    {type:"Pharmacy",id:"3"},
    {type:"Health" ,id:"4"},
    {type:"Clothes" ,id:"5"},
    {type:"Electronics",id:"6"},
    {type:"Other",id:"7"}];
  selectedCategory: Category;
  selectedSide:any;
  selectedType: Type;
  //images = [];

  shops:Shop[]=[];
  selectedCountry:any;
  selectedTown:any;
  Status=[
    {text: 'Yes', value: true},
    {text: 'No', value: false},
  ];

  hours=[{name:"01:00 AM",value:1},{name:"02:00 AM",value:2},{name:"03:00 AM",value:3},{name:"04:00 AM",value:4},{name:"05:00 AM",value:5},{name:"06:00 AM",value:6},
  {name:"07:00 AM",value:7},{name:"08:00 AM",value:8},{name:"09:00 AM",value:9},{name:"10:00 AM",value:10},{name:"11:00 AM",value:11},{name:"12:00 PM",value:12},
  {name:"01:00 PM",value:13},{name:"02:00 PM",value:14},{name:"03:00 PM",value:15},{name:"04:00 PM",value:16},{name:"05:00 PM",value:17},{name:"06:00 PM",value:18},
  {name:"07:00 PM",value:19},{name:"08:00 AM",value:20},{name:"09:00 PM",value:21},{name:"10:00 PM",value:22},{name:"11:00 PM",value:23},{name:"12:00 AM",value:24}]
  public image:string;


  constructor(private fb: FormBuilder,private dataService:DataService,private shopService:ShopService,
    private typeService:TypeService
    ,public route: ActivatedRoute,private router:Router,private log:ToastrService,private imageCompress: NgxImageCompressService, private storage: AngularFireStorage) {
    
      this.initForm();
  
  }



 



  ngOnInit() {
    
  
    this.id = this.route.snapshot.queryParams["id"];
      // if we have an id, we're in edit mode
      if (this.id) {
        this.mode = 'edit';
        this.getShop(this.id);
        this.initForm();
      } else {
        // else we are in add mode
        this.mode = 'add';
        this.getTowns();
        this.constructShop();
        this.initForm();
   
       
      }

    this.getCountry()
   
  }
  getCountry() {
    this.dataService.getCountries.subscribe(coun=>{
      this.countries = coun;
    })
  }

  getStates(){
    this.dataService.getStates(this.selectedTown).subscribe(states=>{
      this.states = states;
    })
  }

  getTowns(){
    this.dataService.getTowns().subscribe(towns=>{
      this.towns = towns;
    })
  }

  

  allLangs(){
    if(this.allLang){
    this.allLang = false;  
    console.log(this.allLang)
    }else{
      this.allLang = true;
      console.log(this.allLang)
    }
      
   }
  private initForm() {
   
    this.companyForm = this.fb.group({
      name: [this.company && this.company.name,
        Validators.required]
        ,
      address: [this.company && this.company.address,
        Validators.required]
      ,
      phoneNumber1: [this.company && this.company.phoneNumber1,
        Validators.required]
      ,
      phoneNumber2: [this.company && this.company.phoneNumber2]
      ,
      contact_person_name: [this.company && this.company.contact_person_name,
        Validators.required]
      ,
      contact_person_phone_number1: [this.company && this.company.contact_person_phone_number1,
        Validators.required]
      ,
      contact_person_phone_number2: [this.company && this.company.contact_person_phone_number2]
      ,
      contact_position: [this.company && this.company.contact_position]
      ,
      notes: [this.company && this.company.notes]
      ,
      started_date: [this.company && this.company.started_date,
        Validators.required]
      ,
      id: [{value:this.company && this.company.id,
        disabled: true},
       Validators.required]
      

    });
    this.onFormChanges();
  
  }

 

  private getShop(id): void {
    
      this.shopSubscription = this.shopService
      .getCompany(id)
      .subscribe((shop) => {
        if (shop) {
        

          this.syncShop(shop);

    
          
          this.initForm();
  
        }
      });
   
    
  }

  private constructShop() {
    const shop = this.constructMockShop();
    this.syncShop(shop);
    this.initForm();
  }

  private syncShop(company): void {
    const id = this.createId(company);

    const delvieryCharge = 0;
    this.company = {
      ...company,
      id,
    };
  }

 

  public oncompanyFormSubmit() {
    
    this.syncShop({ ...this.company, ...this.companyForm.value });
    const shopToSubmit = this.company;

      this.addShop(shopToSubmit);
    
  }

  private addShop(company: Company) {
    this.shopService.addCompany(company).subscribe(
      (savedProduct: Company) => {
        if (savedProduct.id) {
          this.company = null;
          this.router.navigate(['/companies']);
        }
      },
      (error) => {
        this.log.error('Could not upload your shop');
        return of(error);
      }
    );
  }

 
 
   // pure helper functions start here:
   private constructMockShop() {
    return new Company();
  }

 


  private createId(shop: Shop): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = shop.shopId || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }

  private onFormChanges() {
    this.formSubscription = this.companyForm.valueChanges.subscribe(
      (formFieldValues) => {
        const shop = { ...this.company, ...formFieldValues };
        this.syncShop(shop);
      }
    );
  }


 


}


