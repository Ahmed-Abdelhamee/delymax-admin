import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DeliveryBoy } from 'src/app/shared/interfaces/delivery-boy';
import { Permission } from 'src/app/shared/interfaces/permission';
import { Shop } from 'src/app/shared/interfaces/shop';
import { State } from 'src/app/shared/interfaces/state';
import { Town } from 'src/app/shared/interfaces/town';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DataService } from 'src/app/shared/service/data.service';
import { ProductService } from 'src/app/shared/service/product.service';
declare const $: any;
@Component({
  selector: 'app-add-delivery-boy',
  templateUrl: './add-delivery-boy.component.html',
  styleUrls: ['./add-delivery-boy.component.scss']
})
export class AddDeliveryBoyComponent implements OnInit {

  file: any;
  localUrl: any;
  localCompressedURl:any;
  sizeOfOriginalImage:number;
  sizeOFCompressedImage:number;
  downloadURL: Observable<string>;
  public accountForm: FormGroup;
  public permissionForm: FormGroup;
  public registerErrors: string;
  user:DeliveryBoy = new DeliveryBoy();
  selectedRole:boolean =false;
  fishPhoto='assets/images/pro3/1.jpg'
  idPhoto1='assets/images/pro3/1.jpg';
  idPhoto2='assets/images/pro3/1.jpg';
  dLPhoto='assets/images/pro3/1.jpg';
  mLPhoto='assets/images/pro3/1.jpg';
  public mode: 'edit' | 'add';
  roles=[{name:"Motorcycle"},{name:"Bike"}];
  permission : Permission= new Permission();
  shops:Shop[]=[]
  id:any;
  imageType = "";
  selectedTown='';
  states:State[]=[];
  towns:Town[]=[];
  busy:boolean = false;
  ATypes = [{name:"By Hour"},{name:"Commission"}];
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private toastr:ToastrService,
    private router:Router,private route:ActivatedRoute,private imageCompress: NgxImageCompressService,private productService:ProductService
    ,private db: AngularFireDatabase , private storage: AngularFireStorage,private dataService:DataService) {
    this.createAccountForm();
    this.getTowns()
  }
  getStates(){
    this.dataService.getStates(this.selectedTown).subscribe(states=>{
      this.states = states;
    })
  }

  progress(){
    document.getElementById("dialog").click();
  }

  getTowns(){
    this.dataService.getTowns().subscribe(towns=>{
      this.towns = towns;
    })
  }
  createAccountForm() {
    this.accountForm = this.formBuilder.group({
      idNumber: [this.user && this.user.idNumber,Validators.required],
      vType: [this.user && this.user.vType,Validators.required],
      name: [this.user && this.user.name,Validators.required],
      phone: [this.user && this.user.phone,Validators.required],
      address: [this.user && this.user.address,Validators.required],
      email: [this.user && this.user.email,Validators.required],
      passwored: [this.user && this.user.passwored,Validators.required],
      confirmPwd: [],
     state: [this.user && this.user.state,Validators.required],
     town: [this.user && this.user.town,Validators.required],
     idPhoto1: [this.user && this.user.idPhoto1],
     idPhoto2: [this.user && this.user.idPhoto2],
     mLPhoto: [this.user && this.user.mLPhoto],
     fishPhoto: [this.user && this.user.fishPhoto],
     dLPhoto: [this.user && this.user.dLPhoto]
    })
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

  ngOnInit() {
    this.id = this.route.snapshot.queryParams["id"];
    if(this.id){
      this.mode='edit';
      this.authService.getDB(this.id).subscribe(user=>{
        this.user = user;
        this.idPhoto1 = this.user.idPhoto1||'assets/images/pro3/1.jpg';
        this.idPhoto2 = this.user.idPhoto2||'assets/images/pro3/1.jpg';
        this.mLPhoto = this.user.mLPhoto||'assets/images/pro3/1.jpg';
        this.dLPhoto = this.user.dLPhoto||'assets/images/pro3/1.jpg';
        this.fishPhoto = this.user.fishPhoto||'assets/images/pro3/1.jpg';
        this.selectedTown = this.user.town;
        this.busy = this.user.busy;
        this.getStates();
        console.log(this.user)
        this.createAccountForm();
      })
    }else{
      this.mode='add';
    }
  }

  addUser(){
    if (!this.accountForm.valid) {
      this.toastr.error("", "Please enter mandatory field!");
    }else if (this.mode=='add' && this.accountForm.value.passwored !== this.accountForm.value.confirmPwd) {
      this.registerErrors = 'Passwords don\'t match!';
      
    } else {
      this.user.name = this.accountForm.value.name;
      this.user.phone = this.accountForm.value.phone;
      this.user.idNumber = this.accountForm.value.idNumber;
      this.user.vType = this.accountForm.value.vType;
      this.user.aType = this.accountForm.value.aType;
      this.user.passwored = this.accountForm.value.passwored;
      this.user.email = this.accountForm.value.email;
      this.user.address = this.accountForm.value.address;
      this.user.state = this.accountForm.value.state;
      this.user.town = this.accountForm.value.town;
      console.log(this.user)
      this.authService.updateNewDB(this.user) 
      this.toastr.success("User Created ");
      this.router.navigate(['/delivery/list-delivery-boys'])
    }
  }

  private createId(): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = this.id || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
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
                if(this.imageType == "idPhoto1"){
                  this.idPhoto1=url;
                  this.user.idPhoto1 = url;
                }else if(this.imageType == "idPhoto2"){
                  this.idPhoto2=url;
                  this.user.idPhoto2 = url;
                  
                }else if(this.imageType == "dLPhoto"){
                  this.dLPhoto=url;
                  this.user.dLPhoto = url;
                  
                }else if(this.imageType == "mLPhoto"){
                  this.mLPhoto=url;
                  this.user.mLPhoto = url;
                  
                }else {
                  this.fishPhoto=url;
                  this.user.fishPhoto = url;
                  
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

  

   
}

