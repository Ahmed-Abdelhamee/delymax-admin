import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Town } from 'src/app/shared/interfaces/town';
import { CheckPermisson } from 'src/app/shared/service/check-permisson';
import { DeliveryService } from 'src/app/shared/service/delivery.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  
  public closeResult: string;
  public states = [];
  public towns:Town[]=[]
  public tempId: any;
  public lang:any;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
  canDelete:boolean=false;
  constructor(private modalService: NgbModal,private deliveryService:DeliveryService,private _domSanitizer: DomSanitizer
    ,private fb: FormBuilder,private router: Router,private permisson:CheckPermisson) {
      this.canDelete = this.permisson.checkPermisson('"update_setting":true');
      this.lang=localStorage.getItem('language');
      this.deliveryService.getTowns().subscribe(res => {
        this.towns = res;
      });
    
  }

  
  goToAddType(){
    this.router.navigate(['/setting/add-state']);
  }
 


  ngOnInit() {
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
   
    this.getStates()  
    
  }
  getStates() {
    this.deliveryService.getStates().subscribe(res => {
      this.states = res;
      if (this.isDtInitialized) {
        
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }else{
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
      
    });
  }

  onDeleteConfirm(state) {
    if (window.confirm('Are you sure you want to delete '+state.name+' ?')) {
      console.log(state.id)
      this.deliveryService.removeState(state.id);
    } else {
      state.confirm.reject();
    }
  }

  
  onEdit(id){
    this.router.navigate(['/settings/edit-state/'],{ queryParams: {id: id}});
    }

}
