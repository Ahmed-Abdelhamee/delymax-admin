import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of, Subscription } from 'rxjs';
import { Category } from 'src/app/shared/interfaces/category.model';
import { Price, Product,Side } from 'src/app/shared/interfaces/product.model';
import { Shop } from 'src/app/shared/interfaces/shop';
import { Type } from 'src/app/shared/interfaces/type.model';
import { Unit } from 'src/app/shared/interfaces/unit';
import { CategoryService } from 'src/app/shared/service/category.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { ShopService } from 'src/app/shared/service/shop.service';
import { TypeService } from 'src/app/shared/service/type.service';
export class DomainProduct extends Product {

}

@Component({
  selector: 'app-add-shop-product',
  templateUrl: './add-shop-product.component.html'
})
export class AddShopProductComponent implements OnInit {
  @ViewChild('photos', { static: true }) photos;
  public id;
  public product: DomainProduct;
  public productForm: FormGroup;
  public mode: 'edit' | 'add';
  private productSubscription: Subscription;
  private formSubscription: Subscription;
  public counter: number = 1;
  shopId:any;
  public shop:Shop;
  public allLang = true;
  categories: Category[] = new Array();
  types:Type[] = [];
  selectedCategory: Category;
  selectedSide:Side;
  selectedType: Type;
  images = [];
  addSize:any;
  addPrice = 0;
  addSideSize :any;
  addSidePrice = 0;
  addSideName = '';
  addSideNameEn = '';
  sizes:Price[] = [];
  sides:Side[]=[];
  units:Unit[]=[];
  mainSides:Side[]=[];
  priceList:Price[] = [];
  Status=[
    {text: 'Yes', value: true},
    {text: 'No', value: false},
  ];

  selectedImage = this.images[0];
  public image =
  "assets/images/pro3/1.jpg";
  


