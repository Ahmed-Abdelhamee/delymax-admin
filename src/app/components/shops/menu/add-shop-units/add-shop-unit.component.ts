import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Unit } from 'src/app/shared/interfaces/unit';
import { ShopService } from 'src/app/shared/service/shop.service';
export class Domainunit extends Unit {

}
@Component({
  selector: 'app-add-shop-unit',
  templateUrl: './add-shop-unit.component.html'
})
export class AddShopUnitComponent implements OnInit {
  unitForm: FormGroup;
  id:any;
  shopId:any;
  public allLang = true;
  public mode: 'edit' | 'add';
  unit:Domainunit;
  private formSubscription: Subscription;
  private unitSubscription: Subscription;
  constructor(private shopService:ShopService,private _domSanitizer: DomSanitizer,
    private fb: FormBuilder,private messegeService : ToastrService,private route:ActivatedRoute,private router:Router) {
    this.initForm();
   }

  private initForm() {
      this.unitForm = this.fb.group({
        unit: [this.unit && this.unit.unit,
          Validators.required]
          ,
          unit_En: [this.unit && this.unit.unit_En,
            Validators.required]
            ,
        id:[ {
            value: this.unit && this.unit.id,
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
      this.getunit(this.id);
      this.initForm();
     
    }else{
      this.mode='add'
      this.constructunit();
      this.initForm();
    }
    
  }
  getunit(id: any) {
   
      this.unitSubscription = this.shopService.getUnit(this.id).subscribe(unit=>{  
        this.syncunit(unit);
        this.initForm();
        
      })
    
  }
  constructunit() {
    const unit = new Unit();
    this.syncunit(unit);
    this.initForm();
  }
  syncunit(unit) {
    const id = this.createId(unit);
    const shopId = this.shopId;
    this.unit = {
      ...unit,
      id,
      shopId
    };
  }

  private onFormChanges() {
    this.formSubscription = this.unitForm.valueChanges.subscribe(
      (formFieldValues) => {
        const unit = { ...this.unit, ...formFieldValues };
        this.syncunit(unit);
      }
    );
  }



  private createId(unit: Unit): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = unit.id || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }

  constructMockunit() {
    new Unit();
  }
openSnackBar(message: string) {
      this.messegeService.info("message");
    }
  

  onAddType() {
    this.syncunit({ ...this.unit, ...this.unitForm.value });
    const unitToSubmit = this.unit;
    if (this.mode === 'add') {
      this.addunit(unitToSubmit);
    } else if (this.mode === 'edit') {
      console.log('update')
      this.updateunit(unitToSubmit);
    } else {

      return;
    }

  }
  updateunit(unit) {
    this.unitSubscription.unsubscribe();

      this.shopService.updateUnit(unit).subscribe(
        (response: Unit) => {
          this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: this.shopId}});
        },
        (error) => this.messegeService.error('Could not update your unit')
      );
    
  }
  addunit(unit) {
   
        this.shopService.addUnit(unit); 
      
        this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: this.shopId}});
    
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

}
