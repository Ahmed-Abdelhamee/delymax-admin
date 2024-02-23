import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { CheckPermisson } from 'src/app/shared/service/check-permisson';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.scss']
})
export class ShopsListComponent implements OnInit {

  public closeResult: string;
  public shops = []
  public tempId: any;
  selectedTown='';
  selectedState:any;
  user:User;
  allZone:boolean = false;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
  canDelete:any=false;

  constructor(private modalService: NgbModal,private productService:ProductService,
    private _domSanitizer: DomSanitizer,private fb: FormBuilder,private router: Router,private permisson:CheckPermisson) {
      this.canDelete = this.permisson.checkPermisson('"delete_shop":true')
      const user = localStorage.getItem('adminUser');
      if(user){
      console.log(user) 
      let jsonObj: any = JSON.parse(user); // string to generic object first
      this.user = <User>jsonObj;
      console.log(this.user)
      this.allZone = this.user.allZone;

      if(!this.allZone){
    
        this.selectedTown = this.user.town;
        this.selectedState = this.user.state;
       
      }
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
   
    this.getShops()
    
  }
  getShops() {
    if(this.allZone){
      this.productService.getShops.subscribe(res => {
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
          });
        }else{
          this.isDtInitialized = true
          this.dtTrigger.next();
        }
        this.shops = res;
      });
    }else{
      this.productService.getZoneshops(this.selectedState).subscribe(res => {
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
          });
        }else{
          this.isDtInitialized = true
          this.dtTrigger.next();
        }
        this.shops = res;
      });
    }
  
  }

  isNewChanges($event: MatSlideToggleChange,id) {
    console.log($event.checked+" "+id) ;
    this.productService.isNewAR(id,$event.checked);
}

isShopView($event: MatSlideToggleChange,id) {
  console.log($event.checked+" "+id) ;
   let view = '';
   if($event.checked == true){
     view = '1'

   }else{
    view = '0'
   }
  this.productService.isShopView(id,view);
}
  

  onDeleteConfirm(shop) {
    if (window.confirm('Are you sure you want to delete '+shop.name+' ?')) {
    //  category.confirm.resolve(category.newData);
      console.log(shop.shopId)
      this.productService.deleteShop(shop.shopId);
    } else {
      shop.shopId.confirm.reject();
    }
  }
 

    onEdit(id){
      this.router.navigate(['/shops/edit-shop/'],{ queryParams: {id: id}});
      }
  


}