  constructor(private fb: FormBuilder,private shopService:ShopService,private productService:ProductService,
    private typeService:TypeService
    ,public route: ActivatedRoute,private router:Router,private log:ToastrService) {
    
      this.initForm();
  
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
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

  selectImage(i){
  this.selectedImage = this.image;
      console.log(this.selectedImage)
  }
  ngOnInit() {
    
  
    this.id = this.route.snapshot.queryParams["id"];
    this.shopId = this.route.snapshot.queryParams["shopId"];
      // if we have an id, we're in edit mode
      if (this.id) {
        this.mode = 'edit';
        this.getProduct(this.id);
        this.initForm();
      } else {
        // else we are in add mode
        this.mode = 'add';
        this.constructProduct();
        this.initForm();
   
       
      }

      this.shopService.getShop(this.shopId).subscribe(res => {
        this.shop = res;
      });
  

 
        this.shopService.getCategories(this.shopId).subscribe(res => {
          this.categories = this.categories.concat(res);
        });
    
        this.typeService.getTypes(this.shopId).subscribe(res => {
          this.types = res;
        });
        this.shopService.getSides(this.shopId).subscribe(res => {
          this.mainSides = res;
        });

        this.shopService.getUnits(this.shopId).subscribe(res => {
          this.units = res;
        });
     
      
   
  }

  addSdName(){
  this.addSideName = this.selectedSide.name;
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
    this.productForm = this.fb.group({
      title: [this.product && this.product.title,
        Validators.required]
        ,
        title_En: [this.product && this.product.title_En,
          Validators.required]
          ,
      id:[ {
          value: this.product && this.product.id,
          disabled: true
        },
        [Validators.required, Validators.min(0)]]
        ,
      description: [this.product && this.product.description,
        Validators.required]
      ,
      description_En: [this.product && this.product.description_En,
        Validators.required]
      ,
      category: [this.product && this.product.category,
          Validators.required]
      ,
      brand: [this.product && this.product.brand,
        Validators.required]
      ,
      shopId: [{value:this.product && this.product.shopId,
        disabled: true},
       Validators.required]
      ,
      price: this.fb.array(
       [])
      ,
      discount: [this.product && this.product.discount, [
        Validators.required,
        Validators.min(0)
      ]]
    });
    this.onFormChanges();
  
  }

 

  private getProduct(id): void {
      this.productSubscription = this.productService
      .getProduct(id)
      .subscribe((product) => {
        if (product) {
        
          this.syncProduct(product);
          this.images = this.product.images
          this.image = this.product.images[0]
          if(product.price){
            this.priceList =product.price;
            this.sizes = product.price;
          }else{
           this.priceList = []; 
           this.sizes = [];
          }
         
          
          console.log(this.sizes);
          console.log(product)
          if(product.sides){
            this.sides = product.sides; 
          }else{
           this.sides = []; 
          }
         
          
         
          this.initForm();
  
        }
      });
  }

  private constructProduct() {
    const product = this.constructMockProduct();
    this.syncProduct(product);
    this.initForm();
  }

  private syncProduct(product): void {
    const id = this.createId(product);
    const images = this.handleImageURLs(product);
    const price = this.priceList;
    const sides = this.sides;
    const enew = this.handleNew(product);
    const featured = this.handleFeatured(product);
    const view = this.handleView(product);
    let sale = false;
    if(product.discount >0)
    sale = true;
    const date = new Date().toUTCString();
    this.product = {
      ...product,
      sale,
      price,
      sides,
      shopId:this.shopId,
      new:enew,
      featured,
      date,
      view,
      id,
      images
    };
  }

  private handleView(product: Product): boolean {
    if (product.view ) {
      return product.view;
    }
    return true;
  }

  private handleNew(product: Product): boolean {
    if (product.new ) {
      return product.new;
    }
    return true;
  }

  private handleFeatured(product: Product): boolean {
    if (product.featured ) {
      return product.featured;
    }
    return true;
  }

  public onProductFormSubmit() {
    
    this.syncProduct({ ...this.product, ...this.productForm.value });
    const productToSubmit = this.product;
    const files: FileList = this.photos.nativeElement.files;
    if (this.mode === 'add' && files.length > 0) {
        this.addProduct(productToSubmit, files);  
    } else if (this.mode === 'edit') {
      console.log('update')
      this.updateProduct(productToSubmit, files);
    } else {
      this.log.error('Please provide a file for your product');
      return;
    }
  }

  private addProduct(product: Product, files: FileList) {
    if(product.price.length==0){
      this.log.error("the product must has at least one price");
    }else{
    this.productService.addProduct({ product, files })
    .subscribe(
      (savedProduct: Product) => {
        if (savedProduct.id) {
          this.product = null;
          this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: this.shopId}});
        }
      },
      (error) => {
        this.log.error('Could not upload your product');
        return of(error);
      }
    );
    }
  
  }

 

  private updateProduct(product: Product, files?: FileList) {
    this.productSubscription.unsubscribe();
    if(product.price.length==0){
      this.log.error("the product must has at least one price");
    }else{
      this.productService.updateProductAR({ product, files }).subscribe(
        (response: Product) => {
          this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: this.shopId}});
        },
        (error) => this.log.error('Could not update your product')
      ); 
    }
     
  }
   // pure helper functions start here:
   private constructMockProduct() {
    return new Product();
  }

 

  private createId(product: Product): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = product.id || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }

  
  private checkForSale(reduction: number): boolean {
    return reduction > 0;
  }

  private calculateReduction(price: number, discount: number): number {
    const reduction = Math.round((price/discount) * 100);
    return reduction > 0 ? reduction : 0;
  }

  private handleImageURLs(product: Product): string[] {
    if (product.images ) {
      return product.images;
    }
    return [];
  }

  private onFormChanges() {
    this.formSubscription = this.productForm.valueChanges.subscribe(
      (formFieldValues) => {
        const product = { ...this.product, ...formFieldValues };
        this.syncProduct(product);
      }
    );
  }

  newItem(): Price {
    console.log(this.addSize)
    return {
    id:this.addSize.id,
    unit: this.addSize.unit,
    unit_En:this.addSize.unit_En,
    price: this.addPrice 
    };
  }

  newSide(): Side {
    return {
    size: this.addSideSize.id,
    price: this.addSidePrice,
    name:this.addSideName,
    name_En:this.addSideNameEn
    };
  }
    //for adding new array
    get itemsList(): Price[] {
      return this.priceList;
    }
  

  addItems() {
    this.priceList.push(this.newItem());
    this.sizes = this.priceList;
    this.addSize=new Unit();
    this.addPrice = 0;
    console.log(this.priceList)
    console.log(this.sizes)
    this.initForm()
  }

  addSide() {
    this.addSideName = this.selectedSide.name;
    this.addSideNameEn = this.selectedSide.name_En;
    this.addSidePrice = this.selectedSide.price;
    this.sides.push(this.newSide());
    this.addSideName = "";
    this.addSidePrice = 0;
    console.log(this.sides)
    this.initForm()
  }

  removeItems(i) {
   
    if (i !== -1) {
        this.priceList.splice(i, 1);
        this.sizes.splice(i, 1);
        if(this.sides.length>0)
        this.sides.splice(i, 1);
    }

  }
  
  removeSide(i) {
   
    if (i !== -1) {
        this.sides.splice(i, 1);
        
    }

  }
}


