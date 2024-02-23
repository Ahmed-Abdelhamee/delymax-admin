import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ShopService } from 'src/app/shared/service/shop.service';
import { TypeService } from 'src/app/shared/service/type.service';

@Component({
  selector: 'app-arabic-shop-side',
  templateUrl: './arabic-shop-side.component.html'
})
export class ArabicShopSideComponent implements OnInit {

  public closeResult: string;
  public sidesAR = []
  public tempId: any;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  id:any;
  public dtTrigger: Subject<any> = new Subject();
  constructor(private modalService: NgbModal,private shopService:ShopService,private _domSanitizer: DomSanitizer,private fb: FormBuilder,private router: Router
    ,private route:ActivatedRoute) {
    
  }

  
  goToAddType(){
    this.router.navigate(['/products/add-type']);
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
    this.id = this.route.snapshot.queryParams["id"];
    this.getSides()  
    
  }
  getSides() {

    this.shopService.getSides(this.id).subscribe(res => {
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }else{
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
      this.sidesAR = res;
    });
  }
  addShopSide(){
    this.router.navigate(['/shops/add-shop-side/'],{ queryParams: {shopId: this.id}});
  }
  onDeleteConfirm(side) {
    if (window.confirm('Are you sure you want to delete '+side.name+' ?')) {
      console.log(side.id)
      this.shopService.removeSide(side.id);
    } else {
      side.confirm.reject();
    }
  }
  onEdit(id){
    this.router.navigate(['/shops/add-shop-side/'],{ queryParams: {id: id,shopId: this.id}});
    }

  
}
