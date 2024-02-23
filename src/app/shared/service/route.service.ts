import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of , from as fromPromise } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Order } from '../interfaces/order';
import { PromoCode } from '../interfaces/promo-code';
import { Address } from '../interfaces/address';
import { Notification } from '../interfaces/notification';
import { Message } from '../interfaces/message';
import { MapRoute } from '../interfaces/map-route';
import { DeliveryBoy } from '../interfaces/delivery-boy';
import { ItemImportTemp } from '../interfaces/item-import_temp';
import { RouteData } from '../interfaces/route-data';
import { Wearhouse } from '../interfaces/wearhouse';
import { Company } from '../interfaces/company';
import { RouteItemImport } from '../interfaces/route-item-import';
import { CompanyImport } from '../interfaces/company_import';


const state = {
    checkoutItems: JSON.parse(localStorage['checkoutItems'] || '[]')
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class RouteService {
   
 
  
    checkPromo(promoCode: string) {
      return this.angularFireDatabase
        .object<PromoCode>('Promo/'+promoCode)
        .valueChanges()
        .pipe(
          tap((result) => {
            if (result) {
              console.log("true")
              return of(result);
            
            }
          })
        );
    }
  
    public getDB(id: string): Observable< DeliveryBoy | null> {
        return this.angularFireDatabase
          .object<DeliveryBoy>('DeliveryBoy/'+id)
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

      updateRouteTemp(routTemp:ItemImportTemp) {
        this.angularFireDatabase.object('/routeTemp/' + routTemp.id ).update({
        name:routTemp.name||"",
        id:routTemp.id,
        field1:routTemp.field1,
        field2:routTemp.field2,
        field3:routTemp.field3,
        field4:routTemp.field4,
        field5:routTemp.field5,
        field6:routTemp.field6,
        field7:routTemp.field7,
        field8:routTemp.field8,
        field9:routTemp.field9,
        field10:routTemp.field10,
        field11:routTemp.field11,
        field12:routTemp.field12,
        field13:routTemp.field13,
        
          
        });
      }

      addNewRoute(routTemp:any) {
        this.angularFireDatabase.object('/importedRoutes/' + routTemp.id).update(routTemp);
      }

      addCompanyFullRoute(routTemp:CompanyImport) {
        this.angularFireDatabase.object('/companyFullRoute/' + routTemp.id).update(routTemp);
      }
      addRoute(routTemp:any) {
        this.angularFireDatabase.object('/Routes/' + routTemp.id).update(routTemp);
      }


      public getRouteTemp(id: string): Observable< ItemImportTemp | null> {
        return this.angularFireDatabase
          .object<ItemImportTemp>('routeTemp/'+id)
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

      public getAllDeliveryBoys():Observable<DeliveryBoy[]>{
        return this.angularFireDatabase
        .list<DeliveryBoy>('DeliveryBoy', (ref) => ref)
        .valueChanges()
        .pipe(map((arr) => 
        arr
        
        ));
      }

      public getWearHouses(id:string):Observable<Wearhouse[]>{
        console.log(id)
        return this.angularFireDatabase
        .list<Wearhouse>('wareHouses', (ref) => ref)
        .valueChanges()
        .pipe(map((arr) => 
        arr.filter(item=>item.companyID == id)
        
        ));
      }
  

    public  getAllRouteData(id: string): Observable<RouteData | null> {
      return this.angularFireDatabase
        .object<RouteData>('importedRoutes/'+id)
        .valueChanges()
        .pipe(
          tap((result) => {
            if (result) {
              console.log("true")
              return of(result);
            
            }
          })
        );
  
    }
  
    public  getRouteById(id: string): Observable<MapRoute | null> {
      return this.angularFireDatabase
        .object<MapRoute>('Routes/'+id)
        .valueChanges()
        .pipe(
          tap((result) => {
            if (result) {
              console.log("true")
              return of(result);
            
            }
          })
        );
  
    }


    public  getDriverRouteById(id: string): Observable<MapRoute | null> {
      return this.angularFireDatabase
        .object<MapRoute>('Routes/'+id)
        .valueChanges()
        .pipe(
          tap((result) => {
            if (result) {
              console.log("true")
              return of(result);
            
            }
          })
        );
  
    }
    removerRouteItemData(id,routItems) {
      console.log('Routes/' + id +'/routeItems')
     this.angularFireDatabase.database.ref('Routes/' + id +'/routeItems').set(routItems);
    }

    removerPackagesItemData(id,packages) {
      this.angularFireDatabase.database.ref('Routes/' + id +'/packages').set(packages);
     }
    
    updaeRouteData(id,postion,status) {
      console.log('importedRoutes/' + id +'/routeItems/'+postion)
     this.angularFireDatabase.object('importedRoutes/' + id +'/routeItems/'+postion).update(status);
    }
  
    constructor(private router: Router, private angularFireDatabase: AngularFireDatabase,public toastr:ToastrService) { }
  
    // Get Checkout Items
    public get checkoutItems(): Observable<any> {
      const itemsStream = new Observable(observer => {
        observer.next(state.checkoutItems);
        observer.complete();
      });
      return <Observable<any>>itemsStream;
    }
  
    // Create order
    public createOrder(product: any, details: any, orderId: any, amount: any,subtotal: any,shipping: any,tax :any,discount:any,payment:any,date:any,userId: string) {
      var item = {
          shippingDetails: details,
          product: product,
          userId:  userId,
          orderId: orderId,
          shipping:shipping,
          discount:discount,
          payment:payment,
          date:date,
          subtotal:subtotal,
          tax:tax,
          status:"0",
          totalAmount: amount
      };
      state.checkoutItems = item;
      localStorage.setItem("checkoutItems", JSON.stringify(item));
      this.sendOrder(item)
      localStorage.removeItem("cartItems");
      this.router.navigate(['/shop/checkout/success', orderId]);
    }
  
    public getOrders(uid:string):Observable<Order[]>{
      console.log(uid)
      return this.angularFireDatabase
      .list<Order>('Routes', (ref) => ref.orderByChild('userId').equalTo(uid))
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
    }
    public getRouteByDelivery(uid:string):Observable<MapRoute[]>{
      console.log(uid)
      return this.angularFireDatabase
      .list<MapRoute>('Routes', (ref) => ref.orderByChild('deliveryBoy').equalTo(uid))
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
    }
  
    public getOrdersByShop(uid:string):Observable<Order[]>{
      console.log(uid)
      return this.angularFireDatabase
      .list<Order>('Routes', (ref) => ref.orderByChild('shopId').equalTo(uid))
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
    }
  
    public getAllRoutes():Observable<MapRoute[]>{
      return this.angularFireDatabase
      .list<MapRoute>('Routes', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr.filter(item=>item.driverId!="")
      
      ));
    }

    public getAllDividedRoutes():Observable<MapRoute[]>{
      return this.angularFireDatabase
      .list<MapRoute>('Routes', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr.filter(item=>item.driverId == "")
      
      ));
    }

    public getAllTemps():Observable<ItemImportTemp[]>{
      return this.angularFireDatabase
      .list<ItemImportTemp>('routeTemp', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));

      
    }

    public getAllCompanies():Observable<Company[]>{
      return this.angularFireDatabase
      .list<Company>('companies', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));

      
    }

    public getAllImportedRoutes():Observable<RouteData[]>{
      return this.angularFireDatabase
      .list<RouteData>('importedRoutes', (ref) => ref)
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
    }
  
    public getAllOrdersByState(state:string):Observable<Order[]>{
      return this.angularFireDatabase
      .list<Order>('Routes', (ref) => ref.orderByChild('state').equalTo(state))
      .valueChanges()
      .pipe(map((arr) => 
      arr.filter(item=>item.status !='4' && item.status !='5')
      
      ));
    }
  
  
    public getLastOrders():Observable<Order[]>{
      return this.angularFireDatabase
      .list<Order>('Routes', (ref) => ref.limitToLast(5))
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
    }
  
  
    public getAllNotification():Observable<Notification[]>{
      return this.angularFireDatabase
      .list<Notification>('notification', (ref) => ref.orderByChild("seen").equalTo(false))
      .valueChanges()
      .pipe(map((arr) => 
      arr
      
      ));
    }
  
    public getAllNotificationByShop(shopId:string):Observable<Notification[]>{
      return this.angularFireDatabase
      .list<Notification>('notification', (ref) => ref.orderByChild("shopId").equalTo(shopId))
      .valueChanges()
      .pipe(map((arr) => 
      arr.filter(not=>not.shopSeen==false)
      
      ));
    }
  
    public getAllChatsByShop(shopId:string):Observable<Message[]>{
      return this.angularFireDatabase
      .list<Message>('Chats', (ref) => ref.orderByChild("receiver").equalTo(shopId))
      .valueChanges()
      .pipe(map((arr) => 
      arr.filter(not=>not.isseen==false).reverse()
      
      ));
    }
  
   
  
  
    public updateNotificationStatus(id: string,status:boolean) {
      const dbOperation = this.angularFireDatabase
        .object('notification/'+id+'/seen')
        .set(status)
        .then((response) => {
          
          return status;
        })
        .catch((error) => {
          
          return error;
        });
      return fromPromise(dbOperation);
    }
  
  
    public sendNotification(item){
      this.angularFireDatabase.object('/notification/'+item.id).update(item)
    }
  
    public updateNotificationStatusByShop(id: string,status:boolean) {
      const dbOperation = this.angularFireDatabase
        .object('notification/'+id+'/seen')
        .set(status)
        .then((response) => {
          this.angularFireDatabase
          .object('notification/'+id+'/shopSeen')
          .set(status)
          return status;
        })
        .catch((error) => {
          
          return error;
        });
      return fromPromise(dbOperation);
    }

    public updateRouteData(id: string,mapRoute) {
      this.angularFireDatabase.object('/Routes/'+id).set(mapRoute)
    }

    public updateRoutePolyData(id: string,poly) {
      this.angularFireDatabase.object('/Routes/'+id+'/route/').set(poly)
    }

    public updateRouteItems(id: string,routeItems) {
      this.angularFireDatabase.object('/Routes/'+id+'/routeItems/').set(routeItems)
    }
    public updateMessageStatusByUser(id: string,status:boolean) {
      const dbOperation = this.angularFireDatabase
        .object('Chats/'+id+'/isseen')
        .set(status)
        .then((response) => {
         
          return status;
        })
        .catch((error) => {
          
          return error;
        });
      return fromPromise(dbOperation);
    }
    public updateOrderStatus(id: string,status:string) {
      const dbOperation = this.angularFireDatabase
        .object('orders/'+id+'/status')
        .set(status)
        .then((response) => {
          
          return status;
        })
        .catch((error) => {
          
          return error;
        });
      return fromPromise(dbOperation);
    }
    public requestDelivery(id: string,order:any) {
      const dbOperation = this.angularFireDatabase
        .object('DeliveryRequests/'+id)
        .set(order)
        .then((response) => {
          
          return status;
        })
        .catch((error) => {
          
          return error;
        });
      return fromPromise(dbOperation);
    }
  
    deleteOrderDe(key: any) {
      
      return this.angularFireDatabase.database.ref('/DeliveryRequests/'+key).remove();
    }
    public updateOrderTimeStatus(id: string,status:string,time:number) {
      const dbOperation = this.angularFireDatabase
        .object('orders/'+id+'/'+status)
        .set(time)
        .then((response) => {
          
          return status;
        })
        .catch((error) => {
          
          return error;
        });
      return fromPromise(dbOperation);
    }
  
    public updateUserPayments(id: string,payment:string,balanceH:number) {
      const dbOperation = this.angularFireDatabase
        .object('users/'+id+'/'+payment)
        .set(balanceH)
        .then((response) => {
          
          return status;
        })
        .catch((error) => {
          
          return error;
        });
      return fromPromise(dbOperation);
    }
    public updateOrderPTime(id: string,time:number) {
      const dbOperation = this.angularFireDatabase
        .object('orders/'+id+'/pTime')
        .set(time)
        .then((response) => {
          
          return status;
        })
        .catch((error) => {
          
          return error;
        });
      return fromPromise(dbOperation);
    }
  
    public updateOrderPice(id: string,price:number) {
      const dbOperation = this.angularFireDatabase
        .object('orders/'+id+'/subtotal')
        .set(price)
        .then((response) => {
          
          return status;
        })
        .catch((error) => {
          
          return error;
        });
      return fromPromise(dbOperation);
    }
  
    public sendOrder(item){
      this.angularFireDatabase.object('/orders/'+item.orderId).update(item)
    }
  
    public addAddress(address: Address) {
      const dbOperation =  this.angularFireDatabase
            .list('address')
            .set(address.id.toString(), address)
          
         
        .then((response) => {
          this.toastr.success(`Added address ${address.title}`);
          return address;
        })
        .catch((error) => {
          this.toastr.error(
            `Add Failed, Address ${address.title}`
          );
          return error;
        });
      return fromPromise(dbOperation);
    }
  
    deleteOrder(key: any) {
      return this.angularFireDatabase.database.ref('/orders/'+key).remove();
    }
    
  }
  