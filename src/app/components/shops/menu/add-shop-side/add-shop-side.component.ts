import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Side } from 'src/app/shared/interfaces/side';
import { Type } from 'src/app/shared/interfaces/type.model';
import { ShopService } from 'src/app/shared/service/shop.service';
export class DomainSide extends Side {

}
@Component({
  selector: 'app-add-shop-side',
  templateUrl: './add-shop-side.component.html'
})
export class AddShopSideComponent implements OnInit {
  sideForm: FormGroup;
  id:any;
  shopId:any;
  public allLang = true;
  public mode: 'edit' | 'add';
  side:DomainSide;
  private formSubscription: Subscription;
  private sideSubscription: Subscription;
  constructor(private shopService:ShopService,private _domSanitizer: DomSanitizer,
    private fb: FormBuilder,private messegeService : ToastrService,private route:ActivatedRoute,private router:Router) {
    this.initForm();
   }

  private initForm() {
      this.sideForm = this.fb.group({
        name: [this.side && this.side.name,
          Validators.required]
          ,
          name_En: [this.side && this.side.name_En,
            Validators.required]
            ,
          price: [this.side && this.side.price,
            Validators.required]
            ,
        id:[ {
            value: this.side && this.side.id,
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
      this.getSide(this.id);
      this.initForm();
     
    }else{
      this.mode='add'
      this.constructSide();
      this.initForm();
    }
    
  }
  getSide(id: any) {
   
      this.sideSubscription = this.shopService.getSide(this.id).subscribe(side=>{  
        this.syncSide(side);
        this.initForm();
        
      })
    
  }
  constructSide() {
    const side = new Side();
    this.syncSide(side);
    this.initForm();
  }
  syncSide(side) {
    const id = this.createId(side);
    const shopId = this.shopId;
    this.side = {
      ...side,
      id,
      shopId
    };
  }

  private onFormChanges() {
    this.formSubscription = this.sideForm.valueChanges.subscribe(
      (formFieldValues) => {
        const side = { ...this.side, ...formFieldValues };
        this.syncSide(side);
      }
    );
  }



  private createId(side: Side): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = side.id || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }

  constructMockSide() {
    new Side();
  }
openSnackBar(message: string) {
      this.messegeService.info("message");
    }
  

  onAddType() {
    this.syncSide({ ...this.side, ...this.sideForm.value });
    const sideToSubmit = this.side;
    if (this.mode === 'add') {
      this.addSide(sideToSubmit);
    } else if (this.mode === 'edit') {
      console.log('update')
      this.updateSide(sideToSubmit);
    } else {

      return;
    }

  }
  updateSide(side) {
    this.sideSubscription.unsubscribe();

      this.shopService.updateSide(side).subscribe(
        (response: Side) => {
          this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: this.shopId}});
        },
        (error) => this.messegeService.error('Could not update your side')
      );
    
  }
  addSide(side) {
   
        this.shopService.addSide(side); 
      
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
