import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ItemImportTemp } from 'src/app/shared/interfaces/item-import_temp';
import { RouteItemImport } from 'src/app/shared/interfaces/route-item-import';
import { RouteService } from 'src/app/shared/service/route.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MapRoute } from 'src/app/shared/interfaces/mape-route';
import { RouteItem } from 'src/app/shared/interfaces/rout-item';
import { Package } from 'src/app/shared/interfaces/package';
import { Company } from 'src/app/shared/interfaces/company';
const incr = 1;
@Component({
  selector: 'app-import-route',
  templateUrl: './import-route.component.html',
  styleUrls: ['./import-route.component.scss']
})
export class ImportRouteComponent implements OnInit {
 
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
  public records: RouteItemImport[] = [];
  public packs: Package[] = [];
  public completeRecords: RouteItem[] = [];
  completeRecordAddress : RouteItem[] = [];
  @ViewChild('csvReader') csvReader: any;
  public isSelectedTemp = false
  public temps:ItemImportTemp[]=[];
  public selectedTemp:ItemImportTemp;
  public csvArr:RouteItemImport[] = [];
  mapdata:any;
  routeName:string;
  progress = 0;
  uploading = false;
  ir :any ;
  i = 1;
  routeId ="";
  companies:Company[]=[];
  selectedCompany:any;

