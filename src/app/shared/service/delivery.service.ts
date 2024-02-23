import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable, of } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import { map, tap } from "rxjs/operators";
import { AccountDelivery } from "../interfaces/account-delivery";
import { Category } from "../interfaces/category.model";
import { Day } from "../interfaces/day";
import { DeliveryBoy } from "../interfaces/delivery-boy";
import { Hour } from "../interfaces/hour";
import { Side } from "../interfaces/product.model";
import { State } from "../interfaces/state";
import { Town } from "../interfaces/town";
import { DataService } from "./data.service";
import { FileUploadService } from "./file-upload.service";
import { MessageService } from "./message.service";

@Injectable({
    providedIn: 'root'
  })
  export class DeliveryService {
  
   
    constructor(private dataService : DataService,
        private database: AngularFireDatabase,
                private messageService: MessageService) { }
  
                public updateTown(town: Town) {
                  const dbOperation = this.database
                    .object<Town>('town/'+town.id)
                    .update(town)
                    .then((response) => {
                      
                      this.messageService.add(`Updated town ${town.name}`);
                      return town;
                    })
                    .catch((error) => {
                      return error;
                    });
                  return fromPromise(dbOperation);
                }
            
               
    
     
      public addTown(town: Town) {
        const dbOperation =  this.database
              .list('town')
              .set(town.id.toString(), town)
            
           
          .then((response) => {
            this.messageService.add(`Added town ${town.name}`);
            return town;
          })
          .catch((error) => {
            this.messageService.addError(
              `Add Failed, town ${town.name}`
            );
            return error;
          });
        return fromPromise(dbOperation);
      }
  
     
  
      public getTown(id: string): Observable<Town | null> {
        return this.database
          .object<Town>('town/'+id)
          .valueChanges()
          .pipe(
            tap((result) => {
              if (result) {
                console.log("true")
                return of(result);
              
              } else {
                this.messageService.addError(`Found no town with id=${id}`);
                return of(null);
              }
            }),
    
          );
      }
  
      public getAllDeliveryBoys():Observable<DeliveryBoy[]>{
        return this.database
        .list<DeliveryBoy>('DeliveryBoy', (ref) => ref)
        .valueChanges()
        .pipe(map((arr) => 
        arr
        
        ));
      }
      public getDeliveryBoysByZone(state:string):Observable<DeliveryBoy[]>{
        return this.database
        .list<DeliveryBoy>('DeliveryBoy', (ref) => ref.orderByChild("state").equalTo(state))
        .valueChanges()
        .pipe(map((arr) => 
        arr
        
        ));
      }

      public getOnlineDeliveryBoysByZone(state:string):Observable<DeliveryBoy[]>{
        return this.database
        .list<DeliveryBoy>('DeliveryBoy', (ref) => ref.orderByChild("state").equalTo(state))
        .valueChanges()
        .pipe(map((arr) => 
        arr.filter(item=>item.online)
        
        ));
      }
      public getDB(id: string): Observable< DeliveryBoy | null> {
        return this.database
          .object<DeliveryBoy>('DeliveryBoy/'+id)
          .valueChanges()
          .pipe(
            tap((result) => {
              if (result) {
                console.log("true")
                return of(result);
              
              } else {
                this.messageService.addError(`Found no user with id=${id}`);
                return of(null);
              }
            }),
            
          );
      }

      public getAllDeliveryBoyAccounting(id:string):Observable<AccountDelivery[]>{
        return this.database
        .list<AccountDelivery>('AccountingDelivery/'+id, (ref) => ref)
        .valueChanges()
        .pipe(map((arr) => 
        arr.reverse()
        
        ));
      }
      public getAllDeliveryBoysByZone(zone:string):Observable<DeliveryBoy[]>{
        return this.database
        .list<DeliveryBoy>('DeliveryBoy', (ref) => ref.orderByChild('state').equalTo(zone))
        .valueChanges()
        .pipe(map((arr) => arr.filter(item=>item.online == true)
        ));
      }
      public getAllZoneDeliveryBoys(zone:string):Observable<DeliveryBoy[]>{
        return this.database
        .list<DeliveryBoy>('DeliveryBoy', (ref) => ref.orderByChild('state').equalTo(zone))
        .valueChanges()
        .pipe(map((arr) => arr
        ));
      }
    
      public updateDeliveryBlock(id: string,status:boolean) {
        const dbOperation = this.database
          .object('DeliveryBoy/'+id+'/block')
          .set(status)
          .then((response) => {
            
            return status;
          })
          .catch((error) => {
            
            return error;
          });
        return fromPromise(dbOperation);
      }

      public updateDeliveryStatus(id: string,status:string) {
        const dbOperation = this.database
          .object('DeliveryBoy/'+id+'/status')
          .set(status)
          .then((response) => {
            
            return status;
          })
          .catch((error) => {
            
            return error;
          });
        return fromPromise(dbOperation);
      }
      public updateDeliveryCollect(dId:string,id: string,close:boolean) {
        const dbOperation = this.database
          .object('AccountingDelivery/'+dId+'/'+id+'/closed')
          .set(close)
          .then((response) => {
            
            return status;
          })
          .catch((error) => {
            
            return error;
          });
        return fromPromise(dbOperation);
      }
    
  
      removeTown(key:string): Promise<void> {
        return this.database.database.ref('/town/'+key).remove();
      }

    
      public getTowns(): Observable<Town[]> {
        return this.database
          .list<Town>('town', (ref) =>
            ref
          )
          .valueChanges()
          .pipe(map((arr) => arr));
      }

      public getDaysRef(): Observable<Day[]> {
        return this.database
          .list<Day>('DaysRef', (ref) =>
            ref
          )
          .valueChanges()
          .pipe(map((arr) => arr));
      }

      public getStateDays(state:any): Observable<Day[]> {
        console.log('state/'+state+'/days')
        return this.database
          .list<Day>('state/'+state+'/days', (ref) =>
            ref
          )
          .valueChanges()
          .pipe(map((arr) => arr));
      }
    
  
      //Sides
  
      public addState(state: State) {
        const dbOperation =  this.database
              .list('state')
              .set(state.id.toString(), state)
            
           
          .then((response) => {
            this.messageService.add(`Added state ${state.name}`);
            return state;
          })
          .catch((error) => {
            this.messageService.addError(
              `Add Failed, state ${state.name}`
            );
            return error;
          });
        return fromPromise(dbOperation);
      }
  
    
  
  
      public getState(id: string): Observable<State | null> {
        return this.database
          .object<State>('state/'+id)
          .valueChanges()
          .pipe(
            tap((result) => {
              if (result) {
                console.log("true")
                return of(result);
              
              } else {
         
                return of(null);
              }
            }),
    
          );
      }

      public getStateHour(id: string,day:string,hour:string): Observable<Hour | null> {
        return this.database
          .object<Hour>('state/'+id+'/days/'+day+'/hours/'+hour)
          .valueChanges()
          .pipe(
            tap((result) => {
              if (result) {
                console.log("true")
                return of(result);
              
              } else {
               
                return of(null);
              }
            }),
    
          );
      }
  
     
  
      public updateState(state: State) {
        const dbOperation = this.database
          .object<State>('state/'+state.id)
          .update(state)
          .then((response) => {
            
            this.messageService.add(`Updated Side ${state.name}`);
            return state;
          })
          .catch((error) => {
            return error;
          });
        return fromPromise(dbOperation);
      }
  
      removeState(key:string): Promise<void> {
        return this.database.database.ref('/state/'+key).remove();
      }

      removeDB(key:string): Promise<void> {
        return this.database.database.ref('/DeliveryBoy/'+key).remove();
      }


    
      public getStates(): Observable<State[]> {
        return this.database
          .list<State>('state', (ref) =>
            ref
          )
          .valueChanges()
          .pipe(map((arr) => arr));
      }
      isHourEnable(id: any,day:any,hour:any, enable: boolean) {
          this.database
          .object('state/'+id+'/days/'+day+'/hours/'+hour+'/enable')
          .set(enable)
          .then((response) => {
            return false;
          })
          .catch((error) => {
            return error;
          });
       
      
      }

      isHDEnable(id: any,day:any,hour:any, enable: boolean) {
        this.database
        .object('state/'+id+'/days/'+day+'/hours/'+hour+'/hd')
        .set(enable)
        .then((response) => {
          return false;
        })
        .catch((error) => {
          return error;
        });
     
    
    }


    garanti(id: any,day:any,hour:any, garanti: number) {
      this.database
      .object('state/'+id+'/days/'+day+'/hours/'+hour+'/garanti')
      .set(garanti)
      .then((response) => {
        return false;
      })
      .catch((error) => {
        return error;
      });
 
  }

  Limit(id: any,day:any,hour:any, limit: number) {
    this.database
    .object('state/'+id+'/days/'+day+'/hours/'+hour+'/limit')
    .set(limit)
    .then((response) => {
      return false;
    })
    .catch((error) => {
      return error;
    });

}

bounce(id: any,day:any,hour:any, bounce: number) {
  this.database
  .object('state/'+id+'/days/'+day+'/hours/'+hour+'/bonus')
  .set(bounce)
  .then((response) => {
    return false;
  })
  .catch((error) => {
    return error;
  });

}
  
    }