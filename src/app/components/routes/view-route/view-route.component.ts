import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CheckPermisson } from 'src/app/shared/service/check-permisson';
import { OrderService } from 'src/app/shared/service/order.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { SendMailService } from 'src/app/shared/service/send-mail.service';
import { DatePipe } from '@angular/common';
import { LocationModalComponent } from 'src/app/shared/location-modal/location-modal.component';
import { AgmMap } from '@agm/core';
import { Town } from 'src/app/shared/interfaces/town';
import { State } from 'src/app/shared/interfaces/state';
import { DataService } from 'src/app/shared/service/data.service';
import { RouteService } from 'src/app/shared/service/route.service';
import { MapRoute } from 'src/app/shared/interfaces/map-route';
import { DeliveryBoy } from 'src/app/shared/interfaces/delivery-boy';
import { LatLng } from 'src/app/shared/interfaces/lat-lng';
import { DistanceM } from 'src/app/shared/interfaces/distance-m';
import { RouteItem } from 'src/app/shared/interfaces/rout-item';
export interface ILatLng {
  latitude: number;
  longitude: number;
}


@Component({
  selector: 'app-view-route',
  templateUrl: './view-route.component.html',
  styleUrls: ['./view-route.component.scss']
})
export class ViewRouteComponent implements OnInit {

  public order : MapRoute ;
  public driver:DeliveryBoy;
  public id:any;
  orderStatus:any;
  points:[LatLng];
  canUpdate:boolean=false;

  towns:Town[]=[];
  states:State[]=[];
  routeItems:[RouteItem];
  distances:[DistanceM]
  @ViewChild(AgmMap) agmMap: any;
  origin: ILatLng ;
  lines:any;
  // New York City, NY, USA
  destination: ILatLng ;
  displayDirections = true;
  latitude: number=30.033333;
  longitude: number=31.233334;
  zoom: number = 13;
  options: any = {
    lat: this.latitude,
    lng: this.longitude,
    zoom: 13,
    fillColor: '#DC143C',
    draggable: true,
    editable: true,
    visible: true
  };
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
  public pipe = new DatePipe("ar-EG");
  @ViewChild("locationModal") LocationModal: LocationModalComponent;
  token:any;
  Status=[{id:"0",name:"New"},{id:"1",name:"Prepare"},{id:"2",name:"Stored"},{id:"3",name:"Dispatching"},{id:"4",name:"Delivered"},{id:"5",name:"Cancelled"}]
  constructor(public productService: ProductService,
    public route: ActivatedRoute,private router:Router,
    private orderService: OrderService,private permisson:CheckPermisson,
    private translate:TranslateService,private toastr:ToastrService
    ,private sendMail:SendMailService,private authService:AuthService
    ,private dataService:DataService,private routeService:RouteService) { 
   
      this.canUpdate = this.permisson.checkPermisson('"update_order":true')
    }

  ngOnInit(): void {	
    this.id = parseInt(this.route.snapshot.queryParams["id"]);
    this.getOrder(this.id);

 
    
    
  }
  
  getOrder(id: string) {
    this.routeService
    .getRouteById(id)
    .subscribe((order) => {
      if (order) {
        this.order = order;

        this.getDB(this.order.driverId);
        this.lines = this.order.route;
        console.log(this.lines)
        this.latitude = this.order.startPoint.latitude;
        this.longitude = this.order.startPoint.longitude;
        this.points = this.order.points;
         this.distances = this.order.distances;

         this.distance = 0
         this.distances.forEach(element => {
           this.distance = this.distance+(element.value/1000)
         });
        this.routeItems = this.order.routeItems;
        this.getFillters() ;
        this.getStates();
      }
    });
  }
  ConvertString(value){
    return parseFloat(value)
    }
  getDB(id:string){
    this.routeService.getDB(id).subscribe(driver=>{
       this.driver = driver;
     });
   }

   markerClicked(event) {
  
 
   
    console.log('clicked');
    console.log(event);
  }

  getStates(){
   // this.dataService.getStates(this.order.to.town ).subscribe(states=>{
   //   this.states = states;
  //  });
  }

  getFillters() {
    this.dataService.getTowns().subscribe(towns=>{
      this.towns = towns;
    });
  }
  /*
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
      title = "تم التخزين "
      body=" الطلب رقم "+this.order.orderId+" تم التخزين"
      
     }else if(this.orderStatus=="3"){
       title = "في الطريق"
       body=" الطلب رقم "+this.order.orderId+" في الطريق "
       const timestamp = new Date().getTime();
       this.orderService.updateOrderTimeStatus(this.order.orderId,"deliveryTime",timestamp).subscribe(res=>{
 
       });
     }else if(this.orderStatus=="4"){
      title = "تم التسليم "
      body=" الطلب رقم "+this.order.orderId+" تم التسليم"
      const timestamp = new Date().getTime();
      this.deliveryRequest();
       this.orderService.updateOrderTimeStatus(this.order.orderId,"doneTime",timestamp).subscribe(res=>{
 
       });
     }else if(this.orderStatus=="5"){
      title = "تم الغاء الطلب "
      body=" الطلب رقم "+this.order.orderId+" تم الالغاء ";
      this.cancelRequest()
    }
     this.sendNotification(title,body,this.token);
     this.router.navigate(['/sales/orders']);
    })
   
   })
   
  }

  cancelRequest(){
    this.authService.getCustomer(this.order.userId).subscribe(customer=>{
      var balanceH = customer.balanceH - this.order.subtotal;
      this.orderService.updateUserPayments(customer.uid,"balanceH",balanceH).subscribe(res=>{
  
      })
    })
   
  }
RequestDelivery(){
    this.orderService.requestDelivery(this.order.orderId,this.order).subscribe(res=>{
      this.toastr.success('Resqust send succesfully');
    })

  }
  deliveryRequest(){
    this.authService.getCustomer(this.order.userId).subscribe(customer=>{
      var balanceH = customer.balanceH - this.order.subtotal;
      var balanceM = customer.balanceM + this.order.subtotal;
      this.orderService.updateUserPayments(customer.uid,"balanceH",balanceH).subscribe(res=>{
          this.orderService.updateUserPayments(customer.uid,"balanceM",balanceM)
      })
    })
   
  }
  sendNotification(title:string,body:string,id:string){
    const content = {notification: {
      title: title, 
      body: body
      },
      to : id
     }
    
  this.sendMail.sendMessage(content);
  const  myDate = this.pipe.transform(new Date(), 'yyyy-MM-dd hh:mm a');
  const gid = this.createId();
  let notification = new Notification(gid,title,body,true,this.order.orderId,this.order.shopId,true,false,this.order.userId,myDate);
  this.orderService.sendNotification(notification);

  }
  */
  viewMap(){
    if(this.showMap){
      this.showMap=false;
    }else{
      this.showMap=true;
    }
  }
  ngAfterViewInit() {
    
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