import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { catchError, finalize, last, map, switchMap, tap } from 'rxjs/operators';
import { Product } from '../interfaces/product.model';
import { Promo } from '../interfaces/promo';
import { Shop } from '../interfaces/shop';
import { Slider } from '../interfaces/slider';
import { MultiUploadService } from './multi-upload.service';
import { UploadService } from './upload.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
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
    private storage: AngularFireStorage,
    private multiUploadService:MultiUploadService) { }

  /*
    ---------------------------------------------
    ---------------  Product  -------------------
    ---------------------------------------------
  */

    public async deleteProduct(key: string) {
      return this.angularFireDatabase.database.ref('/products/'+key).remove();
    }

    public async deleteProductAR(key: string) {
      return this.angularFireDatabase.database.ref('/products/'+key).remove();
    }
    public async deleteShop(key: string) {
      return this.angularFireDatabase.database.ref('/Shops/'+key).remove();
    }
  

  private log(message: string) {
    this.toastrService.show(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



  public get sliders(): Observable<Slider[]> {
    return this.angularFireDatabase
      .list<Slider>('slider', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr.reverse()
      
      ), catchError(this.handleError<Slider[]>(`getSliders`)));
   
   
  }

  public get promo(): Observable<Promo[]> {
    return this.angularFireDatabase
      .list<Promo>('promo', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr.reverse()
      
      ), catchError(this.handleError<Promo[]>(`getPromo`)));
   
   
  }

  // Get Products
  public get getProducts(): Observable<Product[]> {
    return this.products;
  }


  public get products(): Observable<Product[]> {
    return this.angularFireDatabase
      .list<Product>('products', (ref) => ref.orderByChild('date'))
      .valueChanges()
      .pipe(map((arr) => 
      arr.reverse()
      
      ), catchError(this.handleError<Product[]>(`getProducts`)));
   
   
  }

   // Get Products
   public get getShops(): Observable<Shop[]> {
    return this.shops;
  }


  public get shops(): Observable<Shop[]> {
    return this.angularFireDatabase
      .list<Shop>('Shops', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ), catchError(this.handleError<Shop[]>(`getShops`)));
   
   
  }

  public getZoneshops(state:string): Observable<Shop[]> {
    return this.angularFireDatabase
      .list<Shop>('Shops', (ref) => ref.orderByChild("state").equalTo(state))
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ), catchError(this.handleError<Shop[]>(`getShops`)));
   
   
  }

  public getPha(state:string): Observable<Shop[]> {
    return this.angularFireDatabase
      .list<Shop>('Shops', (ref) => ref.orderByChild("state").equalTo(state))
      .valueChanges()
      .pipe(map((arr) => 
      arr.filter(item=>item.type == '3')
      
      ), catchError(this.handleError<Shop[]>(`getShops`)));
   
   
  }


  // Get Products
  public get getProductsAR(): Observable<Product[]> {
    return this.productsAR;
  }


  public get productsAR(): Observable<Product[]> {
    return this.angularFireDatabase
      .list<Product>('products', (ref) => ref.orderByChild('date'))
      .valueChanges()
      .pipe(map((arr) => 
      arr.reverse()
      
      ), catchError(this.handleError<Product[]>(`getProducts`)));
   
   
  }


  getPro(id:string) : Product{
    this.pro = this.angularFireDatabase.object('/products/'+id) as Product
    console.log(this.pro)
    return this.pro
   }

  public getProduct(id: string): Observable<Product | null> {
    return this.angularFireDatabase
      .object<Product>('products/'+id)
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
            console.log("true")
            return of(result);
          
          } else {
            this.toastrService.error(`Found no Product with id=${id}`);
            return of(null);
          }
        }),
        catchError(this.handleError<Product>(`getProduct id=${id}`))
      );
  }

  public getProductAR(id: string): Observable<Product | null> {
    return this.angularFireDatabase
      .object<Product>('products/'+id)
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
            console.log("true")
            return of(result);
          
          } else {
            this.toastrService.error(`Found no Product with id=${id}`);
            return of(null);
          }
        }),
        catchError(this.handleError<Product>(`getProduct id=${id}`))
      );
  }



  public get getSliders(): Observable<Slider[]> {
    return this.sliders;
  }

  public get getPromo(): Observable<Promo[]> {
    return this.promo;
  }

  // Get Products By Slug
  public getProductBySlug(slug: string): Observable<Product> {
    return this.products.pipe(map(items => { 
      return items.find((item: any) => { 
        return item.title.replace(' ', '-') === slug; 
      }); 
    }));
  }

  // Get Products By Slug
  public getProductById(id: string): Observable<Product> {
    return this.products.pipe(map(items => { 
      return items.find((item: Product) => { 
        return item.id === id; 
      }); 
    }));
  }

  public getProductsByDate(limitToLast: number): Observable<Product[]> {
    return this.angularFireDatabase
      .list<Product>('products', (ref) =>
        ref.orderByChild('date').limitToLast(limitToLast)
      )
      .valueChanges()
        .pipe(
          map((arr) => arr.reverse()),
          catchError(this.handleError<Product[]>(`getProductsByDate`))
        );
  }


  /*
    ---------------------------------------------
    ---------------  Wish List  -----------------
    ---------------------------------------------
  */

  

  /*
    ---------------------------------------------
    -------------  Compare Product  -------------
    ---------------------------------------------
  */



  
    // Calculate Stock Counts
  public calculateStockCounts(product, quantity) {
    const qty = product.quantity + quantity
    const stock = product.stock
    if (stock < qty || stock == 0) {
      this.toastrService.error('You can not add more items than available. In stock '+ stock +' items.');
      return false
    }
    return true
  }

 
  

  /*
    ---------------------------------------------
    ------------  Filter Product  ---------------
    ---------------------------------------------
  

  // Get Product Filter
  public filterProducts(filter: any): Observable<Product[]> {
    return this.products.pipe(map(product => 
      product.filter((item: Product) => {
        if (!filter.length) return true
        const Tags = filter.some((prev) => { // Match Tags
          if (item.tags) {
            if (item.tags.includes(prev)) {
              return prev
            }
          }
        })
        return Tags
      })
    ));
  }

  // Sorting Filter
  public sortProducts(products: Product[], payload: string): any {

    if(payload === 'ascending') {
      return products.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'a-z') {
      return products.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'z-a') {
      return products.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'low') {
      return products.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'high') {
      return products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        }
        return 0;
      })
    } 
  }
*/
  /*
    ---------------------------------------------
    ------------- Product Pagination  -----------
    ---------------------------------------------
  */
  public getPager(totalItems: number, currentPage: number = 1, pageSize: number = 16) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // Paginate Range
    let paginateRange = 3;

    // ensure current page isn't out of range
    if (currentPage < 1) { 
      currentPage = 1; 
    } else if (currentPage > totalPages) { 
      currentPage = totalPages; 
    }
    
    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if(currentPage < paginateRange - 1){
      startPage = 1;
      endPage = startPage + paginateRange - 1;
    } else {
      startPage = currentPage - 1;
      endPage =  currentPage + 1;
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  public updateProduct(data: { product: Product; files: FileList }) {
    const url = `products/${data.product.id}`;

    if (!data.files.length) {
      return this.updateProductWithoutNewImage(data.product, url);
    }

    const dbOperation = this.uploadService
      .startUpload(data)
      .then((task) => {
        task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          data.product.images=[downloadURL];
          console.log('File available at', downloadURL);
          return this.angularFireDatabase
          .list('products')
          .update(data.product.id.toString(), data.product);
      });
    },
    (error) => error)
    .then((response) => {
      this.log(`edit Product ${data.product.title}`);
      return data.product;
    })
    .catch((error) => {
      this.messageService.error(
        `edit Failed, Product ${data.product.title}`
      );
      this.handleError(error);
      return error;
    });
  return fromPromise(dbOperation);
  }

  private updateProductWithoutNewImage(product: Product, url: string) {
    const dbOperation = this.angularFireDatabase
      .object<Product>(url)
      .update(product)
      .then((response) => {
        this.log(`Updated Product ${product.title}`);
        return product;
      })
      .catch((error) => {
        this.handleError(error);
        return error;
      });
    return fromPromise(dbOperation);
  }

  public updateProductAR(data: { product: Product; files: FileList }) {
    const url = `products/${data.product.id}`;

    if (!data.files.length) {
      return this.updateProductARWithoutNewImage(data.product, url);
    }

    const dbOperation = this.uploadService
      .startUpload(data)
      .then((task) => {
        task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          data.product.images.push(downloadURL) ;
          console.log('File available at', downloadURL);
          return this.angularFireDatabase
          .list('products')
          .update(data.product.id.toString(), data.product);
      });
    },
    (error) => error)
    .then((response) => {
      this.log(`edit Product ${data.product.title}`);
      return data.product;
    })
    .catch((error) => {
      this.messageService.error(
        `edit Failed, Product ${data.product.title}`
      );
      this.handleError(error);
      return error;
    });
  return fromPromise(dbOperation);
  }

  private updateProductARWithoutNewImage(product: Product, url: string) {
    const dbOperation = this.angularFireDatabase
      .object<Product>(url)
      .update(product)
      .then((response) => {
        this.log(`Updated Product ${product.title}`);
        return product;
      })
      .catch((error) => {
        this.handleError(error);
        return error;
      });
    return fromPromise(dbOperation);
  }

  isNew(id: any,isNew : boolean) {
    const dbOperation = this.angularFireDatabase
    .object('products/'+id+'/new')
    .set(isNew)
    .then((response) => {
      return false;
    })
    .catch((error) => {
      this.handleError(error);
      return error;
    });
  return fromPromise(dbOperation);
  }

  isFeatures(id: any,isFeatures : boolean) {
    const dbOperation = this.angularFireDatabase
    .object('products/'+id+'/featured')
    .set(isFeatures)
    .then((response) => {
      return false;
    })
    .catch((error) => {
      this.handleError(error);
      return error;
    });
  return fromPromise(dbOperation);
  }

  isNewAR(id: any,isNew : boolean) {
    const dbOperation = this.angularFireDatabase
    .object('products/'+id+'/new')
    .set(isNew)
    .then((response) => {
      return false;
    })
    .catch((error) => {
      this.handleError(error);
      return error;
    });
  return fromPromise(dbOperation);
  }

  isFeaturesAR(id: any,isFeatures : boolean) {
    const dbOperation = this.angularFireDatabase
    .object('products/'+id+'/featured')
    .set(isFeatures)
    .then((response) => {
      return false;
    })
    .catch((error) => {
      this.handleError(error);
      return error;
    });
  return fromPromise(dbOperation);
  }
 
  isShopView(id: any,view : string) {

    console.log(id+ "  "+view)
    const dbOperation = this.angularFireDatabase
    .object('Shops/'+id+'/view')
    .set(view)
    .then((response) => {
      return false;
    })
    .catch((error) => {
      this.handleError(error);
      return error;
    });
  return fromPromise(dbOperation);
  }
 
 

  public addProduct(data: { product: Product; files: FileList }) {
 
    console.log(data.files);
    let temp = [];

    const dbOperation =  Promise.all(
      Array.from(data.files).map(item => this.multiUploadService.putStorageItem(item))
    ).then(images => {
      console.log(`All success` )
      
      console.log(images);
      data.product.images=images;
      return this.angularFireDatabase
      .list('products')
      .set(data.product.id.toString(), data.product);
    }).then((response) => {
        this.log(`Added Product ${data.product.title}`);
        return data.product;
      }
    )
    .catch((error) => {
      console.log(`Some failed: `, error.message)
    });

    return fromPromise(dbOperation);
    /*
    for (var i = 0; i < data.files.length; i++) {
      var file = data.files[i];
      let filePath = `${data.product.name}/${file.name}`;
      let fileRef = this.storage.ref(filePath);
      
      this.storage
        .upload(filePath, file)
        .snapshotChanges()
        .pipe(
          last(),
          switchMap(() => fileRef.getDownloadURL())
        )
        .subscribe(
          (url) => temp.push(url),
          (error) => {},
          () => {
            data.product.images = temp;
           // this.store.push(item);
           console.log( data.product)
          }
        );
        
     }
    //  return fromPromise(dbOperation);

    const dbOperation = this.uploadService
      .startUpload(data)
      .then((task) => {
        task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          data.product.image=downloadURL;
          console.log('File available at', downloadURL);
          return this.angularFireDatabase
          .list('Product')
          .set(data.product.id.toString(), data.product);
        });
       
        
      }, (error) => error)
      .then((response) => {
        this.log(`Added Product ${data.product.name}`);
        return data.product;
      })
      .catch((error) => {
        this.messageService.error(
          `Add Failed, Product ${data.product.name}`
        );
        this.handleError(error);
        return error;
      });
     
    return fromPromise(dbOperation);
    */
  }

  public addProductAR(data: { product: Product; files: FileList }) {


    const dbOperation = this.uploadService
      .startUpload(data)
      .then((task) => {
        task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          data.product.images.push(downloadURL);
          console.log('File available at', downloadURL);
          return this.angularFireDatabase
          .list('products')
          .set(data.product.id.toString(), data.product);
        });
       
        
      }, (error) => error)
      .then((response) => {
        this.log(`Added Product ${data.product.title}`);
        return data.product;
      })
      .catch((error) => {
        this.messageService.error(
          `Add Failed, Product ${data.product.title}`
        );
        this.handleError(error);
        return error;
      });
    return fromPromise(dbOperation);
  }


}
