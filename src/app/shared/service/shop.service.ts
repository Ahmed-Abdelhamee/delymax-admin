import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage, AngularFireUploadTask } from "@angular/fire/storage";
import { ToastrService } from "ngx-toastr";
import { Observable, of } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import { map, tap } from "rxjs/operators";
import { Category } from "../interfaces/category.model";
import { Company } from "../interfaces/company";
import { Product } from "../interfaces/product.model";
import { Shop } from "../interfaces/shop";
import { Side } from "../interfaces/side";
import { Unit } from "../interfaces/unit";
import { Wearhouse } from "../interfaces/wearhouse";
import { UploadService } from "./upload.service";

@Injectable({
    providedIn: 'root'
  })
  export class ShopService {
 
  
    
    task: AngularFireUploadTask;
  
    percentage: Observable<number>;
    snapshot: Observable<any>;
    public Currency = { name: 'Dollar', currency: 'USD', price: 1 } // Default Currency
    public OpenCart: boolean = false;
    public Products
    public Sliders
    public Shops;
    downloadURL: Observable<string>;
    pro: Product = {}
    constructor( private toastrService: ToastrService,
      private angularFireDatabase: AngularFireDatabase
      ,private uploadService:UploadService,
      private messageService:ToastrService,
      private storage: AngularFireStorage) { }



      public getShop(id: string): Observable<Shop | null> {
        return this.angularFireDatabase
          .object<Shop>('Shops/'+id)
          .valueChanges()
          .pipe(
            tap((result) => {
              if (result) {
                console.log("true")
                return of(result);
              
              } else {
                this.messageService.error(`Found no shop with id=${id}`);
                return of(null);
              }
            }),
            
          );
      }

      public getCompany(id: string): Observable<Company | null> {
        return this.angularFireDatabase
          .object<Company>('companies/'+id)
          .valueChanges()
          .pipe(
            tap((result) => {
              if (result) {
                console.log("true")
                return of(result);
              
              } else {
                this.messageService.error(`Found no Company with id=${id}`);
                return of(null);
              }
            }),
            
          );
      }

      public getWearHouse(id: string): Observable<Wearhouse | null> {
        return this.angularFireDatabase
          .object<Wearhouse>('wareHouses/'+id)
          .valueChanges()
          .pipe(
            tap((result) => {
              if (result) {
                console.log("true")
                return of(result);
              
              } else {
                this.messageService.error(`Found no Wearhouse with id=${id}`);
                return of(null);
              }
            }),
            
          );
      }



      public getCategories(id:string): Observable<Category[]> {
        return this.angularFireDatabase
          .list<Category>('categories', (ref) =>
            ref.orderByChild("shopId").equalTo(id)
          )
          .valueChanges()
          .pipe(map((arr) => arr));
      }
    
      removeCategoryAR(id: any) {
        throw new Error('Method not implemented.');
      }

      getProducts(id: any): Observable<Product[]>  {
            return this.angularFireDatabase
              .list<Product>('products', (ref) => ref.orderByChild("shopId").equalTo(id))
              .valueChanges()
              .pipe(map((arr) => 
              arr.reverse()
              
              ));
      }
      
      isFeaturesAR(id: any, checked: boolean) {
        throw new Error('Method not implemented.');
      }
      isNewAR(id: any, checked: boolean) {
        throw new Error('Method not implemented.');
      }

      public addShop(shop: Shop) {
        const url = `Shops/${shop.shopId}`;
        const dbOperation = this.angularFireDatabase
        .object<Shop>(url)
        .update(shop)
        .then((response) => {
          this.messageService.success(`Updated Shop ${shop.name}`);
          return shop;
        })
        .catch((error) => {
          return error;
        });
      return fromPromise(dbOperation);
       
      }

      public addWearHouse(wearhouse: Wearhouse) {
        const url = `wareHouses/${wearhouse.id}`;
        const dbOperation = this.angularFireDatabase
        .object<Wearhouse>(url)
        .update(wearhouse)
        .then((response) => {
          this.messageService.success(`Updated WareHouses ${wearhouse.name}`);
          return wearhouse;
        })
        .catch((error) => {
          return error;
        });
      return fromPromise(dbOperation);
       
      }


      public addCompany(company: Company) {
        const url = `companies/${company.id}`;
        const dbOperation = this.angularFireDatabase
        .object<Company>(url)
        .update(company)
        .then((response) => {
          this.messageService.success(`Updated Company ${company.name}`);
          return company;
        })
        .catch((error) => {
          return error;
        });
      return fromPromise(dbOperation);
       
      }
      


        public getCategory(id:string): Observable<Category | null> {
          return this.angularFireDatabase
            .object<Category>('categories/'+id)
            .valueChanges()
            .pipe(
              tap((result) => {
                if (result) {
                
                  return of(result);
                } else {
                  this.messageService.error(`Found no category`);
                  return of(null);
                }
              }),
          
            );
        
        }
      
        public updateCategory(data: { category: Category; files: FileList }) {
          const url = `categories/${data.category.id}`;
      
          if (!data.files.length) {
            return this.updateCategoryWithoutNewImage(data.category, url);
          }
      
          const dbOperation = this.uploadService
            .startUpload(data)
            .then((task) => {
              task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
                data.category.image=downloadURL;
                console.log('File available at', downloadURL);
                return this.angularFireDatabase
                .list('categories')
                .update(data.category.id.toString(), data.category);
            });
          },
          (error) => error)
          .then((response) => {
            this.messageService.success(`edit Category ${data.category.name}`);
            return data.category;
          })
          .catch((error) => {
            this.messageService.error(
              `edit Failed, Category ${data.category.name}`
            );
        
            return error;
          });
        return fromPromise(dbOperation);
        }
      
        private updateCategoryWithoutNewImage(categoery: Category, url: string) {
          const dbOperation = this.angularFireDatabase
            .object<Category>(url)
            .update(categoery)
            .then((response) => {
              this.messageService.success(`Updated Category ${categoery.name}`);
              return categoery;
            })
            .catch((error) => {
    
              return error;
            });
          return fromPromise(dbOperation);
        }
   
        public addCategory(data: { category: Category; files: FileList }) {
          const dbOperation = this.uploadService
            .startUpload(data)
            .then((task) => {
              task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
                data.category.image = downloadURL;
                console.log('File available at', downloadURL);
                return this.angularFireDatabase
                .list('categories')
                .set(data.category.id.toString(), data.category);
               
              });
             
              
            }, (error) => error)
            .then((response) => {
              this.messageService.success(`Added category ${data.category.name}`);
              return data.category;
            })
            .catch((error) => {
              this.messageService.error(
                `Add Failed, category ${data.category.name}`
              );
              return error;
            });
          return fromPromise(dbOperation);
        }


        public getSides(id): Observable<Side[]> {
          return this.angularFireDatabase
            .list<Side>('sides', (ref) =>
              ref.orderByChild("shopId").equalTo(id)
            )
            .valueChanges()
            .pipe(map((arr) => arr));
        }


        public getSide(id: string): Observable<Side | null> {
          return this.angularFireDatabase
            .object<Side>('sides/'+id)
            .valueChanges()
            .pipe(
              tap((result) => {
                if (result) {
                  console.log("true")
                  return of(result);
                
                } else {
                  this.messageService.error(`Found no side with id=${id}`);
                  return of(null);
                }
              }),
      
            );
        }

        public updateSide(side: Side) {
          const dbOperation = this.angularFireDatabase
            .object<Side>('sides/'+side.id)
            .update(side)
            .then((response) => {
              
              this.messageService.success(`Updated Side ${side.name}`);
              return side;
            })
            .catch((error) => {
              return error;
            });
          return fromPromise(dbOperation);
        }

        public addSide(side: Side) {
          const dbOperation =  this.angularFireDatabase
                .list('sides')
                .set(side.id.toString(), side)
              
             
            .then((response) => {
              this.messageService.success(`Added side ${side.name}`);
              return side;
            })
            .catch((error) => {
              this.messageService.error(
                `Add Failed, Type ${side.name}`
              );
              return error;
            });
          return fromPromise(dbOperation);
        }

        public getUnits(id): Observable<Unit[]> {
          return this.angularFireDatabase
            .list<Unit>('units', (ref) =>
              ref.orderByChild("shopId").equalTo(id)
            )
            .valueChanges()
            .pipe(map((arr) => arr));
        }


        public getUnit(id: string): Observable<Unit | null> {
          return this.angularFireDatabase
            .object<Unit>('units/'+id)
            .valueChanges()
            .pipe(
              tap((result) => {
                if (result) {
                  console.log("true")
                  return of(result);
                
                } else {
                  this.messageService.error(`Found no unit with id=${id}`);
                  return of(null);
                }
              }),
      
            );
        }

        isFeatures(id: any,isFeatures : boolean) {
          const dbOperation = this.angularFireDatabase
          .object('products/'+id+'/featured')
          .set(isFeatures)
          .then((response) => {
            return false;
          })
          .catch((error) => {
            return error;
          });
        return fromPromise(dbOperation);
        }

        public updateUnit(unit: Unit) {
          const dbOperation = this.angularFireDatabase
            .object<Unit>('units/'+unit.id)
            .update(unit)
            .then((response) => {
              
              this.messageService.success(`Updated unit ${unit.unit}`);
              return unit;
            })
            .catch((error) => {
              return error;
            });
          return fromPromise(dbOperation);
        }

        public addUnit(unit: Unit) {
          const dbOperation =  this.angularFireDatabase
                .list('units')
                .set(unit.id.toString(), unit)
              
             
            .then((response) => {
              this.messageService.success(`Added unit ${unit.unit}`);
              return unit;
            })
            .catch((error) => {
              this.messageService.error(
                `Add Failed, Type ${unit.unit}`
              );
              return error;
            });
          return fromPromise(dbOperation);
        }

        removeUnit(key:string): Promise<void> {
          return this.angularFireDatabase.database.ref('/units/'+key).remove();
        }

        removeSide(key:string): Promise<void> {
          return this.angularFireDatabase.database.ref('/sides/'+key).remove();
        }

        removeProduct(key:string): Promise<void> {
          return this.angularFireDatabase.database.ref('/products/'+key).remove();
        }

        removeCategory(key:string): Promise<void> {
          return this.angularFireDatabase.database.ref('/categories/'+key).remove();
        }

        isProductView(id: any,view : boolean) {

          console.log(id+ "  "+view)
          const dbOperation = this.angularFireDatabase
          .object('products/'+id+'/view')
          .set(view)
          .then((response) => {
            return false;
          })
          .catch((error) => {
            return error;
          });
        return fromPromise(dbOperation);
        }
       
    }