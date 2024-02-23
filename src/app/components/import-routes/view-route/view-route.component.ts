import { AgmMap } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { MapsAPILoader,MouseEvent } from '@agm/core';
import { ItemImportTemp } from 'src/app/shared/interfaces/item-import_temp';
import { RouteItemImport } from 'src/app/shared/interfaces/route-item-import';
import { RouteService } from 'src/app/shared/service/route.service';
import { RouteItem } from 'src/app/shared/interfaces/rout-item';
import { LatLng } from 'src/app/shared/interfaces/lat-lng';
import { Package } from 'src/app/shared/interfaces/package';


declare const google: any;
declare const $: any;
@Component({
  selector: 'app-view-route',
  templateUrl: './view-route.component.html',
  styleUrls: ['./view-route.component.scss']
})
export class ViewRouteComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
  title: string = 'AGM project';
  latitude: number=30.033333;
  longitude: number=31.233334;
  markers:any = [];
  e = 0;
  @ViewChildren(AgmMap) agmMap: any;
  options: any = {
    lat: this.latitude,
    lng: this.longitude,
    zoom: 12,
    fillColor: '#DC143C',
    draggable: true,
    editable: true,
    visible: true
  };
  
  private geoCoder;
  
  public records: RouteItem[] = [];
  public packages: Package[] = [];
  public isSelectedTemp = false
  public temps:ItemImportTemp[]=[];
  public selectedTemp:ItemImportTemp;
  public csvArr:RouteItemImport[] = [];
  selectedPoints:RouteItem[] = [];
  selectedPacks:Package[] = [];
  mapdata:any;
  routeName:string
  companyId:string
  id:any;
  routeTempId="";
  routeId = "";
  polygon: any;
  dbIcon={
    url:'./assets/images/icons/db.png',
    scaledSize: {
        width: 40,
        height: 40
    },
    labelOrigin: { x: 16, y: 48 }
  }
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
  constructor(private routeService:RouteService,private http:HttpClient,private router:Router,private toastr:ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams["id"];
    console.log(this.id)
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      language : {
        "emptyTable": "ليست هناك بيانات متاحة في الجدول",
        "loadingRecords": "جارٍ التحميل...",
        "lengthMenu": " _MENU_ ",
        "zeroRecords": "لم يعثر على أية سجلات",
        "info": "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
        "infoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
        "infoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
        "search": "بحث:",
        "paginate": {
            "first": "الأول",
            "previous": "السابق",
            "next": "التالي",
            "last": "الأخير"
        },
        "aria": {
            "sortAscending": ": تفعيل لترتيب العمود تصاعدياً",
            "sortDescending": ": تفعيل لترتيب العمود تنازلياً"
        },
        "processing": "جارٍ المعالجة..."
    },
      dom: "lfrtip",
    };

  this.viewData()  
  }

  ngAfterViewInit(): void{
    
  }
  
  viewData() {
    this.routeService.getAllRouteData(this.id).subscribe(routeData=>{
      console.log(routeData)
       
      this.routeTempId = routeData.id;
      this.routeName = routeData.name;
      this.records = routeData.routeItems.filter(item=>item.routeCreated == false);
      this.packages = routeData.packages;
      this.companyId = routeData.companyId
      this.options.lat = this.records[0].latitude;
      this.options.lng = this.records[0].longtude;
      this.records.forEach(marker=>{
        if(!marker.routeCreated){
           this.markers.push({
          lat: marker.latitude,
          lng: marker.longtude,
          title: marker.id,
          story:'',
          path: this.dbIcon,
          visible:true
        })
        }
       
      })
      /*
      if (this.isDtInitialized && this.dtElement) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }else{
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
      */
      console.log(this.markers)
    
    })
    
    
  
   // this.dtTrigger.next();

  }

  onMapReady(map){
    this.geoCoder = new google.maps.Geocoder;
    this.agmMap = map;
  }
  mapClicked($event: MouseEvent) {
 
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    //this.getMAddress(this.latitude, this.longitude);
   
    
    
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
    this.addPolygonChangeEvent(this.polygon);
    google.maps.event.addListener(this.polygon, 'coordinates_changed',  ()=> {
     console.log(this.getPolygonCoordinates(this.polygon)) ;
     
    });

    this.getJopsInsidePolygon()


  
  }
  getJopsInsidePolygon() {
    this.selectedPacks = [];
    this.selectedPoints = [];
    console.log(this.polygon)
   this.markers.forEach(item=>{
     if(item.visible){
      let latlng = new LatLng();
     latlng.latitude = item.lat;
     latlng.longitude = item.lng;
     let check = this.isWithinPoly(latlng)
     console.log(check)
     if(check){
       let r = this.getRouteItemById(item.title);
      this.selectedPoints.push(r)
     } 
     }
     
   })

   if(this.selectedPoints.length!=0){
      $("#create_route").modal("show"); 
   }else{
     this.onCancel();
   }
 
  }

  extractPolygonPoints(data) {
    console.log(data)
}

