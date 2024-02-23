import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Permission } from 'src/app/shared/interfaces/permission';
import { Shop } from 'src/app/shared/interfaces/shop';
import { State } from 'src/app/shared/interfaces/state';
import { Town } from 'src/app/shared/interfaces/town';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DataService } from 'src/app/shared/service/data.service';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public accountForm: FormGroup;
  public permissionForm: FormGroup;
  public registerErrors: string;
  public selectedRole:string;
  user:User = new User();
  towns:Town[]=[];
  states:State[]=[];
  selectedTown:string;
  zoneRole:boolean =false;
  public mode: 'edit' | 'add';
  roles=[{name:"Management",type:"manager"}];
  zones=[{name:"All Zones",value:true},{name:"Single Zone",value:false}];
  permission : Permission= new Permission();
  shops:Shop[]=[];
  shopsF:Shop[]=[]
  id:any;
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private toastr:ToastrService,
    private router:Router,private route:ActivatedRoute,private productService:ProductService,private dataService:DataService) {
    this.createAccountForm();
    this.createPermissionForm();
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

  onKey(value) { 
    this.shopsF = this.search(value);
    }
    search(value: string) { 
      let filter = value.toLowerCase();
      return this.shops.filter(option => option.name.toLowerCase().startsWith(filter));
    }
    selectRole(){
      if(this.selectedRole == 'collector'){
        this.user.allZone = false;
        this.zoneRole=false;
        
      }else if(this.selectedRole == 'storage'){
        this.user.allZone = true;
        this.zoneRole=true;
      }
    }
  createAccountForm() {
    this.accountForm = this.formBuilder.group({
      roles: [this.user && this.user.roles||false],
      type: [this.user && this.user.type||"manager"],
      allZone:[this.user && this.user.allZone||true],
      state:[this.user && this.user.state],
      town:[this.user && this.user.town],
      firstName: [this.user && this.user.firstName],
      lastName: [this.user && this.user.lastName],
      phone: [this.user && this.user.phone],
      email: [this.user && this.user.email],
      balance:[this.user.balance || 0],
      password: [this.user && this.user.password],
      confirmPwd: []
    })
  }
  createPermissionForm() {
    this.permissionForm = this.formBuilder.group({
      add_product: [this.permission && this.permission?.add_product|| true],
      edit_product: [this.permission && this.permission?.edit_product|| true],
      delete_product: [this.permission && this.permission?.delete_product|| true],
      view_order: [this.permission && this.permission?.view_order|| true],
      update_order: [this.permission && this.permission?.update_order|| true],
      delete_order: [this.permission && this.permission?.delete_order|| true],
      add_user: [this.permission && this.permission?.add_user|| true],
      update_user: [this.permission && this.permission?.update_user|| true],
      delete_user: [this.permission && this.permission?.delete_user|| true],
      view_customer: [this.permission && this.permission?.view_customer|| true],
      add_coupon: [this.permission && this.permission?.add_coupon|| true],
      delete_coupon: [this.permission && this.permission?.delete_coupon|| true],
      update_setting: [this.permission&& this.permission?.update_setting|| true],
      delete_shop: [this.permission&& this.permission?.delete_shop|| true],
      update_shop: [this.permission&& this.permission?.update_shop|| true],
      add_shop: [this.permission&& this.permission?.add_shop|| true],
      view_shop: [this.permission&& this.permission?.view_shop|| true],
    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.queryParams["id"];
    if(this.id){
      this.mode='edit';
      this.authService.getUser(this.id).subscribe(user=>{
        this.user = user;
        this.permission = this.user.permission;
        if(!user.allZone){
          this.selectedRole = user.type;
          this.selectRole()
          this.getTowns();
          this.selectedTown = user.town;
          this.getStates();
        }else{
          this.zoneRole=true;
        }
        console.log(this.user)
        this.createAccountForm();
        this.createPermissionForm();
      })
    }else{
      this.mode='add';
      this.getTowns();
    }
  }

  addUser(){
    if (this.mode=='add' && this.accountForm.value.password !== this.accountForm.value.confirmPwd) {
      this.registerErrors = 'Passwords don\'t match!';
      

    } else {
      let id  = "";
      if(this.accountForm.value.type!='manager'){
       id = this.accountForm.value.phone; 
      }else{
        id = this.createId();
      }

      if(this.accountForm.value.type =='storage'){
        this.accountForm.controls['town'].setValue("")
        this.accountForm.controls['state'].setValue("")
       }
      
       if(this.accountForm.value.type =='manager' && this.accountForm.value.allZone == true){
        this.accountForm.controls['town'].setValue("")
        this.accountForm.controls['state'].setValue("")
       }
      
      this.authService.updateNewUser(id,this.accountForm.value.email, this.accountForm.value.password,this.accountForm.value.firstName,this.accountForm.value.lastName,this.accountForm.value.phone,this.accountForm.value.roles,this.accountForm.value.type,this.permissionForm.value,this.accountForm.value.allZone,this.accountForm.value.state,this.accountForm.value.town,this.accountForm.value.balance)
      this.toastr.success("User Created ");
      this.router.navigate(['/users/list-user'])
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

   
}

