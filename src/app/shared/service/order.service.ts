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
import { RouteItem } from '../interfaces/rout-item';
import { MapRoute } from '../interfaces/map-route';
import { CompanyImport } from '../interfaces/company_import';
import { Wearhouse } from '../interfaces/wearhouse';


const state = {
  checkoutItems: JSON.parse(localStorage['checkoutItems'] || '[]')
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
 
  public Currency = { name: 'Dollar', currency: 'USD', price: 1 } // Default Currency

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


  public  getOrderById(id: string): Observable<Order | null> {
    return this.angularFireDatabase
      .object<Order>('orders/'+id)
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

  public getOrders(uid:string):Observable<MapRoute[]>{
    console.log(uid)
    return this.angularFireDatabase
    .list<MapRoute>('Routes', (ref) => ref.orderByChild('companyId').equalTo(uid))
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

  public getCompanyOrders(uid:string):Observable<CompanyImport[]>{
    console.log(uid)
    return this.angularFireDatabase
    .list<CompanyImport>('companyFullRoute', (ref) => ref.orderByChild('companyId').equalTo(uid))
    .valueChanges()
    .pipe(map((arr) => 
    arr
    
    ));
  }
  public getCompanyOrdersFiltterd(uid:string):Observable<CompanyImport[]>{
    console.log(uid)
    return this.angularFireDatabase
    .list<CompanyImport>('companyFullRoute', (ref) => ref.orderByChild('companyId').equalTo(uid))
    .valueChanges()
    .pipe(map((arr) => 
    arr
    
    ));
  }

  public getImportedOrders(uid:string):Observable<MapRoute[]>{
    console.log(uid)
    return this.angularFireDatabase
    .list<MapRoute>('Routes', (ref) => ref.orderByChild('companyId').equalTo(uid))
    .valueChanges()
    .pipe(map((arr) => 
    arr
    
    ));
  }
  public getOrdersByDelivery(uid:string):Observable<Order[]>{
    console.log(uid)
    return this.angularFireDatabase
    .list<Order>('orders', (ref) => ref.orderByChild('deliveryBoy').equalTo(uid))
    .valueChanges()
    .pipe(map((arr) => 
    arr
    
    ));
  }

  public getOrdersByShop(uid:string):Observable<Order[]>{
    console.log(uid)
    return this.angularFireDatabase
    .list<Order>('orders', (ref) => ref.orderByChild('shopId').equalTo(uid))
    .valueChanges()
    .pipe(map((arr) => 
    arr
    
    ));
  }

  public getAllOrders():Observable<Order[]>{
    return this.angularFireDatabase
    .list<Order>('orders', (ref) => ref)
    .valueChanges()
    .pipe(map((arr) => 
    arr
    
    ));
  }

  public getAllOrdersByState(state:string):Observable<Order[]>{
    return this.angularFireDatabase
    .list<Order>('orders', (ref) => ref.orderByChild('state').equalTo(state))
    .valueChanges()
    .pipe(map((arr) => 
    arr.filter(item=>item.status !='4' && item.status !='5')
    
    ));
  }


  public getLastOrders():Observable<Order[]>{
    return this.angularFireDatabase
    .list<Order>('orders', (ref) => ref.limitToLast(5))
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

  deleteWearhouse(key: any) {
    return this.angularFireDatabase.database.ref('/wareHouses/'+key).remove();
  }

  deleteCompany(key: any) {
    return this.angularFireDatabase.database.ref('/companies/'+key).remove();
  }
  
}
