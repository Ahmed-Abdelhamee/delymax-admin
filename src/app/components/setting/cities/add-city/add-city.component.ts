import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { State } from 'src/app/shared/interfaces/state';
import { Town } from 'src/app/shared/interfaces/town';
import { DeliveryService } from 'src/app/shared/service/delivery.service';
import {Location} from '@angular/common';
import { AgmMap } from '@agm/core';
import { Day } from 'src/app/shared/interfaces/day';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Hour, ZoneUser } from 'src/app/shared/interfaces/hour';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DeliveryHoursComponent } from '../delivery-hours/delivery-hours.component';
import { DeliveryBoy } from 'src/app/shared/interfaces/delivery-boy';
import { ProductService } from 'src/app/shared/service/product.service';
import { Shop } from 'src/app/shared/interfaces/shop';
declare const google: any;

export class DomainState extends State {

}
@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {

  private geoCoder;
  stateForm: FormGroup;
  hours0:Hour[]=[];
  hours1:Hour[]=[];
  hours2:Hour[]=[];
  hours3:Hour[]=[];
  hours4:Hour[]=[];
  hours5:Hour[]=[];
  hours6:Hour[]=[];
  dBoyes:DeliveryBoy[];
  id:any;
  lang:any;
  towns:Town[]=[];
  public allLang = true;
  public mode: 'edit' | 'add';
  state:DomainState;
  private formSubscription: Subscription;
  private stateSubscription: Subscription;
  @ViewChild(AgmMap) agmMap: any;
  polygon: any;
  Zone:any = [];
  pharmacy:string = "";
  scdays=[{name:"Friday",value:0},{name:"Saturday",value:1},{name:"Sunday",value:2},{name:"Monday",value:3},{name:"Tuesday",value:4},{name:"Wednesday",value:5},{name:"Thursday",value:6}]
  schours=[{name:"01:00 AM",value:1},{name:"02:00 AM",value:2},{name:"03:00 AM",value:3},{name:"04:00 AM",value:4},{name:"05:00 AM",value:5},{name:"06:00 AM",value:6},
  {name:"07:00 AM",value:7},{name:"08:00 AM",value:8},{name:"09:00 AM",value:9},{name:"10:00 AM",value:10},{name:"11:00 AM",value:11},{name:"12:00 PM",value:12},
  {name:"01:00 PM",value:13},{name:"02:00 PM",value:14},{name:"03:00 PM",value:15},{name:"04:00 PM",value:16},{name:"05:00 PM",value:17},{name:"06:00 PM",value:18},
  {name:"07:00 PM",value:19},{name:"08:00 AM",value:20},{name:"09:00 PM",value:21},{name:"10:00 PM",value:22},{name:"11:00 PM",value:23},{name:"12:00 AM",value:0}]
  public days:Day[] = [];
  public triangleCoords:any;
  public managerOptions = {
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

  phas:Shop[]=[];
  constructor(private _location: Location,private deliveryService:DeliveryService,private _domSanitizer: DomSanitizer,
    private fb: FormBuilder,private messegeService : ToastrService,private route:ActivatedRoute,private router:Router
    ,private _modalService: NzModalService,private productService:ProductService) {
      this.deliveryService.getTowns().subscribe(res => {
        this.towns = res;
      });

      
    
    this.initForm();
   }

  private initForm() {
      this.stateForm = this.fb.group({
        name: [this.state && this.state.name,
          Validators.required]
          ,
          name_En: [this.state && this.state.name_En,
            Validators.required]
            ,
            town: [this.state && this.state.town,
              Validators.required]
              ,
              deliveryCharge: [this.state && this.state.deliveryCharge, [
                Validators.required,
                Validators.min(0)
              ]],
        id:[ {
            value: this.state && this.state.id,
            disabled: true
          },
          [Validators.required]
         ]
      });
      this.onFormChanges();
    
    }


  ngOnInit(): void {
    this.geoCoder = new google.maps.Geocoder;
    this.id = this.route.snapshot.queryParams["id"];
    this.lang = this.route.snapshot.queryParams["lang"];
    
    if(this.id){
      this.mode='edit'
      this.getState(this.id);
      this.initForm();
     
    }else{
      this.mode='add'
      this.constructState();
      this.initForm();
      this.deliveryService.getDaysRef().subscribe(res => {
        this.days = res;
        console.log(this.days);
      });
    }
    if(this.lang){
      console.log(this.lang)
    }
  }
  getPha(id: any) {
   this.productService.getPha(id).subscribe(res=>{
      this.phas = res;
   })
  }
  getState(id: any) {

      this.stateSubscription = this.deliveryService.getState(this.id).subscribe(state=>{  
        this.triangleCoords = state.map;
        if(this.triangleCoords)
        this.addPolygon();
        console.log(state.map);
        console.log(this.days)
        this.syncState(state);
        
        this.initForm();
        
      })
    
    
  }
 
 
  constructState() {
    const state = new State();
    this.syncState(state);
    this.initForm();
  }
  syncState(state) {
    const id = this.createId(state);
    const map = this.triangleCoords;
    this.state = {
      ...state,
      id,
      map
    };
  }

  

  private onFormChanges() {
    this.formSubscription = this.stateForm.valueChanges.subscribe(
      (formFieldValues) => {
        const state = { ...this.state, ...formFieldValues };
        this.syncState(state);
      }
    );
  }

  handleAddressChange(address: any) {
    this.latitude = address.geometry.location.lat()
    this.longitude = address.geometry.location.lng()
    this.options.lat = this.latitude
    this.options.lng = this.longitude
  }

  private createId(state: State): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = state.id || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }

  constructMockState() {
    new State();
  }
openSnackBar(message: string) {
      this.messegeService.info("message");
    }
  

  onAddState() {
    this.syncState({ ...this.state, ...this.stateForm.value });
    const stateToSubmit = this.state;
    if (this.mode === 'add') {
      this.addState(stateToSubmit);
    } else if (this.mode === 'edit') {
      console.log('update')
      this.updateState(stateToSubmit);
    } else {

      return;
    }

  }
  updateState(state) {
    this.stateSubscription.unsubscribe();

      this.deliveryService.updateState(state ).subscribe(
        (response: State) => {
          this.router.navigate(['/settings/states']);
        },
        (error) => this.messegeService.error('Could not update your state')
      );
    
      
  }
  addState(state) {
   
   
       this.deliveryService.addState(state).subscribe(town=>{
          this.router.navigate(['/settings/states']);  
       });    
      
       
    }
   

    backClicked() {
      this._location.back();
    }

    onMapReady(map){
      this.agmMap = map;
    }

    addPolygon(){
      this.polygon = new google.maps.Polygon({
        paths: this.triangleCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        editable: true,
        draggable: true,
      });

      //Set polygon to map
      this.polygon.setMap(this.agmMap);
     
      this.Zone = this.getPaths();
      this.addPolygonChangeEvent(this.polygon);
      google.maps.event.addListener(this.polygon, 'coordinates_changed',  ()=> {
       this.triangleCoords = this.getPolygonCoordinates(this.polygon) ;
       
      });

      var cn =  this.polygonCenter(this.triangleCoords);
      this.longitude = cn.lng;
      this.latitude = cn.lat;
      this.options.lat = this.latitude
      this.options.lng = this.longitude
    }

    polygonCreated($event) {

       console.log("created")
     
      this.polygon = $event; 
      if(this.polygon){
        this.polygon.setMap(null)
      }
      this.triangleCoords = this.getPolygonCoordinates(this.polygon);  
      // Construct the polygon.
      this.polygon = new google.maps.Polygon({
        paths: this.triangleCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        editable: true,
        draggable: true,
      });

      //Set polygon to map
      this.polygon.setMap(this.agmMap);
      this.Zone = this.getPaths();
      this.addPolygonChangeEvent(this.polygon);
      google.maps.event.addListener(this.polygon, 'coordinates_changed',  ()=> {
       console.log(this.getPolygonCoordinates(this.polygon)) ;
       
      });
    //  console.debug(this.polygon.getPath())
    }

    extractPolygonPoints(data) {
      console.log(data)
  }

    getPolygonCoordinates(draggablePolygon) {
      const len = draggablePolygon.getPath().getLength();
      const polyArrayLatLng = [];
    
      for (let i = 0; i < len; i++) {
        const vertex = draggablePolygon.getPath().getAt(i);
        const vertexLatLng = { lat: vertex.lat(), lng: vertex.lng() };
        polyArrayLatLng.push(vertexLatLng);
      }
    
      return polyArrayLatLng;
    }
  
    getPaths() {
      
      if (this.polygon) {
        console.log("get path");
        const vertices = this.polygon.getPaths().getArray()[0];
        let paths = [];
        vertices.getArray().forEach(function (xy, i) {
          let latLng = {
            lat: xy.lat(),
            lng: xy.lng()
          };
          paths.push(JSON.stringify(latLng));
        });
        return paths;
      }
      return [];
    }
  
    addPolygonChangeEvent(polygon) {
      var me =  polygon,
        isBeingDragged = false,
        triggerCoordinatesChanged = function () {
          // Broadcast normalized event
          const len = me.getPath().getLength();
          const polyArrayLatLng = [];
    
        for (let i = 0; i < len; i++) {
        const vertex = me.getPath().getAt(i);
        const vertexLatLng = { lat: vertex.lat(), lng: vertex.lng() };
        polyArrayLatLng.push(vertexLatLng);
       }
    
        
          google.maps.event.trigger(me, 'coordinates_changed');
        };
        
      // If  the overlay is being dragged, set_at gets called repeatedly,
      // so either we can debounce that or igore while dragging,
      // ignoring is more efficient
      google.maps.event.addListener(me, 'dragstart', function () {
        isBeingDragged = true;
      });
  
      // If the overlay is dragged
      google.maps.event.addListener(me, 'dragend', function () {
        triggerCoordinatesChanged();
        isBeingDragged = false;
      });
  
      // Or vertices are added to any of the possible paths, or deleted
      var paths = me.getPaths();
      paths.forEach(function (path, i) {
        google.maps.event.addListener(path, "insert_at", function () {
          triggerCoordinatesChanged();
        });
        google.maps.event.addListener(path, "set_at", function () {
          if (!isBeingDragged) {
            triggerCoordinatesChanged();
          }
        });
        google.maps.event.addListener(path, "remove_at", function () {
          triggerCoordinatesChanged();
        });
      });

      
    };
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
    objectValues(obj) {
      return Object.values(obj);
   }

   isHourEnable($event: MatSlideToggleChange,day : Day,hour: Hour) {
    console.log($event.checked+" "+day.postion+" "+hour.hour) ;
     let view = false;
  

     if($event.checked == true){
       view = true
  
     }else{
      view = false
     }
     
  
  this.deliveryService.isHourEnable(this.id,day.postion,hour.id,view);
  }
  isHDEnable($event: MatSlideToggleChange,day : Day,hour: Hour) {
    console.log($event.checked+" "+day.postion+" "+hour.hour) ;
     let view = false;
  

     if($event.checked == true){
       view = true
  
     }else{
      view = false
     }
     
  
  this.deliveryService.isHDEnable(this.id,day.postion,hour.id,view);
  }
  garntiChanged(day : Day,hour: Hour,value) {
    console.log(day.postion+" "+hour.hour+" "+value)
    const v:number = +value
    this.deliveryService.garanti(this.id,day.postion,hour.id,v);
  }
  bounceChanged(day : Day,hour: Hour,value) {
    console.log(day.postion+" "+hour.hour+" "+value)
    const v:number = +value
    this.deliveryService.bounce(this.id,day.postion,hour.id,v);
  }
  limitChanged(day : Day,hour: Hour,value) {
    console.log(day.postion+" "+hour.hour+" "+value)
    const v:number = +value
    this.deliveryService.Limit(this.id,day.postion,hour.id,v);
  }

  openDeliverBoysModal(hour: ZoneUser[],dBoys:DeliveryBoy[]) {
    this._modalService.create({
      nzContent: DeliveryHoursComponent,
      nzWidth: 500,
      nzClosable: false,
      nzFooter: null,
      nzComponentParams: {
        hour: hour,
        dBoys: dBoys
      }
    });
  }
  
  
  }
  

function extractPolygonPoints(data): any {
  var MVCarray = data.getPath().getArray();

      var to_return = MVCarray.map(function(point) {
          return `(${point.lat()},${point.lng()})`;
      });
      // first and last must be same
      return to_return.concat(to_return[0]).join(",");
}

