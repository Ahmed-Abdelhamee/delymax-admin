import { Component, OnInit, OnDestroy, ViewChild, TemplateRef, Input, AfterViewInit,
  Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgmMap } from '@agm/core';
import { AuthService } from '../service/auth.service';
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
export interface ILatLng {
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html'
})
export class LocationModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("locationModal", { static: false }) LocationModal: TemplateRef<any>;
  @ViewChild(AgmMap) agmMap: any;
  public closeResult: string;
  public modalOpen: boolean = false;
  // Washington, DC, USA
  @Input() origin: ILatLng ;
  // New York City, NY, USA
  @Input() destination: ILatLng ;
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

  constructor(private authService: AuthService,@Inject(PLATFORM_ID) private platformId: Object,
  private modalService: NgbModal){

  }
  
  ngOnInit(): void {
    console.log(this.destination)
   console.log(this.origin)
    this.distance = this.getDistanceFromLatLonInKm(this.origin.latitude,this.origin.longitude,this.destination.latitude,this.destination.longitude)
   
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
  
  
  

  ngAfterViewInit(): void {
  }

  async openModal(status) {
    
    if(status) {
      this.modalOpen = true;
      if (isPlatformBrowser(this.platformId)) { // For SSR 
        this.modalService.open(this.LocationModal, { 
          size: 'lg',
          ariaLabelledBy: 'locationModal',
          centered: true,
          windowClass: 'theme-modal cart-modal locationModal'
        }).result.then((result) => {
          `Result ${result}`
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
    }
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
 