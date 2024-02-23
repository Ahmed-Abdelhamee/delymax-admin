import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DeliveryBoy } from 'src/app/shared/interfaces/delivery-boy';
import { Shop } from 'src/app/shared/interfaces/shop';
import { User } from 'src/app/shared/interfaces/user';
import { CheckPermisson } from 'src/app/shared/service/check-permisson';
import { OrderService } from 'src/app/shared/service/order.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { RouteService } from 'src/app/shared/service/route.service';
import { orderDB } from "../../../shared/tables/order-list";
declare const $: any;

@Component({
  selector: 'app-import-temp-list',
  templateUrl: './import-temp-list.component.html',
  styleUrls: ['./import-temp-list.component.scss']
})
export class ImportTempListComponent implements OnInit {

  public closeResult: string;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
  public temps = [];
  public editedClient;
  dBoys:DeliveryBoy[];
  public tempId: any;
  public companiesList = [];
  public shops:Shop[]=[]
  public rows = [];
  public srch = [];
  public statusValue;
  public pipe = new DatePipe("en-US");
  canDelete:any=false;
  selectedTown='';
  selectedState:any;
  user:User;
  allZone:boolean = false;
  constructor(private modalService: NgbModal,private orderService:OrderService,private _domSanitizer: DomSanitizer,
    private router:Router,private toastr:ToastrService,private permisson:CheckPermisson,private routeService:RouteService) {
    

    this.getDBS()
   
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

    this.getOrders();
  }
  getOrders() {

      this.routeService.getAllTemps().subscribe(res=>{
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
          });
        }else{
          this.isDtInitialized = true
          this.dtTrigger.next();
        }
        
        this.temps = res;
        console.log(this.temps)
       // this.dtTrigger.next();
        this.rows = this.temps;
        this.srch = [...this.rows];
      });
    
   
  }

  getDBS() {
    this.routeService.getAllDeliveryBoys().subscribe(dBoyes=>{
      this.dBoys = dBoyes;
    }
      )
  }

  onEditClient(event){

  }

  onEdit(event){
    this.router.navigate(['/products/add-product/'+event.data.id]);
    }

    addProduct(){
      this.router.navigate(['/products/add-product']);
    }

     //Delete Client
  onDelete() {
    console.log(this.tempId)
    
    this.orderService.deleteOrder(this.tempId.toString()).then(()=>{
      
        $("#delete_order").modal("hide");
        this.toastr.success("تم حذف الطلب "); 
      
    
    });
    
  }

}
