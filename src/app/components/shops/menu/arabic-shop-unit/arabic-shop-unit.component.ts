import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ShopService } from 'src/app/shared/service/shop.service';


@Component({
  selector: 'app-arabic-shop-unit',
  templateUrl: './arabic-shop-unit.component.html'
})
export class ArabicShopUnitComponent implements OnInit {


  public closeResult: string;
  public units = []
  public tempId: any;
  id:any;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
  constructor(private modalService: NgbModal,private shopService:ShopService,private _domSanitizer: DomSanitizer,private fb: FormBuilder,
    private router: Router,private route:ActivatedRoute) {
    
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
    this.getunits()  
    
  }
  getunits() {
    this.shopService.getUnits(this.id).subscribe(res => {
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }else{
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
      this.units = res;
    });
  }

  onDeleteConfirm(unit) {
    if (window.confirm('Are you sure you want to delete '+unit.name+' ?')) {
      console.log(unit.id)
      this.shopService.removeUnit(unit.id);
    } else {
      unit.confirm.reject();
    }
  }

  onAdd(){
    this.router.navigate(['/shops/add-shop-unit/'],{ queryParams: {shopId:this.id}});
  }

  onEdit(id){
    this.router.navigate(['/shops/add-shop-unit/'],{ queryParams: {id: id,shopId:this.id}});
    }

  
}
