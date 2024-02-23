import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { ToastrService } from "ngx-toastr";
import { Observable, of } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import { catchError, map } from "rxjs/operators";
import { Coupon } from "../interfaces/coupon";
import { UploadService } from "./upload.service";

@Injectable({
    providedIn: 'root'
  })
  export class CouponService {
  
    constructor( private toastrService: ToastrService,
        private angularFireDatabase: AngularFireDatabase
        ,private uploadService:UploadService,
        private messageService:ToastrService,
        private storage: AngularFireStorage) { }



    public getCoupons(): Observable<Coupon[]> {
        return this.angularFireDatabase
          .list<Coupon>('coupons', (ref) => ref)
          .valueChanges()
          .pipe(map((arr) => 
          arr.reverse()
          
          ), catchError(this.handleError<Coupon[]>(`getCoupons`)));
       
       
      }

      public addCoupon(coupon: Coupon) {
        const dbOperation =  this.angularFireDatabase
              .list('coupons')
              .set(coupon.code.toString(), coupon)
            
           
          .then((response) => {
            this.log(`Added Invoice ${coupon.code}`);
            return coupon;
          })
          .catch((error) => {
            this.messageService.error(
              `Add Failed, Coupon ${coupon.code}`
            );
            this.handleError(error);
            return error;
          });
        return fromPromise(dbOperation);
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
        this.toastrService.show(message);
      }


      deleteCoupon(key: any) {
        return this.angularFireDatabase.database.ref('/coupons/'+key).remove();
      }

      deleteCouponUsers(key: any) {
        return this.angularFireDatabase.database.ref('/usedCoupons/'+key).remove();
      }
  }