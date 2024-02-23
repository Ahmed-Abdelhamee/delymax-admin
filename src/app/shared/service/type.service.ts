import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { tap } from 'rxjs/operators';
import { Side } from '../interfaces/side';
import { Type } from '../interfaces/type.model';
import { DataService } from './data.service';
import { FileUploadService } from './file-upload.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
   

   

    constructor(private dataService : DataService,
      private database: AngularFireDatabase,
              private storage: AngularFireStorage,
              private messageService: MessageService,
              private uploadService: FileUploadService) { }

              public updateType(type: Type) {
                const dbOperation = this.database
                  .object<Type>('brands/'+type.id)
                  .update(type)
                  .then((response) => {
                    
                    this.messageService.add(`Updated Type ${type.name}`);
                    return type;
                  })
                  .catch((error) => {
                    return error;
                  });
                return fromPromise(dbOperation);
              }
          
              public updateTypeAR(type: Type) {
                const dbOperation = this.database
                  .object<Type>('brands_Ar/'+type.id)
                  .update(type)
                  .then((response) => {
                    
                    this.messageService.add(`Updated Type ${type.name}`);
                    return type;
                  })
                  .catch((error) => {
                    return error;
                  });
                return fromPromise(dbOperation);
              }
          
  
    getTypeByParentId(id){
      return  this.dataService.gettypes(id)
    }
    public addType(type: Type) {
      const dbOperation =  this.database
            .list('brands')
            .set(type.id.toString(), type)
          
         
        .then((response) => {
          this.messageService.add(`Added Type ${type.name}`);
          return type;
        })
        .catch((error) => {
          this.messageService.addError(
            `Add Failed, Type ${type.name}`
          );
          return error;
        });
      return fromPromise(dbOperation);
    }

    public addTypeAR(type: Type) {
      const dbOperation =  this.database
            .list('brands_Ar')
            .set(type.id.toString(), type)
          
         
        .then((response) => {
          this.messageService.add(`Added Type ${type.name}`);
          return type;
        })
        .catch((error) => {
          this.messageService.addError(
            `Add Failed, Type ${type.name}`
          );
          return error;
        });
      return fromPromise(dbOperation);
    }


    public getType(id: string): Observable<Type | null> {
      return this.database
        .object<Type>('brands/'+id)
        .valueChanges()
        .pipe(
          tap((result) => {
            if (result) {
              console.log("true")
              return of(result);
            
            } else {
              this.messageService.addError(`Found no brand with id=${id}`);
              return of(null);
            }
          }),
  
        );
    }

    public getTypeAR(id: string): Observable<Type | null> {
      return this.database
        .object<Type>('brands_Ar/'+id)
        .valueChanges()
        .pipe(
          tap((result) => {
            if (result) {
              console.log("true")
              return of(result);
            
            } else {
              this.messageService.addError(`Found no brand with id=${id}`);
              return of(null);
            }
          }),
  
        );
    }


    removeType(typeId: string){
      return this.dataService.removeType(typeId)
    }

    removeTypeAR(typeId: string){
      return this.dataService.removeTypeAR(typeId)
    }
    getTypes(id) {
      return this.dataService.gettypes(id);
    }

    getTypesAR() {
      return this.dataService.gettypesAR();
    }


    //Sides

    public addSide(side: Side) {
      const dbOperation =  this.database
            .list('sides')
            .set(side.id.toString(), side)
          
         
        .then((response) => {
          this.messageService.add(`Added side ${side.name}`);
          return side;
        })
        .catch((error) => {
          this.messageService.addError(
            `Add Failed, Type ${side.name}`
          );
          return error;
        });
      return fromPromise(dbOperation);
    }

    public addSideAR(side: Side) {
      const dbOperation =  this.database
            .list('sides_Ar')
            .set(side.id.toString(), side)
          
         
        .then((response) => {
          this.messageService.add(`Added side ${side.name}`);
          return side;
        })
        .catch((error) => {
          this.messageService.addError(
            `Add Failed, Type ${side.name}`
          );
          return error;
        });
      return fromPromise(dbOperation);
    }


    public getSide(id: string): Observable<Side | null> {
      return this.database
        .object<Side>('sides/'+id)
        .valueChanges()
        .pipe(
          tap((result) => {
            if (result) {
              console.log("true")
              return of(result);
            
            } else {
              this.messageService.addError(`Found no side with id=${id}`);
              return of(null);
            }
          }),
  
        );
    }

    public getSideAR(id: string): Observable<Side | null> {
      return this.database
        .object<Side>('side_Ar/'+id)
        .valueChanges()
        .pipe(
          tap((result) => {
            if (result) {
              console.log("true")
              return of(result);
            
            } else {
              this.messageService.addError(`Found no side with id=${id}`);
              return of(null);
            }
          }),
  
        );
    }


    removeSide(sideId: string){
      return this.dataService.removeSide(sideId)
    }

    removeSideAR(sideId: string){
      return this.dataService.removeSideAR(sideId)
    }
    getSides() {
      return this.dataService.getSides();
    }

    getSidesAR() {
      return this.dataService.getSidesAR();
    }

    public updateSide(side: Side) {
      const dbOperation = this.database
        .object<Side>('sides/'+side.id)
        .update(side)
        .then((response) => {
          
          this.messageService.add(`Updated Side ${side.name}`);
          return side;
        })
        .catch((error) => {
          return error;
        });
      return fromPromise(dbOperation);
    }

    public updateSideAR(side: Side) {
      const dbOperation = this.database
        .object<Side>('sides_Ar/'+side.id)
        .update(side)
        .then((response) => {
          
          this.messageService.add(`Updated Type ${side.name}`);
          return side;
        })
        .catch((error) => {
          return error;
        });
      return fromPromise(dbOperation);
    }

  }