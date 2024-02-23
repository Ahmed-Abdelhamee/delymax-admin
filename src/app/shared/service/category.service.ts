import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable, of } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import { tap } from "rxjs/operators";
import { Category } from "../interfaces/category.model";
import { DataService } from "./data.service";
import { FileUploadService } from "./file-upload.service";
import { MessageService } from "./message.service";


@Injectable({
    providedIn: 'root'
  })
  export class CategoryService {
   

  

    constructor(private dataService : DataService,private database: AngularFireDatabase,
      private storage: AngularFireStorage,
      private messageService: MessageService,
      private uploadService: FileUploadService) { }
  
    public getCategoryAr(id: string): Observable<Category | null> {
      return this.database
        .object<Category>('categories_Ar/'+id)
        .valueChanges()
        .pipe(
          tap((result) => {
            if (result) {
              console.log("true")
              return of(result);
            
            } else {
              this.messageService.addError(`Found no category with id=${id}`);
              return of(null);
            }
          }),
  
        );
    }

    public getCategory(id: string): Observable<Category | null> {
      return this.database
        .object<Category>('categories/'+id)
        .valueChanges()
        .pipe(
          tap((result) => {
            if (result) {
              console.log("true")
              return of(result);
            
            } else {
              this.messageService.addError(`Found no category with id=${id}`);
              return of(null);
            }
          }),
  
        );
    }


    addCategory(category: Category, files: FileList) {
      this.dataService.addCategory({ category, files }).subscribe(
        (savedProduct: Category) => {
         
        },
        (error) => {
        
          return of(error);
        }
      );
    }

    addCategoryAR(category: Category, files: FileList) {
      this.dataService.addCategoryAR({ category, files }).subscribe(
        (savedProduct: Category) => {
         
        },
        (error) => {
        
          return of(error);
        }
      );
    }
    removeCategory(categoryId: string) {
      return this.dataService.deleteCategory(categoryId);
    }
    removeCategoryAR(categoryId: string) {
      return this.dataService.deleteCategoryAR(categoryId);
    }
    getCategories() {
      return this.dataService.getCategories2()
    }

    getCategoriesAR() {
      return this.dataService.getCategories2AR()
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
            return this.database
            .list('categories')
            .update(data.category.id.toString(), data.category);
        });
      },
      (error) => error)
      .then((response) => {
        this.messageService.add(`edit Category ${data.category.name}`);
        return data.category;
      })
      .catch((error) => {
        this.messageService.addError(
          `edit Failed, Category ${data.category.name}`
        );
    
        return error;
      });
    return fromPromise(dbOperation);
    }
  
    private updateCategoryWithoutNewImage(categoery: Category, url: string) {
      const dbOperation = this.database
        .object<Category>(url)
        .update(categoery)
        .then((response) => {
          this.messageService.add(`Updated Category ${categoery.name}`);
          return categoery;
        })
        .catch((error) => {

          return error;
        });
      return fromPromise(dbOperation);
    }

    public updateCategoryAR(data: { category: Category; files: FileList }) {
      const url = `categories_Ar/${data.category.id}`;
  
      if (!data.files.length) {
        return this.updateCategoryARWithoutNewImage(data.category, url);
      }
  
      const dbOperation = this.uploadService
        .startUpload(data)
        .then((task) => {
          task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
            data.category.image=downloadURL;
            console.log('File available at', downloadURL);
            return this.database
            .list('categories_Ar')
            .update(data.category.id.toString(), data.category);
        });
      },
      (error) => error)
      .then((response) => {
        this.messageService.add(`edit Category ${data.category.name}`);
        return data.category;
      })
      .catch((error) => {
        this.messageService.addError(
          `edit Failed, Category ${data.category.name}`
        );
    
        return error;
      });
    return fromPromise(dbOperation);
    }
  
    private updateCategoryARWithoutNewImage(categoery: Category, url: string) {
      const dbOperation = this.database
        .object<Category>(url)
        .update(categoery)
        .then((response) => {
          this.messageService.add(`Updated Category ${categoery.name}`);
          return categoery;
        })
        .catch((error) => {

          return error;
        });
      return fromPromise(dbOperation);
    }
  }