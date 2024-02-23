import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AccountDelivery } from 'src/app/shared/interfaces/account-delivery';
import { User } from 'src/app/shared/interfaces/user';
import { DeliveryService } from 'src/app/shared/service/delivery.service';
import { OrderService } from 'src/app/shared/service/order.service';

@Component({
  selector: 'app-delivery-accounts',
  templateUrl: './delivery-accounts.component.html',
  styleUrls: ['./delivery-accounts.component.scss']
})
export class DeliveryAccountsComponent implements OnInit {

  clientId:any;
  public closeResult: string;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
  public orders:AccountDelivery[]=[];
  public editedClient;
  public tempId: any;
  public companiesList = [];
  public dbAcoounts:AccountDelivery[]=[];
  public rows = [];
  public srch = [];
  public statusValue;
  public pipe = new DatePipe("en-US");

  constructor(private modalService: NgbModal,private deliveryService:DeliveryService
    ,private _domSanitizer: DomSanitizer,private router:Router,private route:ActivatedRoute) {
     

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

    this.dtOptions.language.url = "src/assets/i18n/datatable.ar.json";

    this.clientId= this.route.snapshot.queryParams["id"];
    this.getDBoyes();
  }
  getDBoyes() {
    this.deliveryService.getAllDeliveryBoyAccounting(this.clientId).subscribe(res=>{
     
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }else{
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
      
      this.orders = res;
      this.rows = this.orders;
      this.srch = [...this.rows];
    });
   
  }
  onEditClient(event){

  }

  onEdit(event){
    
    }

    addProduct(){
    
    }

}

