import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Category } from 'src/app/shared/interfaces/category.model';
import { ProductService } from 'src/app/shared/service/product.service';
import { ShopService } from 'src/app/shared/service/shop.service';

@Component({
  selector: 'app-arabic-shop-product',
  templateUrl: './arabic-shop-product.component.html'
})
export class ArabicShopProductComponent implements OnInit {
  public closeResult: string;
  public productsAR = [];
  categories:Category[]=[];
  public tempId: any;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
  id:any;
  constructor(private modalService: NgbModal,private shopService:ShopService,
    private _domSanitizer: DomSanitizer,private fb: FormBuilder,private router: Router,private route:ActivatedRoute) {
    
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
    console.log(this.id)
    this.getProducts(this.id)
    
  }
  getProducts(id) {
    this.shopService.getCategories(id.toString()).subscribe(res => {
     
      this.categories = res;
    });
    this.shopService.getProducts(id.toString()).subscribe(res => {
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }else{
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
      this.productsAR = res;

      console.log(this.productsAR)
    });
  }

  isNewChanges($event: MatSlideToggleChange,id) {
    console.log($event.checked+" "+id) ;
    this.shopService.isNewAR(id,$event.checked);
}

isFeaturedChanges($event: MatSlideToggleChange,id) {
  console.log($event.checked+" "+id) ;
  this.shopService.isFeatures(id,$event.checked);
}
  

  onDeleteConfirm(product) {
    if (window.confirm('Are you sure you want to delete '+product.title+' ?')) {
    //  category.confirm.resolve(category.newData);
      console.log(product.id)
      this.shopService.removeProduct(product.id);
    } else {
      product.confirm.reject();
    }
  }
 

    onEdit(id){
      this.router.navigate(['/shops/add-shop-product/'],{ queryParams: {id: id,shopId:this.id}});
      }
  
      isProductView($event: MatSlideToggleChange,id) {
        console.log($event.checked+" "+id) ;
         let view = false;
         if($event.checked == true){
           view = true
      
         }else{
          view = false
         }
        this.shopService.isProductView(id,view);
      }

}
