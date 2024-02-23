import { Component, OnInit, Type } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Town } from 'src/app/shared/interfaces/town';
import { DeliveryService } from 'src/app/shared/service/delivery.service';
import {Location} from '@angular/common';
export class DomainTown extends Town {

}
@Component({
  selector: 'app-add-town',
  templateUrl: './add-town.component.html',
  styleUrls: ['./add-town.component.scss']
})
export class AddTownComponent implements OnInit {

  townForm: FormGroup;
  id:any;
  lang:any;
  public allLang = true;
  public mode: 'edit' | 'add';
  town:DomainTown;
  private formSubscription: Subscription;
  private twonSubscription: Subscription;
  constructor(private _location: Location,private deliveryService:DeliveryService,private _domSanitizer: DomSanitizer,
    private fb: FormBuilder,private messegeService : ToastrService,private route:ActivatedRoute,private router:Router) {
    this.initForm();
   }

  private initForm() {
      this.townForm = this.fb.group({
        name: [this.town && this.town.name,
          Validators.required]
          ,
          name_En: [this.town && this.town.name_En,
            Validators.required]
            ,
        id:[ {
            value: this.town && this.town.id,
            disabled: true
          },
          [Validators.required]
         ]
      });
      this.onFormChanges();
    
    }


  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams["id"];
    this.lang = this.route.snapshot.queryParams["lang"];
    
    if(this.id){
      this.mode='edit'
      this.getType(this.id);
      this.initForm();
     
    }else{
      this.mode='add'
      this.constructType();
      this.initForm();
    }
    if(this.lang){
      console.log(this.lang)
    }
  }
  getType(id: any) {

      this.twonSubscription = this.deliveryService.getTown(this.id).subscribe(type=>{  
        this.syncTown(type);
        this.initForm();
        
      })
    
    
  }
  constructType() {
    const town = new Town();
    this.syncTown(town);
    this.initForm();
  }
  syncTown(town) {
    const id = this.createId(town);
    this.town = {
      ...town,
      id
    };
  }

  private onFormChanges() {
    this.formSubscription = this.townForm.valueChanges.subscribe(
      (formFieldValues) => {
        const type = { ...this.town, ...formFieldValues };
        this.syncTown(type);
      }
    );
  }



  private createId(town: Town): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = town.id || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }

  constructMockCategory() {
    new Town();
  }
openSnackBar(message: string) {
      this.messegeService.info("message");
    }
  

  onAddType() {
    this.syncTown({ ...this.town, ...this.townForm.value });
    const twonToSubmit = this.town;
    if (this.mode === 'add') {
      this.addTwon(twonToSubmit);
    } else if (this.mode === 'edit') {
      console.log('update')
      this.updateTwon(twonToSubmit);
    } else {

      return;
    }

  }
  updateTwon(town) {
    this.twonSubscription.unsubscribe();

      this.deliveryService.updateTown(town ).subscribe(
        (response: Town) => {
          this.router.navigate(['/settings/towns']);
        },
        (error) => this.messegeService.error('Could not update your town')
      );
    
      
  }
  addTwon(type) {
   
   
       this.deliveryService.addTown(type).subscribe(town=>{
          this.router.navigate(['/settings/towns']);  
       });    
      
       
    }
   

    backClicked() {
      this._location.back();
    }
  

}
