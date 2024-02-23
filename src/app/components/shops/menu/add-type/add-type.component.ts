import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Type } from 'src/app/shared/interfaces/type.model';
import { TypeService } from 'src/app/shared/service/type.service';
import {Location} from '@angular/common';
export class DomainType extends Type {

}
@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {

  typeForm: FormGroup;
  id:any;
  shopId:any;
  public allLang = true;
  public mode: 'edit' | 'add';
  type:DomainType;
  private formSubscription: Subscription;
  private typeSubscription: Subscription;
  constructor(private _location: Location,private typeService:TypeService,private _domSanitizer: DomSanitizer,
    private fb: FormBuilder,private messegeService : ToastrService,private route:ActivatedRoute,private router:Router) {
    this.initForm();
   }

  private initForm() {
      this.typeForm = this.fb.group({
        name: [this.type && this.type.name,
          Validators.required]
          ,
          name_En: [this.type && this.type.name_En,
            Validators.required]
            ,
        id:[ {
            value: this.type && this.type.id,
            disabled: true
          },
          [Validators.required]
         ]
      });
      this.onFormChanges();
    
    }


  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams["id"];
    this.shopId = this.route.snapshot.queryParams["shopId"];
    
    if(this.id){
      this.mode='edit'
      this.getType(this.id);
      this.initForm();
     
    }else{
      this.mode='add'
      this.constructType();
      this.initForm();
    }
    
  }
  getType(id: any) {
    
      this.typeSubscription = this.typeService.getType(this.id).subscribe(type=>{  
        this.syncType(type);
        this.initForm();
        
      })
    
    
  }
  constructType() {
    const type = new Type();
    this.syncType(type);
    this.initForm();
  }
  syncType(type) {
    const id = this.createId(type);
    const shopId = this.shopId;
    this.type = {
      ...type,
      shopId,
      id
    };
  }

  private onFormChanges() {
    this.formSubscription = this.typeForm.valueChanges.subscribe(
      (formFieldValues) => {
        const type = { ...this.type, ...formFieldValues };
        this.syncType(type);
      }
    );
  }



  private createId(type: Type): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = type.id || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }

  constructMockCategory() {
    new Type();
  }
openSnackBar(message: string) {
      this.messegeService.info("message");
    }
  

  onAddType() {
    this.syncType({ ...this.type, ...this.typeForm.value });
    const typeToSubmit = this.type;
    if (this.mode === 'add') {
      this.addType(typeToSubmit);
    } else if (this.mode === 'edit') {
      console.log('update')
      this.updateType(typeToSubmit);
    } else {

      return;
    }

  }
  updateType(type) {
    this.typeSubscription.unsubscribe();
   
      this.typeService.updateType(type ).subscribe(
        (response: Type) => {
          this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: this.shopId}});
        },
        (error) => this.messegeService.error('Could not update your Type')
      );
    
  }
  addType(type) {
   
    
       this.typeService.addType(type).subscribe((response: Type) => {
        this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: this.shopId}});

       },
       (error) => this.messegeService.error('Could not Add your Type'));    
      
       
    
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

   backClicked() {
    this._location.back();
  }

}
