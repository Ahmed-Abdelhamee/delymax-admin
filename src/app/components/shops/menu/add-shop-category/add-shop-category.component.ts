import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/shared/interfaces/category.model';
import { CategoryService } from 'src/app/shared/service/category.service';
import { ShopService } from 'src/app/shared/service/shop.service';
export class DomainCategory extends Category {

}

@Component({
  selector: 'app-add-shop-category',
  templateUrl: './add-shop-category.component.html'
})
export class AddShopCategoryComponent implements OnInit {
  @ViewChild('photos', { static: true }) photos;
  categoryForm: FormGroup;
  category : DomainCategory;
  id:any;
  shopId:any;
  public allLang = true;
  public mode: 'edit' | 'add';
  private formSubscription: Subscription;
  private CategorySubscription: Subscription;
  constructor(private shopService:ShopService,private _domSanitizer: DomSanitizer,
    private fb: FormBuilder,private route:ActivatedRoute,private router:Router,private toastr:ToastrService) { 
      this.initForm();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams["id"];
    this.shopId = this.route.snapshot.queryParams["shopId"];
    
    if(this.id){
      this.mode='edit'
      this.getCategory(this.id);
      this.initForm();
     
    }else{
      this.mode='add'
      this.constructCategory();
      this.initForm();
    }
    
  }
  getCategory(id: any) {
   
      this.CategorySubscription = this.shopService.getCategory(this.id).subscribe(cat=>{  
        this.syncCategory(cat);
        this.initForm();
        
      })
   
    
  }
  constructCategory() {
    const category = new Category();
    this.syncCategory(category);
    this.initForm();
  }
  syncCategory(category) {
    const id = this.createId(category);
    const image = this.handleImageURLs(category);
    const shopId = this.shopId;
    this.category = {
      ...category,
      id,
      image,
      shopId
    };
  }

  private onFormChanges() {
    this.formSubscription = this.categoryForm.valueChanges.subscribe(
      (formFieldValues) => {
        const category = { ...this.category, ...formFieldValues };
        this.syncCategory(category);
      }
    );
  }
  private handleImageURLs(category: Category): string {
    if (category.image ) {
      return category.image;
    }
    return '';
  }


  private createId(category: Category): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = category.id || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }

  constructMockCategory() {
    new Category();
  }

  private initForm() {
    this.categoryForm = this.fb.group({
      name: [this.category && this.category.name,
        Validators.required]
        ,
        name_En: [this.category && this.category.name_En,
          Validators.required]
          ,
      id:[ {
          value: this.category && this.category.id,
          disabled: true
        },
        [Validators.required]
       ]
    });
    this.onFormChanges();
  
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
  onAddCategory() {
    this.syncCategory({ ...this.category, ...this.categoryForm.value });
    const categoryToSubmit = this.category;
    const files: FileList = this.photos.nativeElement.files;
    if (this.mode === 'add' && files.length > 0) {
      this.addCategory(categoryToSubmit, files);
    } else if (this.mode === 'edit') {
      console.log('update')
      this.updateCategory(categoryToSubmit, files);
    } else {

      return;
    }

  }
  updateCategory(category, files: FileList) {
    this.CategorySubscription.unsubscribe();

      this.shopService.updateCategory({ category, files }).subscribe(
        (response: Category) => {
          this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: this.shopId}});
        },
        (error) => this.toastr.error('Could not update your category')
      );
   
  }
  addCategory(category, files: FileList) {
   
      this.shopService.addCategory({category,files});

      this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: this.shopId}});
   
  }

}
