import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ToastrService } from 'ngx-toastr';
import { Subscription, of, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Category } from 'src/app/shared/interfaces/category.model';
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
export class DomainShop extends Shop {

}

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss']
})
export class AddShopComponent implements OnInit {

  @ViewChild('photos', { static: true }) photos;
  file: any;
  localUrl: any;
  localCompressedURl:any;
  sizeOfOriginalImage:number;
  sizeOFCompressedImage:number;
  downloadURL: Observable<string>;
  public id;
  public shop: DomainShop;
  public shopForm: FormGroup;
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

  selectFile(event: any,type:string) {
    this.progress();
    var  fileName : any;
    this.imageType = type;
    this.file = event.target.files[0];
    fileName = this.file['name'];
    if (event.target.files && event.target.files[0]) {
       var reader = new FileReader();
       reader.onload = (event: any) => {
       this.localUrl = event.target.result;
       this.compressFile(this.localUrl,fileName)
       }
       reader.readAsDataURL(event.target.files[0]);
     }
    }
    imgResultBeforeCompress:string;
    imgResultAfterCompress:string;


    compressFile(image,fileName) {
        var orientation = -1;
        this.sizeOfOriginalImage = this.imageCompress.byteCount(image)/(1024*1024);
        console.warn('Size in bytes is now:',  this.sizeOfOriginalImage);
        this.imageCompress.compressFile(image, orientation, 200, 200).then(
        result => {
          this.imgResultAfterCompress = result;
         this.localCompressedURl = result;
    
         this.sizeOFCompressedImage = this.imageCompress.byteCount(result)/(1024*1024)
          console.warn('Size in bytes after compression:',  this.sizeOFCompressedImage);
         // create file from byte
         const imageName = fileName;
        // call method that creates a blob from dataUri
        const imageBlob = this.dataURItoBlob(this.imgResultAfterCompress.split(',')[1]);
        //imageFile created below is the new compressed file which can be send to API in form data
        const imageFile = new File([result], imageName, { type: 'image/jpeg' });
        this.onFileSelected(imageBlob)
      });}
    dataURItoBlob(dataURI) {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
    }
        const blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    }
    onFileSelected(url) {
      var n = Date.now();
      const file = url;
      console.log(url)
      const filePath = `RoomsImages/${n}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(`RoomsImages/${n}`, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                console.log(this.imageType)
                  if(this.imageType == "image"){
                    this.image=url;
                    this.shop.image = url;
                  }else if(this.imageType == "logo"){
                    this.logo=url;
                    this.shop.logo = url;
                    
                  }
                  $("#progress").modal("hide");
               
              }
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);
          }
        });
    }
  
    
    progress(){
      document.getElementById("dialog").click();
    }

 

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        this.image=""
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
   
                reader.onload = (event:any) => {
                   this.image=event.target.result; 
                }
  
                reader.readAsDataURL(event.target.files[i]);
                
                
        }

        
    }
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
   
    this.shopForm = this.fb.group({
      name: [this.shop && this.shop.name,
        Validators.required]
        ,
      address: [this.shop && this.shop.address,
        Validators.required]
      ,
      phone: [this.shop && this.shop.phone,
        Validators.required]
      ,
      state: [this.shop && this.shop.state,
        Validators.required]
      ,
      town: [this.shop && this.shop.town,
        Validators.required]
      ,
      description: [this.shop && this.shop.description,
        Validators.required]
      ,description_En: [this.shop && this.shop.description_En,
        Validators.required]
      ,
      lng: [this.shop && this.shop.lng,
        Validators.required]
      ,
      lat: [this.shop && this.shop.lat,
        Validators.required]
      ,
      startH: [this.shop && this.shop.startH,
        Validators.required]
      ,
      endH: [this.shop && this.shop.endH,
        Validators.required]
      ,
      pTime: [this.shop && this.shop.pTime,
        Validators.required]
      ,
      type: [this.shop && this.shop.type,
          Validators.required]
      ,
      shopId: [{value:this.shop && this.shop.shopId,
        disabled: true},
       Validators.required]
      ,
      discountLimit:[this.shop && this.shop.discountLimit, [
        Validators.required,
        Validators.min(0)
      ]]
      ,
      discount: [this.shop && this.shop.discount, [
        Validators.required,
        Validators.min(0)
      ]],
      minCharge: [this.shop && this.shop.minCharge, [
        Validators.required,
        Validators.min(0)
      ]],
      tax: [this.shop && this.shop.tax, [
        Validators.required,
        Validators.min(0)
      ]]
    });
    this.onFormChanges();
  
  }

 

  private getShop(id): void {
    
      this.shopSubscription = this.shopService
      .getShop(id)
      .subscribe((shop) => {
        if (shop) {
        
          
          this.image = shop.image;
          this.logo = shop.logo;
          console.log("image :"+this.image)
          console.log("image :"+this.logo)
          this.syncShop(shop);
          this.selectedCountry = shop.country
          this.selectedTown = shop.town
          this.getStates();
          this.getTowns();
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

  private syncShop(shop): void {
    const shopId = this.createId(shop);
    const image = this.image;
    const logo = this.logo;
    const rating  = this.rating(shop);
    const view = this.handleView(shop);
    const sort  = this.handleSort(shop);
    const date = new Date().toUTCString();
    const enew = this.handleNew(shop);
    const sale = this.handleSale(shop);
    const delvieryCharge = 0;
    this.shop = {
      ...shop,
      rating,
      view,
      endH:+shop.endH,
      startH:+shop.startH,
      pTime:""+shop.pTime,
      admin:"false",
      shopId,
      sort,
      image,
      logo,
      country:"",
      new:enew,
      delvieryCharge,
      sale

    };
  }

 

  public onShopFormSubmit() {
    
    this.syncShop({ ...this.shop, ...this.shopForm.value });
    const shopToSubmit = this.shop;
    if (this.image != null && this.logo != null) {
        this.addShop(shopToSubmit);
    } else {
      this.log.error('Please provide a file for your shop');
      return;
    }
  }

  private addShop(shop: Shop) {
    this.shopService.addShop(shop).subscribe(
      (savedProduct: Shop) => {
        if (savedProduct.shopId) {
          this.shop = null;
          this.router.navigate(['/shops']);
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
    return new Shop();
  }

 

  private handleView(shop: Shop): string {
    if (shop.view ) {
      return shop.view;
    }
    return "0";
  }

  private handleNew(shop: Shop): boolean {
    if (shop.new ) {
      return shop.new;
    }
    return true;
  }

  private handleSale(shop: Shop): boolean {
    if (shop.sale ) {
      return shop.sale;
    }
    return false;
  }


  private handleSort(shop: Shop): number {
    if (shop.sort ) {
      return shop.sort;
    }

    let sort = this.shops.length+2
    return sort;
  }

  private createId(shop: Shop): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = shop.shopId || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }

  private rating(shop: Shop): number {
    const randomId = 0;
    let rate = shop.rating || randomId;
    if (rate === 0) {
      rate = randomId;
    }
    return rate;
  }

  
  private checkForSale(reduction: number): boolean {
    return reduction > 0;
  }

  private calculateReduction(price: number, discount: number): number {
    const reduction = Math.round((price/discount) * 100);
    return reduction > 0 ? reduction : 0;
  }

  private handleImageURLs(shop: Shop): string {
    if (shop.image ) {
      return shop.image;
    }
    return '';
  }

  private onFormChanges() {
    this.formSubscription = this.shopForm.valueChanges.subscribe(
      (formFieldValues) => {
        const shop = { ...this.shop, ...formFieldValues };
        this.syncShop(shop);
      }
    );
  }


 


}


