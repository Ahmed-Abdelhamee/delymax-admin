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
import { RouteItemM } from 'src/app/shared/interfaces/route-item-m';
import { Package } from 'src/app/shared/interfaces/package';
import { HttpClient } from '@angular/common/http';
import { LatLngDis } from 'src/app/shared/interfaces/lat-lng-dist';
import { Wearhouse } from 'src/app/shared/interfaces/wearhouse';


declare var require: any

export interface ILatLng {
  latitude: number;
  longitude: number;
}



@Component({
  selector: 'app-view-driver-route',
  templateUrl: './view-driver-route.component.html',
  styleUrls: ['./view-driver-route.component.scss']
})
export class ViewDriverRouteComponent implements OnInit {

  public order : MapRoute ;
  public driver:DeliveryBoy;
  public id:any;
  orderStatus:any;
  points:[LatLng];
  mapRoute:MapRoute;
  routeDate:number;
  routeName:string;
  wearHouse:Wearhouse;
  canUpdate:boolean=false;
  towns:Town[]=[];
  states:State[]=[];
  routeItems:[RouteItem];
  packages:[Package];
  mainRouteId:any;
  routeE:any = [];
  distancesE:any = [];
  importedRouteItems:RouteItemM[] = [];
  importedRouteItemsSelected:RouteItemM[] = [];
  distances:[DistanceM];
  uniqueNodes:LatLngDis[] = [];
  warehousP:LatLngDis ;
  selectedMarker = false;
  @ViewChild(AgmMap) agmMap: any;
  origin: ILatLng ;
  mapdata:any;
  lines:any;
  // New York City, NY, USA
  destination: ILatLng ;
  displayDirections = true;
  latitude: number=30.033333;
  longitude: number=31.233334;
  zoom: number = 11;
  wearHouses:Wearhouse[]=[];
  drivers:DeliveryBoy[]=[];
  driversF:DeliveryBoy[]=[];
  options: any = {
    lat: this.latitude,
    lng: this.longitude,
    zoom: 11,
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
  public pipe = new DatePipe("en-US");
  @ViewChild("locationModal") LocationModal: LocationModalComponent;
  token:any;
  Status=[{id:"0",name:"New"},{id:"1",name:"Prepare"},{id:"2",name:"Stored"},{id:"3",name:"Dispatching"},{id:"4",name:"Delivered"},{id:"5",name:"Cancelled"}]
  constructor(public productService: ProductService,
    public route: ActivatedRoute,private router:Router,
    private orderService: OrderService,private permisson:CheckPermisson,
    private translate:TranslateService,private toastr:ToastrService
    ,private sendMail:SendMailService,private authService:AuthService
    ,private dataService:DataService,private routeService:RouteService,
    private http:HttpClient) { 
   
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
        this.routeItems = this.order.routeItems;
        console.log(this.order.routeItems)
        this.packages = this.order.packages;
        this.mainRouteId = this.order.mainRouteId;
        this.importedRouteItems = [];
        this.routeItems.forEach(item=>{
         let i = new RouteItemM(item)
         this.importedRouteItems.push(i);
        })
        this.latitude = this.order.routeItems[0].latitude;
        this.longitude = this.order.routeItems[0].longtude;
        this.getDB();
        let companyID = this.order.companyId;
        this.getWearHouses(companyID);
        this.lines = this.order.route;
        console.log(this.lines)
      
        this.points = this.order.points;
         this.distances = this.order.distances;
        this.getFillters() ;
        this.getStates();
      }
    });
  }
  ConvertString(value){
    return parseFloat(value)
    }
  getDB(){
    this.routeService.getAllDeliveryBoys().subscribe(driver=>{
       this.drivers = driver;
       this.driversF = driver;
     });
   }

   searchFromDate(val) {
    //this.selectModel.reset(null);
    let mySimpleFormat = this.pipe.transform(val, "MM-dd-yyyy");
    var date = new Date(mySimpleFormat);
    console.log(date)
    //this. month = (date.getMonth())+1;
   // this.year  = date.getFullYear();
   this.routeDate = date.getTime();

    console.log(date.getTime())
  

  
  }
  public objectComparisonFunction = function( option, value ) : boolean {
    return option.id === value.id;
    
  }
  getData(){
   console.log(this.routeDate+","+this.driver.phone+","+this.routeName+","+this.wearHouse.name);
   this.optmize()
  }

   getWearHouses(id:string){
     console.log(id)
    this.routeService.getWearHouses(id).subscribe(res=>{
       this.wearHouses = res;

     });
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

  markerClicked(event) {
    this.importedRouteItemsSelected = [];
     this.selectedMarker = true;
    this.importedRouteItemsSelected.push(event)
    console.log('clicked');
    console.log(event);
  }

  discard(){
    this.importedRouteItemsSelected = [];
    this.selectedMarker = false;
    //this.getOrder(this.id)

  }

  remove(item:RouteItemM){
  
   let p = this.routeItems.findIndex(i=>i.id == item.id);
   this.routeItems.forEach
  
   console.log(p)
   let newRouteItems = this.routeItems.filter(it=>it.id!=item.id)
   this.routeService.removerRouteItemData(this.id,newRouteItems)
   this.routeService.getAllRouteData(this.mainRouteId).subscribe(route=>{
    let p = route.routeItems.findIndex(i=>i.id == item.id);
    let o = route.routeItems[p];
    o.routeCreated = false;
    this.routeService.updaeRouteData(this.mainRouteId,p,o);
   })
   let newPacks = this.packages.filter(it=>it.jobId!=item.id);
  
   this.routeService.removerPackagesItemData(this.id,newPacks)

   this.importedRouteItemsSelected = [];
   this.selectedMarker = false;
  }

  getWearHouse(value){
    
    let w = this.wearHouses.filter(e=>e.id == value);
    this.selectWearHouse(w[0].coordinates);
    this.wearHouse = w[0];
    console.log(this.wearHouse)
  }

  selectWearHouse(point:LatLng){
    this.warehousP =new LatLngDis(point.latitude,point.longitude,0) ;
    this.uniqueNodes = [];
    this.uniqueNodes.push(this.warehousP);
    console.log( this.warehousP);
  }

  optmize(){
   

    console.log(this.routeItems)
    this.routeItems.forEach(item=>{
      console.log(item)

      this.uniqueNodes.push(new LatLngDis(item.latitude,item.longtude,0));
    })

    var distance = function(lat1, lon1, lat2, lon2) {
      var radlat1 = Math.PI * lat1 / 180;
      var radlat2 = Math.PI * lat2 / 180;
      var theta = lon1 - lon2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344;
    
      return dist;
    };
    var origLat = this.uniqueNodes[0].latitude,
    origLong = this.uniqueNodes[0].longitude;
    
    
    this.uniqueNodes.sort(function(a, b) {
     
      return distance(origLat, origLong, a[1], a[2]) - distance(origLat, origLong, b[1], b[2]);
    });
   
    
     let orig = new LatLng();
    orig.latitude =  this.uniqueNodes[1].latitude;
     orig.longitude = this.uniqueNodes[1].longitude;
     let dest = new LatLng();
     let pos = this.uniqueNodes.length - 1;
    dest.latitude =  this.uniqueNodes[pos].latitude;
     dest.longitude = this.uniqueNodes[pos].longitude;

     console.log(this.uniqueNodes)

    this.getCorrdinates(orig,dest).finally(()=>{
      console.log(this.routeDate+","+this.driver.phone+","+this.routeName+","+this.wearHouse.name);
     
        
     console.log(this.order)

     

  })
 

console.log(this.uniqueNodes);
  }

  
  async getCorrdinates(orig:LatLng,dest:LatLng){
    var origin = new google.maps.LatLng(orig.latitude, orig.longitude);
    var des = new google.maps.LatLng(dest.latitude, dest.longitude);
        var wp = "";
        const waypts: google.maps.DirectionsWaypoint[] = []
        if(this.routeItems.length>1){
          var i = 0
          for ( i = 0; i < this.routeItems.length; i++) {
            let item = this.routeItems[i];
            if( i!=this.routeItems.length-1){
             var haight = new google.maps.LatLng(item.latitude, item.longtude)
              waypts.push({
                location: haight,
                stopover: true,
              }); 
            
         
        }
      }
        
    }  
        

       const m = await this.getDirections(origin,des,waypts,orig,dest)
      // this.routeService.updateRouteData("m100",m);
      console.log(m)
   
  }

  getDirections(origin,des,waypts,orig,dest):Promise<MapRoute>{
    return new Promise(resolve=>{
    var directionsService = new google.maps.DirectionsService();

    var request = {
      origin:origin,
      destination:des,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
    };
    let routeE:any = [];
    let distancesE:DistanceM[] = [] ;
    var bbg:Promise<google.maps.DirectionsResult> =   new Promise(resolve=>{ directionsService.route(request, function(response, status) {
    if (status == 'OK') {
     // var routeData = response.routes[0].overview_path;
    //  routeData.forEach(item=>{
      //   item.toUrlValue()
      //   var p ={lat:""+item.lat(),lng:""+item.lng()}
     //    routeE.push(p)
         
         
    //   });
//
       
       
       
    }
   console.log(response)

   resolve(response);
  })

  
 
   
  });

  bbg.then(res=>{
    const decodePolyline = require('decode-google-map-polyline');
        var polyline = res.routes[0].overview_polyline;
       console.log(decodePolyline(polyline));
       routeE = decodePolyline(polyline);

       

       console.log(routeE)

       res.routes[0].legs.forEach(leg=>{
        let dist = new DistanceM()
        dist.text = leg.distance.text;
        dist.value = leg.distance.value;
         distancesE.push( dist)
       })
       
        this.routeE = routeE;
        this.distancesE = distancesE;
        let newRouteItems =[];

        let waypos = res.routes[0].waypoint_order;
        var e =0;
        waypos.forEach(ite=>{
         let iem = this.routeItems[ite];
         iem.routeOrder = e;
         iem.routeId = ""+this.id;
         newRouteItems.push(this.routeItems[ite]);
         e++
        })

        let latItem = this.routeItems[this.routeItems.length-1];
        latItem.routeOrder = this.routeItems.length-1;

        newRouteItems.push(latItem);

      console.log(newRouteItems)
      
  this.order.routeItems == newRouteItems;
  this.order.route = this.routeE;
  this.order.distances = this.distancesE;
  this.order.date = this.routeDate;
  this.order.driverId = this.driver.phone;
  this.order.wearHouseId = this.wearHouse.id;

  this.order.startPoint = orig;
  this.order.endPoint = dest;
  this.routeService.updateRouteData(this.order.id,this.order);
  this.updateRoute(this.order.id,this.routeE,newRouteItems)
 // setTimeout(()=>{  }, 2000)
   console.log(res)
  })


  
 
 resolve(this.order)

})
  }
  updateRoute(id,routeE: any,routeItems) {

    console.log(routeE)
    if(routeE.length>0){
       this.routeService.updateRoutePolyData(id,routeE)
       this.routeService.updateRouteItems(id,routeItems)
       console.log("send data")
       this.router.navigate(['/routes/view-route'],{ queryParams: {id: this.order.id}});
    }else{
      console.log("count")
      setTimeout(()=>{   this.updateRoute(id,routeE,routeItems) }, 1000)
    }
  
  }

  getObject(str:string):Promise<MapRoute>{
    return new Promise(resolve=>{
      this.http.get<any>(str).subscribe(data => {
        this.mapdata = data;
        console.log(this.mapdata);
        // var lat = this.ConvertString(this.mapdata.results[0].geometry.location.lat);
        // var lon = this.ConvertString(this.mapdata.results[0].geometry.location.lng);
       // console.log(lat+ " , "+lon);
        
      console.log(this.mapdata)
        resolve(this.mapRoute)
       
    });

    })
  }

   calculateDistance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var radlon1 = Math.PI * lon1/180
    var radlon2 = Math.PI * lon2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
  }

  onKey(value:string) {
    if(value.length==0){
      this.driversF = this.drivers
    } 
    this.driversF = this.search(value);
    }
    search(value: string) { 
      let filter = value.toLowerCase();
      return this.drivers.filter(option => option.name.toLowerCase().startsWith(filter));
    }
  
}


