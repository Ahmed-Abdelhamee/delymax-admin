import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/shared/interfaces/order';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CheckPermisson } from 'src/app/shared/service/check-permisson';
import { OrderService } from 'src/app/shared/service/order.service';
import { Permissons } from 'src/app/shared/service/permissions';
import { ProductService } from 'src/app/shared/service/product.service';
import { SendMailService } from 'src/app/shared/service/send-mail.service';
import { Notification } from 'src/app/shared/interfaces/notification';
import { DatePipe } from '@angular/common';
import { AgmMap } from '@agm/core';
import { ILatLng } from 'src/app/shared/location-modal/location-modal.component';


@Component({
  selector: 'app-shop-view-order',
  templateUrl: './shop-view-order.component.html'
})
export class ShopViewOrderComponent implements OnInit {
  @ViewChild(AgmMap) agmMap: any;
  origin: ILatLng ;
  // New York City, NY, USA
  destination: ILatLng ;
  displayDirections = true;
  zoom = 14;
  distance:any;
 shopIcon={
  url:'./assets/images/icons/shop.png',
  scaledSize: {
      width: 40,
      height: 40
  }
}

userIcon={
  url:'./assets/images/icons/user.png',
  scaledSize: {
      width: 40,
      height: 40
  }
}
  showMap:boolean = false;
  public order : Order = {};
  public pipe = new DatePipe("en-US");
  public id:any;
  orderStatus:any;
  canUpdate:boolean=false;
  shopId:any;
  token:any;
  Status=[{id:"0",name:"New"},{id:"1",name:"Prepare"},{id:"2",name:"Dispatching"},{id:"3",name:"Delivered"},{id:"3",name:"Cancelled"}]
  constructor(public productService: ProductService,
    public route: ActivatedRoute,private router:Router,
    private orderService: OrderService,private permisson:CheckPermisson,
    private translate:TranslateService,private toastr:ToastrService
    ,private sendMail:SendMailService,private authService:AuthService) { 
   
      this.canUpdate = this.permisson.checkPermisson('"update_order":true')
    }

  ngOnInit(): void {	
    this.id = parseInt(this.route.snapshot.queryParams["id"]);
    this.shopId=this.route.snapshot.queryParams["shopId"]
    this.getOrder(this.id);
    
  }

  getOrder(id: string) {
    this.orderService
    .getOrderById(id)
    .subscribe((order) => {
      if (order) {
        this.order = order;
        this.orderStatus = this.order.status;
        this.destination = {latitude: order.from.lat,longitude: order.from.lng};
        this.origin = {latitude: order.to.lat,longitude: order.to.lng};
        this.distance = this.getDistanceFromLatLonInKm(this.origin.latitude,this.origin.longitude,this.destination.latitude,this.destination.longitude);
      }
    });
  }
  RequestDelivery(){
    this.orderService.requestDelivery(this.order.orderId,this.order).subscribe(res=>{
      this.toastr.success('Resqust send succesfully');
    })

  }
  updteStatus(){
    console.log(this.orderStatus);

    this.orderService.updateOrderStatus(this.order.orderId,this.orderStatus).subscribe(res=>{
      let title = "";
      let body = "";
      this.authService.getToken(this.order.userId).subscribe(token=>{
       this.token = token.token;
       if(this.orderStatus=="1"){
        title = "قيد التجهيز"
        const timestamp = new Date().getTime();
        this.orderService.updateOrderTimeStatus(this.order.orderId,"prepareTime",timestamp).subscribe(res=>{
  
        });
        body=" الطلب رقم "+this.order.orderId+" قيد التجهيز"
       }else if(this.orderStatus=="2"){
         title = "في الطريق"
         body=" الطلب رقم "+this.order.orderId+" في الطريق "
         const timestamp = new Date().getTime();
         this.orderService.updateOrderTimeStatus(this.order.orderId,"deliveryTime",timestamp).subscribe(res=>{
   
         });
       }else if(this.orderStatus=="3"){
        title = "تم التسليم "
        body=" الطلب رقم "+this.order.orderId+" تم التسليم"
        const timestamp = new Date().getTime();
         this.orderService.updateOrderTimeStatus(this.order.orderId,"doneTime",timestamp).subscribe(res=>{
   
         });
       }else if(this.orderStatus=="4"){
        title = "تم الغاء الطلب "
        body=" الطلب رقم "+this.order.orderId+" تم الالغاء "
      }
       this.sendNotification(title,body,this.token);
       this.router.navigate(['/shops/view-shop/'],{ queryParams: {id: this.shopId}});
      })
     
     })
    
  }
  ngAfterViewInit() {
    
  }

  sendNotification(title:string,body:string,id:string){
    const content = {notification: {
      title: title, 
      body: body
      },
      to : id
     }

    const gid = this.createId()
    
  this.sendMail.sendMessage(content);
  const  myDate = this.pipe.transform(new Date(), 'yyyy-MM-dd hh:mm a');
  let notification = new Notification(gid,title,body,true,this.order.orderId,this.order.shopId,true,false,this.order.userId,myDate);
  this.orderService.sendNotification(notification);
  }

  private createId(): string {
    let t = new Date();

    const randomId = this.pipe.transform(new Date(), 'yyyyMMdd')+t.getUTCMilliseconds();
    let id =  ""+randomId;
    if (id === "1") {
      id = ""+randomId;
    }
    return id;
  }

  viewMap(){
    if(this.showMap){
      this.showMap=false;
    }else{
      this.showMap=true;
    }
  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  polygonCenter(poly) {
    const vertices = poly;
  
    // put all latitudes and longitudes in arrays
    const longitudes = vertices.map(i => i.lng);
    const latitudes = vertices.map( i => i.lat);
  
    // sort the arrays low to high
    latitudes.sort();
    longitudes.sort();
  
    // get the min and max of each
    const lowX = latitudes[0];
    console.log(lowX)
    const highX = latitudes[latitudes.length - 1];
    const lowy = longitudes[0];
    const highy = longitudes[latitudes.length - 1];
  
    // center of the polygon is the starting point plus the midpoint
    const centerX = lowX + ((highX - lowX) / 2);
    const centerY = lowy + ((highy - lowy) / 2);
  
    return ({lat:centerX, lng:centerY});
  }
}