getRouteItemById(id){
  let v = this.records.filter(v=>v.id == id);
  return v[0];
}

isWithinPoly(latlng:LatLng){
  var isWithinPolygon = google.maps.geometry.poly.containsLocation(new google.maps.LatLng(latlng.latitude, latlng.longitude), this.polygon);
  return isWithinPolygon;
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

 async onCreate(){
  
   this.selectedPoints.forEach(async (point,i)=>{
      const p = await this.getPackById(point.id);
     
      p.forEach(i=>{
        i.driverRouteId=this.routeId
        i.pos = this.e;
        this.selectedPacks.push(i);
        this.e++
      });
       
   })

   
   

 }

 getPackById(id):Promise<Package[]>{
  return new Promise(resolve=>{
   let p = this.packages.filter((item,i)=>item.jobId == id);
   console.log(p)
  resolve(p) ;
 })
  
 }

 setRouteByIdSelected(id,reco:RouteItem[]):Promise<RouteItem>{
  return new Promise(resolve=>{
   let p = reco.findIndex(item=>item.id == id);
   let o =reco[p];
   o.routeCreated = true;
   console.log(o)
   this.routeService.updaeRouteData(this.routeTempId,p,o);
  resolve(reco[p]) ;
 })
  
 }

 AddData() {
  this.routeId = this.createId();
  this.e = 0;
  this.onCreate().finally(()=>{
    console.log(this.selectedPacks)
    const routData = {
      id:this.routeId,
      driverId:"",
      mainRouteId:this.routeTempId,
      companyId:this.companyId,
      name:this.routeName,
      date:Date.now(),
      routeItems:this.selectedPoints,
      packages:this.selectedPacks
    }
    this.routeService.addRoute(routData);
    this.selectedPoints.forEach(item=>{
      this.markers.forEach((m,i)=>{
        if(m.title == item.id){
        this.markers[i].visible = false;
        }
      })
    })

    this.updateRecordes()

    
    
    
  })
 
 
}
  updateRecordes() {
    const reco = this.records;
    this.updateRouteData(reco).finally(()=>{
      console.log(reco)
      this.router.navigate(['/import/view-driver-route'],{ queryParams: {id: this.routeId}});
      this.onCancel();
    })
  }

async updateRouteData(reco:RouteItem[]){
  this.selectedPoints.forEach(async point=>{
    const p= await this.setRouteByIdSelected(point.id,reco) 
    console.log(p);
    
   })
}

 onCancel(){
  this.polygon.setMap(null)
  $("#create_route").modal("hide"); 
 }

 private createId(): string {
  const randomId = Math.floor(Math.random() * new Date().getTime());
  let id = randomId+"";
  if (id === "1") {
    id = randomId+"";
  }
  return id;
}


}
