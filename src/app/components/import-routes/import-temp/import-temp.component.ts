import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemImportTemp } from 'src/app/shared/interfaces/item-import_temp';
import { RouteService } from 'src/app/shared/service/route.service';

@Component({
  selector: 'app-import-temp',
  templateUrl: './import-temp.component.html',
  styleUrls: ['./import-temp.component.scss']
})
export class ImportTempComponent implements OnInit {
  iRoute:ItemImportTemp = new ItemImportTemp();
  id:any;
  public mode: 'edit' | 'add';
  public tempForm: FormGroup;
  public headers=[];

  constructor(private formBuilder: FormBuilder,private router:Router,private route:ActivatedRoute,private toastr:ToastrService
    ,private routeService:RouteService) {
    this.createAccountForm();
   }
   public records: any[] = [];
   @ViewChild('csvReader') csvReader: any;
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
         this.headers = this.getHeaderArray(csvRecordsArray);
         console.log(this.headers);
         this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, this.headers.length);
       };
       reader.onerror = function () {
         console.log('error is occured while reading file!');
       };
     } else {
       alert("Please import valid .csv file.");
       this.fileReset();
     }
   }
   getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
     let csvArr = [];
     for (let i = 1; i < csvRecordsArray.length; i++) {
       let curruntRecord = (<string>csvRecordsArray[i]).split(',');
       /*
       if (curruntRecord.length == headerLength) {
         let csvRecord: CSVRecord = new CSVRecord();
         csvRecord.id = curruntRecord[0].trim();
         csvRecord.firstName = curruntRecord[1].trim();
         csvRecord.lastName = curruntRecord[2].trim();
         csvRecord.age = curruntRecord[3].trim();
         csvRecord.position = curruntRecord[4].trim();
         csvRecord.mobile = curruntRecord[5].trim();
         csvArr.push(csvRecord);
       }
       */
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
 
  createAccountForm() {
    this.tempForm = this.formBuilder.group({
      name: [this.iRoute && this.iRoute.name,Validators.required],
      field1: [this.iRoute && this.iRoute.field1||-1],
      field2: [this.iRoute && this.iRoute.field2,Validators.required],
      field3: [this.iRoute && this.iRoute.field3||-1],
      field4: [this.iRoute && this.iRoute.field4,Validators.required],
      field5: [this.iRoute && this.iRoute.field5||-1],
      field6: [this.iRoute && this.iRoute.field6||-1],
      field7: [this.iRoute && this.iRoute.field7,Validators.required],
      field8: [this.iRoute && this.iRoute.field8,Validators.required],
      field9: [this.iRoute && this.iRoute.field9,Validators.required],
      field10: [this.iRoute && this.iRoute.field10||-1],
      field11: [this.iRoute && this.iRoute.field11||-1],
      field12: [this.iRoute && this.iRoute.field12||-1],
      field13: [this.iRoute && this.iRoute.field13||-1]
    })
  }

 

  ngOnInit() {
    this.id = this.route.snapshot.queryParams["id"];
    if(this.id){
      this.mode='edit';
      this.routeService.getRouteTemp(this.id).subscribe(temp=>{
        this.iRoute = temp;
        console.log(this.iRoute)
        this.createAccountForm();
      })
    }else{
      this.mode='add';
    }
  }

  onAddTemp(){
    if (!this.tempForm.valid) {
      this.toastr.error("", "Please enter mandatory field!");
    } else {
      this.iRoute.name = this.tempForm.value.name;
      this.iRoute.field1 = +this.tempForm.value.field1;
      this.iRoute.field2 = +this.tempForm.value.field2;
      this.iRoute.field3 = +this.tempForm.value.field3;
      this.iRoute.field4 = +this.tempForm.value.field4;
      this.iRoute.field5 = +this.tempForm.value.field5;
      this.iRoute.field6 = +this.tempForm.value.field6;
      this.iRoute.field7 = +this.tempForm.value.field7;
      this.iRoute.field8 = +this.tempForm.value.field8;
      this.iRoute.field9 = +this.tempForm.value.field9;
      this.iRoute.field10 = +this.tempForm.value.field10;
      this.iRoute.field11 = +this.tempForm.value.field11;
      this.iRoute.field12 = +this.tempForm.value.field12;
      this.iRoute.field13 = +this.tempForm.value.field13;
      this.iRoute.id = this.createId();
      console.log(this.iRoute)
      this.routeService.updateRouteTemp(this.iRoute) 
      this.toastr.success("Temp Created ");
      this.router.navigate(['/import/temp-list'])
    }
  }

  private createId(): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = this.id || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }


}
