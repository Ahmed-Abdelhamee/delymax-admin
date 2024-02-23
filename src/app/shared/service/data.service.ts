import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Category } from '../interfaces/category.model';
import { Type } from '../interfaces/type.model';
import { FileUploadService } from './file-upload.service';
import { MessageService } from './message.service';
import { fromPromise } from 'rxjs/internal-compatibility';
import { catchError, map, tap } from 'rxjs/operators';
import { Blog } from '../interfaces/blog.model';
import { Slider } from '../interfaces/slider';
import { AppSetting } from '../interfaces/app-setting.model';
import { Side } from '../interfaces/side';
import { Country } from '../interfaces/country';
import { State } from '../interfaces/state';
import { Town } from '../interfaces/town';
import { Company } from '../interfaces/company';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
 
  private products: object[] = []
  private categories: object[] = []
  private blog: object[] = []
  private types: object[] = []
  private orders: object[] = []
  private productsRef: AngularFireList<any>
  private ordersRef: AngularFireList<any>
  
  public selectedProduct: object = {}
  public viewDetailProduct: object = {}

  public filter_C = new BehaviorSubject<string>(null)
  public filterByCategory= this.filter_C.asObservable()

  public filter_T = new BehaviorSubject<string[]>(null)
  public filterByType= this.filter_T.asObservable()

  public filter_C_A = new BehaviorSubject<string>(null)
  public filterByCategoryAll = this.filter_C_A.asObservable()

  public filter_T_A = new BehaviorSubject<string[]>(null)
  public filterByTypeAll = this.filter_T_A.asObservable()

  
  i: number = 0
  constructor(private database: AngularFireDatabase,
              private storage: AngularFireStorage,
              private messageService: MessageService,
              private uploadService: FileUploadService
  ) { 
    this.productsRef = this.database.list('products')
    this.fetchOrders()    

    
  }

  public async fetchProducts(): Promise<any> {
    if (this.products.length > 0) {
      return this.products
    } else {
      this.database.list('/products/').snapshotChanges()
      .subscribe((data: any): void => {
        data.forEach(element => {
          const product = element.payload.val()
          product.key = element.key
          this.products.push(product)
        });
      })
    return this.products
    }
  }

  public async fetchCategories(): Promise<any> {
    if (this.categories.length > 0) {
      return this.categories
    } else {
      await this.database.list('/categories/').snapshotChanges()
      .subscribe((data: any): void => {
        data.forEach(element => {
          const genre = element.payload.val()
          genre.key = element.key
          this.categories.push(genre)
        });
      })
      
    return this.categories
    }
    

    
  }

  public addCategory(data: { category: Category; files: FileList }) {
    const dbOperation = this.uploadService
      .startUpload(data)
      .then((task) => {
        task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          data.category.image = downloadURL;
          console.log('File available at', downloadURL);
          return this.database
          .list('categories')
          .set(data.category.id.toString(), data.category);
          
        });
       
        
      }, (error) => error)
      .then((response) => {
        this.log(`Added category ${data.category.name}`);
        return data.category;
      })
      .catch((error) => {
        this.messageService.addError(
          `Add Failed, category ${data.category.name}`
        );
        this.handleError(error);
        return error;
      });
    return fromPromise(dbOperation);
  }

  public addCategoryAR(data: { category: Category; files: FileList }) {
    const dbOperation = this.uploadService
      .startUpload(data)
      .then((task) => {
        task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          data.category.image = downloadURL;
          console.log('File available at', downloadURL);
          return this.database
          .list('categories_Ar')
          .set(data.category.id.toString(), data.category);
         
        });
       
        
      }, (error) => error)
      .then((response) => {
        this.log(`Added category ${data.category.name}`);
        return data.category;
      })
      .catch((error) => {
        this.messageService.addError(
          `Add Failed, category ${data.category.name}`
        );
        this.handleError(error);
        return error;
      });
    return fromPromise(dbOperation);
  }

  public getCategories2(): Observable<Category[]> {
    return this.database
      .list<Category>('Category', (ref) =>
        ref
      )
      .valueChanges()
      .pipe(map((arr) => arr), catchError(this.handleError<Category[]>(`getProductsByRating`)));
  }

  public getCategories2AR(): Observable<Category[]> {
    return this.database
      .list<Category>('categories_Ar', (ref) =>
        ref
      )
      .valueChanges()
      .pipe(map((arr) => arr), catchError(this.handleError<Category[]>(`getProductsByRating`)));
  }

  public async getCategories(): Promise<any> {
    if (this.categories.length > 0) {
      return this.categories
    } else {
      await this.database.list('/categories/').snapshotChanges()
      .subscribe((data: any): void => {
        data.forEach(element => {
          const genre = element.payload.val()
          this.categories.push(genre)
        });
      })
      
    return this.categories
    }
    

    
  }
  public gettypes(id): Observable<Type[]> {
    return this.database
      .list<Type>('brands', (ref) =>
        ref.orderByChild('shopId').equalTo(id)
      )
      .valueChanges()
      .pipe(map((arr) => arr), catchError(this.handleError<Type[]>(`getProductsByRating`)));
  }

  public gettypesAR(): Observable<Type[]> {
    return this.database
      .list<Type>('brands_Ar', (ref) =>
        ref
      )
      .valueChanges()
      .pipe(map((arr) => arr), catchError(this.handleError<Type[]>(`getProductsByRating`)));
  }

  public getSides(): Observable<Side[]> {
    return this.database
      .list<Side>('sides', (ref) =>
        ref
      )
      .valueChanges()
      .pipe(map((arr) => arr), catchError(this.handleError<Side[]>(`getProductsByRating`)));
  }

  
  public getSidesAR(): Observable<Side[]> {
    return this.database
      .list<Side>('sides_Ar', (ref) =>
        ref
      )
      .valueChanges()
      .pipe(map((arr) => arr), catchError(this.handleError<Side[]>(`getProductsByRating`)));
  }

  public async fetchTypes(): Promise<any> {
    if (this.types.length > 0) {
     this.types = []
     this.database.list('/brands/').snapshotChanges()
      .subscribe((data:any): void => {
        data.forEach(element => {
           this.i =this.i + 1
          const type = element.payload.val()
          type.id = this.i
          this.types.push(type)
        });
      })
      console.log(this.types)
    return this.types
    }else{
      this.database.list('/brands/').snapshotChanges()
      .subscribe((data:any): void => {
        data.forEach(element => {
           this.i =this.i + 1
          const type = element.payload.val()
          type.id = this.i
          this.types.push(type)
        });
      })
      console.log(this.types)
    return this.types
    }
    
    
  }

  
  public getPost(
    limitToLast: number
  ): Observable<Blog[]> {
    return this.database
      .list<Blog>('posts', (ref) =>
        ref.limitToLast(limitToLast)
      )
      .valueChanges()
      .pipe(catchError(this.handleError<Blog[]>(`getPostsQuery`)));
  }
  public async fetchOrders() {
    if (this.orders.length > 0) {
      return this.orders
    } else {
      await this.database.list('/checkout/').snapshotChanges()
      .subscribe((data: any) => {
        data.forEach(element => {
          const order = element.payload.val()
          order.key = element.key
          this.orders.push(order)
        });
      })
      return this.orders

    }
  }

  public async updateProduct(key: string, product: object) {
    await this.productsRef.update(key, product)
  }

  public async deleteProduct(key: string) {
    await this.productsRef.remove(key)
  }

  public async deleteCategory(key: string) {
    return this.database.database.ref('/categories/'+key).remove();
  }

  public async deleteCategoryAR(key: string) {
    return this.database.database.ref('/categories_Ar/'+key).remove();
  }

  public addProduct(product) {
    this.storage.upload(`${product.title}_Cover`, product.image).then((data: any) => {
      product.coverUrl = data.metadata.downloadURLs[0]
      console.log(product)
    }).then(() => {
      this.database.list('/products/').push(product)
    })
  }

  public addType(type) {
   return this.database.list('/brans/').push(type)
  }

  NewTypeUpdateKey(key:string){
    return this.database.database.ref('/brands/'+key+'/id').set(key);
  }

  removeType(key:string): Promise<void> {
    return this.database.database.ref('/brands/'+key).remove();
  }

  removeTypeAR(key:string): Promise<void> {
    return this.database.database.ref('/brands_Ar/'+key).remove();
  }

  removeSide(key:string): Promise<void> {
    return this.database.database.ref('/sides/'+key).remove();
  }

  removeSideAR(key:string): Promise<void> {
    return this.database.database.ref('/sides_Ar/'+key).remove();
  }

  public addGenre(genre) {
    this.database.list('/genres/').push(genre)
  }
  
  public checkout(product) {
    this.database.list('/checkout/').push(product)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('ProductService: ' + message);
  }



  public get getSlidersAR(): Observable<Slider[]> {
    return this.slidersAR;
  }

  
  public get slidersAR(): Observable<Slider[]> {
    return this.database
      .list<Slider>('slider_Ar', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
  }

  public get getSliders(): Observable<Slider[]> {
    return this.sliders;
  }

  
  public get sliders(): Observable<Slider[]> {
    return this.database
      .list<Slider>('slider', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
  }

  public getSliderAR(id:string): Observable<Slider | null> {
    console.log("Slider")
    console.log('slider_Ar/'+id)
    return this.database
      .object<Slider>('slider_Ar/'+id)
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
          
            return of(result);
          } else {
            this.messageService.addError(`Found no slider`);
            return of(null);
          }
        }),
    
      );
  
  }

  public getSlider(id:string): Observable<Slider | null> {
    console.log("Slider")
    console.log('slider/'+id)
    return this.database
      .object<Slider>('slider/'+id)
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
          
            return of(result);
          } else {
            this.messageService.addError(`Found no slider`);
            return of(null);
          }
        }),
    
      );
  
  }

  public addSliderAR(data: { slider: Slider; files: FileList }) {

    const dbOperation = this.uploadService
      .startUpload(data)
      .then((task) => {
        task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          data.slider.image =downloadURL;
          console.log('File available at', downloadURL);
          return this.database
          .list('slider_Ar')
          .set(data.slider.id.toString(), data.slider);
        });
       
        
      }, (error) => error)
      .then((response) => {
        this.log(`Added Slider ${data.slider.subTitle}`);
        return data.slider;
      })
      .catch((error) => {
        this.messageService.addError(
          `Add Failed, Slider ${data.slider.subTitle}`
        );
        this.handleError(error);
        return error;
      });
    return fromPromise(dbOperation);
  }

  public addSlider(data: { slider: Slider; files: FileList }) {

    const dbOperation = this.uploadService
      .startUpload(data)
      .then((task) => {
        task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          data.slider.image =downloadURL;
          console.log('File available at', downloadURL);
          return this.database
          .list('slider')
          .set(data.slider.id.toString(), data.slider);
        });
       
        
      }, (error) => error)
      .then((response) => {
        this.log(`Added Slider ${data.slider.subTitle}`);
        return data.slider;
      })
      .catch((error) => {
        this.messageService.addError(
          `Add Failed, Slider ${data.slider.subTitle}`
        );
        this.handleError(error);
        return error;
      });
    return fromPromise(dbOperation);
  }

  public updateSlider(data: { slider: Slider; files: FileList }) {
    const url = `slider`;

    if (!data.files.length) {
      console.log("no image")
      return this.updateSlidereWithoutNewImage(data.slider, url);
    }

    const dbOperation = this.uploadService
      .startUpload(data)
      .then((task) => {
        task.ref.getDownloadURL().then((ref) => {
          data.slider.image = ref
          console.log(ref)
          return data;
         }).then((dataWithImagePath) => {
          return this.database
            .object<Slider>(url)
            .update(data.slider);
        })
        .then((response) => {
          this.log(`Updated Slider ${data.slider.subTitle}`);
          return data.slider;
        })
        .catch((error) => {
          this.handleError(error);
          return error;
        });
        return fromPromise(dbOperation);
      });
      
    return fromPromise(dbOperation);
  }

  private updateSlidereWithoutNewImage(slider: Slider, url: string) {
    const dbOperation = this.database
      .object<Slider>(url+'/'+slider.id)
      .update(slider)
      .then((response) => {
        this.log(`Updated Slider ${slider.title}`);
        return slider;
      })
      .catch((error) => {
        this.handleError(error);
        return error;
      });
    return fromPromise(dbOperation);
  }

  public updateSliderAR(data: { slider: Slider; files: FileList }) {
    const url = `slider_Ar`;

    if (!data.files.length) {
      console.log("no image")
      return this.updateSlidereARWithoutNewImage(data.slider, url);
    }

    const dbOperation = this.uploadService
      .startUpload(data)
      .then((task) => {
        task.ref.getDownloadURL().then((ref) => {
          data.slider.image = ref
          console.log(ref)
          return data;
         }).then((dataWithImagePath) => {
          return this.database
            .object<Slider>(url)
            .update(data.slider);
        })
        .then((response) => {
          this.log(`Updated Slider ${data.slider.subTitle}`);
          return data.slider;
        })
        .catch((error) => {
          this.handleError(error);
          return error;
        });
        return fromPromise(dbOperation);
      });
      
    return fromPromise(dbOperation);
  }

  private updateSlidereARWithoutNewImage(slider: Slider, url: string) {
    const dbOperation = this.database
      .object<Slider>(url+'/'+slider.id)
      .update(slider)
      .then((response) => {
        this.log(`Updated Slider ${slider.title}`);
        return slider;
      })
      .catch((error) => {
        this.handleError(error);
        return error;
      });
    return fromPromise(dbOperation);
  }


  public async deleteSlider(key: string) {
    return this.database.database.ref('/slider/'+key).remove();
  }

  public async deleteSliderAR(key: string) {
    return this.database.database.ref('/slider_Ar/'+key).remove();
  }


  public getAppSetting(): Observable<AppSetting | null> {
    console.log("appcalled")
    return this.database
      .object<AppSetting>('AppSetting')
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
          
     
            return of(result);
          } else {
            this.messageService.addError(`Found no AppSetting`);
            return of(null);
          }
        }),
    
      );
  
  }

  saveSetting(value: any) {
    this.database
      .object<AppSetting>('/AppSetting')
      .update(value)
      .then((response) => {
        this.messageService.add("Setting Updated ")
      })
      .catch((error) => {
        this.handleError(error);
        return error;
      });
  }


  //Country service

  public get getCountries(): Observable<Country[]> {
    return this.countries;
  }

  
  public get countries(): Observable<Country[]> {
    return this.database
      .list<Country>('country', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
  }
  public getCompnies(): Observable<Company[]> {
    return this.database
      .list<Company>('companies', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
  }



  public getStates(id): Observable<State[]> {
    return this.database
      .list<State>('state', (ref) => ref.orderByChild("town").equalTo(id))
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
  }

  public getAllStates(): Observable<State[]> {
    return this.database
      .list<State>('state', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
  }

 
  public getTowns(): Observable<Town[]> {
    return this.database
      .list<Town>('town', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
  }



  public getCountry(id:string): Observable<Country | null> {
    console.log("country")
    console.log('country/'+id)
    return this.database
      .object<Country>('country/'+id)
      .valueChanges()
      .pipe(
        tap((result) => {
          if (result) {
          
            return of(result);
          } else {
            this.messageService.addError(`Found no country`);
            return of(null);
          }
        }),
    
      );
  
  }



}