  constructor(private routeService:RouteService,private http:HttpClient,private router:Router,private toastr:ToastrService){
    this.routeService.getAllTemps().subscribe(res=>{
      
      this.temps = res;
      
    });

    this.routeService.getAllCompanies().subscribe(res=>{
      this.companies = res;
    })

    this.http.get<any>('https://api.mapbox.com/geocoding/v5/mapbox.places/13%20DON%20HEAD%20VILLAGE%20BLV,RICHMOND%20HILL,ON%20L4C7N3.json?access_token=pk.eyJ1Ijoic2hvcHB5ODMiLCJhIjoiY2t5aXRwdTNrMmZzcjJ2cGJxb2NzY3VnNCJ9.0JG-laH-m_6zPT-aTF-KFQ').subscribe(data => {
            this.mapdata = data;

            console.log(this.mapdata.features[0].center[0]+" , "+this.mapdata.features[0].center[1])
        })
  }
  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        console.log(headersRow);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        console.log( this.records)
        this.viewData()
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }
  viewData() {
    if (this.isDtInitialized) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    }else{
      this.isDtInitialized = true
      this.dtTrigger.next();
    }
    
  
   // this.dtTrigger.next();

  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    let re = /\"/gi;
   
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let cv = (<string>csvRecordsArray[i])
    
      let curruntRecord = (<string>csvRecordsArray[i]).split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
     
      if (curruntRecord.length == headerLength) {
        let csvRecord: RouteItemImport = new RouteItemImport();
        csvRecord.item_id = curruntRecord[this.selectedTemp.field1].trim();
        csvRecord.first_name = curruntRecord[this.selectedTemp.field2].trim();
        csvRecord.last_name= curruntRecord[this.selectedTemp.field3].trim();
        csvRecord.address = curruntRecord[this.selectedTemp.field4].trim().replace(re,"");
        csvRecord.postal_code = curruntRecord[this.selectedTemp.field5].trim();
        csvRecord.appt_no = curruntRecord[this.selectedTemp.field6].trim();
        csvRecord.phone = curruntRecord[this.selectedTemp.field7].trim();
        csvRecord.type = curruntRecord[this.selectedTemp.field8].trim();
        csvRecord.discription = curruntRecord[this.selectedTemp.field9].trim();
        csvRecord.items_count = curruntRecord[this.selectedTemp.field10].trim();
        csvRecord.collection_amount = curruntRecord[this.selectedTemp.field11].trim();
        csvRecord.delivery_date = curruntRecord[this.selectedTemp.field12].trim();
        csvRecord.barcode = curruntRecord[this.selectedTemp.field13].trim();
        csvArr.push(csvRecord);
      }
     
    }
    return csvArr;
  }
  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }
  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }


  ngOnInit(): void {
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

  }

  tempSelected(){
    this.isSelectedTemp = true;
  }

  
  manageProgress(ind:number) {
    if(this.progress === 100) {
      this.progress = 100;
    } else {
      this.progress = this.progress + ind;
    }
  }


  onAddData(){

    this.uploading = true
    this.routeId = this.createId();
    var i = 0;
    for (const item of this.records) {
      var isPresent = this.completeRecords.some(function(el){ return el.customerAddress === item.address});
      console.log(isPresent)
      if(isPresent){
       var itm = this.getIdByFilter(item.address);
       let index = this.completeRecords.findIndex(x => x.id === itm.id); 
       let jcount = itm.jops+1;

       var pack = new Package();
        pack.jobId = itm.id;
        pack.collectionAmount = +item.collection_amount;
        pack.discription = item.discription;
        pack.packageId = itm.id+"-"+jcount;
        pack.routeId = this.routeId;
        pack.barcode = item.barcode;
        this.packs.push(pack);
        this.completeRecords[index].jops = this.completeRecords[index].jops+1;
        console.log(pack);
      }else{
        let jopId = this.createId();
        var jop = new RouteItem();
        jop.id = jopId;
        jop.customerName = item.first_name+" "+item.last_name;
        jop.apptNo = item.appt_no;
        jop.customerAddress = item.address;
        jop.customerPhone = item.phone;
        jop.date = item.delivery_date;
        jop.jops = 1;
        jop.routeId = this.routeId;
        jop.zipCode = item.postal_code;

        this.completeRecords.push(jop);

        var pack = new Package();
        pack.jobId = jopId;
        pack.collectionAmount = +item.collection_amount;
        pack.discription = item.discription;
        pack.packageId = jopId+"-"+1;
        pack.routeId = this.routeId;
        pack.barcode = item.barcode;
        this.packs.push(pack);
        console.log(pack);
        console.log(jop);
      }
      
      i++
      
      if(i>= (this.records.length)){
       this.AddData()
      }
       
    }
    

  }

  async getCorrdinates(){
    for (const item of this.completeRecords) {

      var address = item.customerAddress
      let str  = encodeURIComponent(address);
      var link = 'https://maps.googleapis.com/maps/api/geocode/json?address='+str+'&key=AIzaSyABicX5EtZYK6oAmjbKp0FnaqgC3C1gjto';

      const cmItem = await this.getObject(link,item)
      this.completeRecordAddress.push(cmItem)
      var value = Math.floor(this.i/this.completeRecords.length);
      this.manageProgress(value)
   }
  }
  getIdByFilter(address){
     var b = this.completeRecords.filter(x => x.customerAddress === address);
    return b[0];
  }
  getObject(str:string,item:RouteItem):Promise<RouteItem>{
    return new Promise(resolve=>{
      this.http.get<any>(str).subscribe(data => {
        this.mapdata = data;
        console.log(this.mapdata);
         var lat = this.ConvertString(this.mapdata.results[0].geometry.location.lat);
         var lon = this.ConvertString(this.mapdata.results[0].geometry.location.lng);
        console.log(lat+ " , "+lon);
        item.latitude = lat;
        item.longtude = lon;
       this.i++
      console.log(item.latitude+" , "+item.longtude)
      console.log(this.mapdata)
        resolve(item)
       
    });

    })
  }

  AddData() {

    this.getCorrdinates().finally(()=>{
      const routData = {
        id:this.routeId,
        name:this.routeName,
        companyId:this.selectedCompany,
        routeItems:this.completeRecordAddress,
        packages:this.packs
      }

      const routCompany = {
        id:this.routeId,
        companyId:this.selectedCompany,
        packages:this.records
      }
      this.routeService.addNewRoute(routData);
      this.routeService.addCompanyFullRoute(routCompany);
      this.toastr.success("Temp Created ");
      //this.router.navigate(['/import/routes-list'])
      this.router.navigate(['/import/view-route'],{ queryParams: {id: this.routeId}});
    })
   
   
  }
  ConvertString(value){
    return parseFloat(value)
    }

    companySelected(){
      console.log(this.selectedCompany)
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
