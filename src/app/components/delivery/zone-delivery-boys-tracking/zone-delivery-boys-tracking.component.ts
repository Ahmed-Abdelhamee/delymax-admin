import { AgmMap } from '@agm/core';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/shared/interfaces/state';
import { Town } from 'src/app/shared/interfaces/town';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { MapsAPILoader,MouseEvent } from '@agm/core';
import { DeliveryService } from 'src/app/shared/service/delivery.service';
import { DeliveryBoy } from 'src/app/shared/interfaces/delivery-boy';
import { Hour, ZoneUser } from 'src/app/shared/interfaces/hour';
declare const google: any;
export interface DBLatLng {
  id:string;
  name:string;
  latitude: number;
  longitude: number;

}
@Component({
  selector: 'app-zone-delivery-boys-tracking',
  templateUrl: './zone-delivery-boys-tracking.component.html',
  styleUrls: ['./zone-delivery-boys-tracking.component.scss']
})
export class ZoneDeliveryBoysTrackingComponent implements OnInit {

  @ViewChild(AgmMap) agmMap: any;
  title: string = 'AGM project';
  latitude: number=30.033333;
  longitude: number=31.233334;
  zoom: number = 17;
  address: string;
  private geoCoder;
  polygon: any;
  Zone:any = [];
  state:State;
  zoneHour:Hour;
  triangleCoords:any;
  zoneUsers:ZoneUser[] = [];
  managerOptions = {
    drawingControl: true,
    drawingControlOptions: {
      drawingModes: ['polygon']
    },
    polygonOptions: {
      draggable: false,
      editable: true
    },
    drawingMode: "polygon"
  };

  options: any = {
    lat: this.latitude,
    lng: this.longitude,
    zoom: 14,
    fillColor: '#DC143C',
    draggable: true,
    editable: true,
    visible: true
  };
  public closeResult: string;
  public modalOpen: boolean = false;
  public products: any[] = [];
  public towns:Town[] = [];
  public states:State[] = [];
  public dBoyes:DeliveryBoy[]=[];
  public locations:string[]=[];
  public dbL:DBLatLng[] = [];
  @Input() stateId = "";
  townId = "";
  lang:any;
  dbIcon={
    url:'./assets/images/icons/db.png',
    scaledSize: {
        width: 40,
        height: 40
    },
    labelOrigin: { x: 16, y: 48 }
  }
  constructor(private deliveryService: DeliveryService,@Inject(PLATFORM_ID) private platformId: Object,
    private modalService: NgbModal,
    private toastr:ToastrService,
    private productService: ProductService,
    private router:Router) {
      this.lang=localStorage.getItem('language');
      
    
  }
  onMapReady(map){
    this.geoCoder = new google.maps.Geocoder;
    this.agmMap = map;
  }
  mapClicked($event: MouseEvent) {
   if(this.isWithinPoly($event,this.polygon)){
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    //this.getMAddress(this.latitude, this.longitude);
   }else{
     this.toastr.error("لا يمكن التوصيل خارج المنطقة المظللة")
   }
    
    
  }
  
  getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((response) => {
            //this.setPosition(response);
            this.latitude = response.coords.latitude;
            this.longitude = response.coords.longitude;
            this.options.lat = response.coords.latitude;
            this.options.lng = response.coords.longitude;
        }, function () {
            alert("Unable to get the GPS location");
        }, { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true });
    };
}


  addPolygon(){
    this.polygon = new google.maps.Polygon({
      paths: this.triangleCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      editable: false,
      draggable: false,
    });

   

   var cn =  this.polygonCenter(this.triangleCoords);
   this.longitude = cn.lng;
   this.latitude = cn.lat;
   this.options.lat = this.latitude
   this.options.lng = this.longitude
    

  }
  showDb(db:DeliveryBoy){
    this.options.lat = db.location.lat;
    this.options.lng = db.location.lng;
    this.options.zoom = 15;
  }
  
  ngOnInit(): void {
    this.getZone();
    let date = new Date();
    var hours = date.getHours();
    let h = this.selectedHour(hours);
    var day = date.getDay();
    let d = this.selectedDay(day);
    console.log(h,d);

        this.deliveryService.getOnlineDeliveryBoysByZone(this.stateId).subscribe(res=>{
          this.dBoyes = [];
          this.dBoyes = res ;
          console.log(this.dBoyes)
        
         })
      
   
  }
  selectedHour(hours: number) {
    if(hours>10){
      return ""+hours
    }else{
      return "0"+hours;
    }
  }
  selectedDay(day:number) {
    if(day==0){
      return '2'
    }else if(day==1){
      return '3'
    }else if(day==2){
      return '4'
    }else if(day==3){
      return '5'
    }else if(day==4){
      return '6'
    }else if(day==5){
      return '0'
    }else if(day==6){
      return '1'
    }
  }

  

  getZone(){
    this.deliveryService.getState(this.stateId).subscribe(state=>{
      this.state = state;
      this.triangleCoords = this.state.map;
      google.maps.Polygon.prototype.my_getBounds=function(){
        var bounds = new google.maps.LatLngBounds()
        this.getPath().forEach(function(element,index){bounds.extend(element)})
        return bounds
    }
      
      this.addPolygon()
    })
  }

 
  
  getMAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 17;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
  
    });
  }

  ngAfterViewInit(): void {
  }

  

  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnDestroy() {
    if(this.modalOpen){
      this.modalService.dismissAll();
    }
  }

  isWithinPoly(event,polgon){
    var isWithinPolygon = google.maps.geometry.poly.containsLocation(new google.maps.LatLng(event.coords.lat, event.coords.lng), polgon);
    return isWithinPolygon;
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
    const highX = latitudes[latitudes.length - 1];
    const lowy = longitudes[0];
    const highy = longitudes[latitudes.length - 1];
  
    // center of the polygon is the starting point plus the midpoint
    const centerX = lowX + ((highX - lowX) / 2);
    const centerY = lowy + ((highy - lowy) / 2);
  
    return ({lat:centerX, lng:centerY});
  }
  }
