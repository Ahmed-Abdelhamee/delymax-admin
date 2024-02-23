import { AgmMap } from '@agm/core';
import { DatePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/shared/interfaces/customer';
import { Notification } from 'src/app/shared/interfaces/notification';
import { Order } from 'src/app/shared/interfaces/order';
import { State } from 'src/app/shared/interfaces/state';
import { Town } from 'src/app/shared/interfaces/town';
import { LocationModalComponent } from 'src/app/shared/location-modal/location-modal.component';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CheckPermisson } from 'src/app/shared/service/check-permisson';
import { DataService } from 'src/app/shared/service/data.service';
import { MessengerService } from 'src/app/shared/service/messenger.service';
import { OrderService } from 'src/app/shared/service/order.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { SendMailService } from 'src/app/shared/service/send-mail.service';

export interface ILatLng {
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit{
  @Input() orderId: string;
  order:Order;
  @Input() isShowFullScreenButton: boolean;
  @Input() isShowCloseButton: boolean;
  @Output() onClosed = new EventEmitter();
  @Output() onOpenIssue = new EventEmitter<string>();
  ref:string;
  public id:any;
  client:Customer;
  @ViewChild(AgmMap) agmMap: any;
  public closeResult: string;
  public modalOpen: boolean = false;
  // Washington, DC, USA
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
  orderStatus:any;
  pTime:number;
  price:number;
  canUpdate:boolean=false;
  towns:Town[]=[];
  states:State[]=[];
  public pipe = new DatePipe("ar-EG");
  @ViewChild("locationModal") LocationModal: LocationModalComponent;
  token:any;
  Status=[{id:"0",name:"New"},{id:"1",name:"Prepare"},{id:"2",name:"Stored"},{id:"3",name:"Dispatching"},{id:"4",name:"Delivered"},{id:"5",name:"Cancelled"}]


  constructor(private _modalService: NzModalService,public productService: ProductService,
    public route: ActivatedRoute,private router:Router,
    private orderService: OrderService,private permisson:CheckPermisson,private toastr:ToastrService
    ,private sendMail:SendMailService,private authService:AuthService,private messengerService:MessengerService,private dataService:DataService) {
      this.canUpdate = this.permisson.checkPermisson('"update_order":true');
      
    }
    ngOnInit(): void {	
      this.id = this.orderId;
      this.getOrder(this.id);
      this.getFillters();
      
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
    getOrder(id: string) {
      this.orderService
      .getOrderById(id)
      .subscribe((order) => {
        if (order) {
          this.order = order;
          this.destination = {latitude: order.from.lat,longitude: order.from.lng};
          this.origin = {latitude: order.to.lat,longitude: order.to.lng};
          if(order.pTime)
              this.pTime = order.pTime;

          this.price = order.subtotal;
          this.orderStatus = this.order.status;
          this.updateS();
          this.getStates();
         
          this.distance = this.getDistanceFromLatLonInKm(this.origin.latitude,this.origin.longitude,this.destination.latitude,this.destination.longitude);
        }
      });
    }
    getFillters() {
      this.dataService.getTowns().subscribe(towns=>{
        this.towns = towns;
      });
    }
  
    getStates(){
      this.dataService.getStates(this.order.to.town ).subscribe(states=>{
        this.states = states;
      });
    }
  updateS() {
     if(this.orderStatus == "1"){
      this.Status=[{id:"1",name:"Prepare"},{id:"2",name:"Stored"},{id:"3",name:"Dispatching"},{id:"4",name:"Delivered"},{id:"5",name:"Cancelled"}];

    }else if(this.orderStatus == "2"){
      this.Status=[{id:"2",name:"Stored"},{id:"3",name:"Dispatching"},{id:"4",name:"Delivered"},{id:"5",name:"Cancelled"}];

    }else if(this.orderStatus == "3"){
      this.Status=[{id:"3",name:"Dispatching"},{id:"4",name:"Delivered"},{id:"5",name:"Cancelled"}];
    }else if(this.orderStatus == "4"){
      this.Status=[{id:"4",name:"Delivered"},{id:"5",name:"Cancelled"}];
    }else if(this.orderStatus == "5"){
      this.Status=[{id:"5",name:"Cancelled"}];
    }
  }

  

  closeModal() {
    this.onClosed.emit();
  }
  viewMap(){
    if(this.showMap){
      this.showMap=false;
    }else{
      this.showMap=true;
    }
  }
  openIssuePage() {
    this.onOpenIssue.emit(this.order.orderId);
  }

  

  updteStatus(){
    console.log(this.orderStatus);

   this.orderService.updateOrderStatus(this.order.orderId,this.orderStatus).subscribe(res=>{
    let title = "";
    let body = "";
    this.authService.getToken(this.order.userId).subscribe(token=>{
     this.token = token.token;
     if(this.orderStatus=="1" ){
      title = "قيد التجهيز"
      console.log("pTime = "+this.pTime)
      const timestamp = new Date().getTime();
      this.orderService.updateOrderTimeStatus(this.order.orderId,"prepareTime",timestamp).subscribe(res=>{

      });
      console.log("pTime = "+this.pTime)
      this.orderService.updateOrderPTime(this.order.orderId,this.pTime).subscribe(res=>{

      });
      this.orderService.updateOrderPice(this.order.orderId,this.price).subscribe(res=>{

      });
      body=" الطلب رقم "+this.order.orderId+" قيد التجهيز"
     }else if(this.orderStatus=="2" ){
       title = "تم التخزين "
       body=" الطلب رقم "+this.order.orderId+" تم التخزين  "
  
     }else if(this.orderStatus=="3" ){
      title = "في الطريق"
      body=" الطلب رقم "+this.order.orderId+" في الطريق "
      const timestamp = new Date().getTime();
      this.orderService.updateOrderTimeStatus(this.order.orderId,"deliveryTime",timestamp).subscribe(res=>{

      });
    }else if(this.orderStatus=="4" ){
      title = "تم التسليم "
      body=" الطلب رقم "+this.order.orderId+" تم التسليم"
      const timestamp = new Date().getTime();
      this.deliveryRequest()
       this.orderService.updateOrderTimeStatus(this.order.orderId,"doneTime",timestamp).subscribe(res=>{
 
       });
     }else if(this.orderStatus=="5"){
      title = "تم الغاء الطلب "
      body=" الطلب رقم "+this.order.orderId+" تم الالغاء "
      this.cancelRequest();
    }else{
      this.toastr.error("Cant/'t update")
    }
     this.sendNotification(title,body,this.token);
     this.router.navigate(['/sales/orders']);
    })
   
   })

   this.closeModal();
   
  }

  chat(){
    this.messengerService.getChatReciverId('0102',this.order.userId).subscribe(chatMs=>{
      if(chatMs.length>0){
        this.ref=chatMs[0].ref
        const url = this.router.serializeUrl(
          this.router.createUrlTree(['/chat/chat'], { queryParams: { id: this.ref,user:this.order.userId}})
        );
      
        window.open(url, '_blank');
        //this.router.navigate(['/chat/chat'], { queryParams: { id: this.ref,user:this.order.userId},replaceUrl: true})
      }else{
        this.ref=""+new Date().getTime();
        const url = this.router.serializeUrl(
          this.router.createUrlTree(['/chat/chat'], { queryParams: { id: this.ref,user:this.order.userId}})
        );
      
        window.open(url, '_blank');
      }
      }
      );
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
  ngAfterViewInit() {
    
  }
  RequestDelivery(){
    this.orderService.requestDelivery(this.order.orderId,this.order).subscribe(res=>{
      this.toastr.success('Resqust send succesfully');
    })

   

  }

  cancelRequest(){
    this.authService.getCustomer(this.order.userId).subscribe(customer=>{
     // var balanceH = customer.balanceH - this.order.subtotal;
     // this.orderService.updateUserPayments(customer.uid,"balanceH",balanceH).subscribe(res=>{
  
   //   })
    })
   
  }

  deliveryRequest(){
    this.authService.getCustomer(this.order.userId).subscribe(customer=>{
      //var balanceH = customer.balanceH - this.order.subtotal;
     // var balanceM = customer.balanceM + this.order.subtotal;
     // this.orderService.updateUserPayments(customer.uid,"balanceH",balanceH).subscribe(res=>{
     //     this.orderService.updateUserPayments(customer.uid,"balanceM",balanceM)
   //   })
    })
   
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
}
