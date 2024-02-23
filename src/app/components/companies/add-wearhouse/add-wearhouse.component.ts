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
import { Wearhouse } from 'src/app/shared/interfaces/wearhouse';
import { CategoryService } from 'src/app/shared/service/category.service';
import { DataService } from 'src/app/shared/service/data.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { ShopService } from 'src/app/shared/service/shop.service';
import { TypeService } from 'src/app/shared/service/type.service';
declare const $: any;
export class DomainWearhouse extends Wearhouse {

}

@Component({
  selector: 'app-add-wearhouse',
  templateUrl: './add-wearhouse.component.html',
  styleUrls: ['./add-wearhouse.component.scss']
})
export class AddWearhouseComponent implements OnInit {

  @ViewChild('photos', { static: true }) photos;
  file: any;
  localUrl: any;
  localCompressedURl:any;
  sizeOfOriginalImage:number;
  sizeOFCompressedImage:number;
  downloadURL: Observable<string>;
  public id;
  public wearhouse: DomainWearhouse;
  public wearhouseForm: FormGroup;
  public mode: 'edit' | 'add';
  private shopSubscription: Subscription;
  private formSubscription: Subscription;
  logo:string;
  lang:any;
  imageType:string;
  towns:any=[];
  states:any=[];
  companies:Company[]=[];
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
      this.getCompanies();
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
        this.constructShop();
        this.initForm();
   
       
      }

    this.getCompanies();
   
  }
  getCompanies() {
    this.dataService.getCompnies().subscribe(coun=>{
      this.companies = coun;
      console.log(this.companies)
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
   
    this.wearhouseForm = this.fb.group({
      name: [this.wearhouse && this.wearhouse.name,
        Validators.required]
        ,
      address: [this.wearhouse && this.wearhouse.address,
        Validators.required]
      ,
      companyID: [this.wearhouse && this.wearhouse.companyID,
        Validators.required]
      ,
      phoneNumber1: [this.wearhouse && this.wearhouse.phoneNumber1,
        Validators.required]
      ,
      phoneNumber2: [this.wearhouse && this.wearhouse.phoneNumber2]
      ,
      contact_person_name: [this.wearhouse && this.wearhouse.contact_person_name,
        Validators.required]
      ,
      contact_person_phone_number1: [this.wearhouse && this.wearhouse.contact_person_phone_number1,
        Validators.required]
      ,
      contact_person_phone_number2: [this.wearhouse && this.wearhouse.contact_person_phone_number2]
      ,
      contact_position: [this.wearhouse && this.wearhouse.contact_position]
      ,
      id: [{value:this.wearhouse && this.wearhouse.id,
        disabled: true},
       Validators.required]
       ,
   
      latitude: [this.wearhouse && this.wearhouse.coordinates.latitude,
        Validators.required]
      ,
      longitude: [this.wearhouse && this.wearhouse.coordinates.longitude,
        Validators.required]
      ,
      open_from: [this.wearhouse && this.wearhouse.open_from,
        Validators.required]
      ,
      open_To: [this.wearhouse && this.wearhouse.open_To,
        Validators.required]
      
    });
    this.onFormChanges();
  
  }

 

  private getShop(id): void {
    
      this.shopSubscription = this.shopService
      .getWearHouse(id)
      .subscribe((shop) => {
        if (shop) {
        
          
          this.syncShop(shop);
          this.getCompanies();

          console.log(shop)
          
          this.initForm();
  
        }
      });
   
    
  }

  private constructShop() {
    const shop = this.constructMockShop();
    this.syncShop(shop);
    this.initForm();
  }

  private syncShop(wearhouse): void {
    const id = this.createId(wearhouse);

 
    this.wearhouse = {
      ...wearhouse,
      id
    };
  }

 

  public onwearhouseFormSubmit() {
    
    this.syncShop({ ...this.wearhouse, ...this.wearhouseForm.value });
    const shopToSubmit = this.wearhouse;
  
        this.addShop(shopToSubmit);

     
  }

  private addShop(wearhouse: Wearhouse) {
    this.shopService.addWearHouse(wearhouse).subscribe(
      (savedProduct: Wearhouse) => {
        if (savedProduct.id) {
          this.wearhouse = null;

          this.router.navigate(['/companies/view-company'],{ queryParams: {id: wearhouse.companyID}});
        }
      },
      (error) => {
        this.log.error('Could not upload your wearhouse');
        return of(error);
      }
    );
  }

 
 
   // pure helper functions start here:
   private constructMockShop() {
    return new Wearhouse();
  }

 

  private createId(wearhouse: Wearhouse): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = wearhouse.id || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }


  private onFormChanges() {
    this.formSubscription = this.wearhouseForm.valueChanges.subscribe(
      (formFieldValues) => {
        const wearhouse = { ...this.wearhouse, ...formFieldValues };
        this.syncShop(wearhouse);
      }
    );
  }


 


}


