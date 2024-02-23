import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CouponService } from 'src/app/shared/service/coupon.service';
import { listCouponsDB } from 'src/app/shared/tables/list-coupon';

declare const $: any;
@Component({
  selector: 'app-list-coupon',
  templateUrl: './list-coupon.component.html',
  styleUrls: ['./list-coupon.component.scss']
})
export class ListCouponComponent implements OnInit {

  public coupons = [];
  public closeResult: string;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
  public tempId: any;

  public rows = [];
  public srch = [];
  public statusValue;
  public pipe = new DatePipe("en-US");

  constructor(private modalService: NgbModal,private couponService:CouponService,private _domSanitizer: DomSanitizer,private router:Router,private toastr:ToastrService) {
   
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

    this.getCoupons();
  }
  getCoupons() {
    this.couponService.getCoupons().subscribe(res=>{
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }else{
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
      
      this.coupons = res;
     // this.dtTrigger.next();
      this.rows = this.coupons;
      this.srch = [...this.rows];
      
    })
  }

  onEditCoupon(id){

  }

 
  //Delete Client
  onDelete() {
    console.log(this.tempId)
    
    this.couponService.deleteCoupon(this.tempId.toString()).then(()=>{
      this.couponService.deleteCouponUsers(this.tempId.toString()).then(()=>{
        $("#delete_coupon").modal("hide");
        this.toastr.success("تم حذف الكوبون "); 
      });
    
    });
    
  }



}
