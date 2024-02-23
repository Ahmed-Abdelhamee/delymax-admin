import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { CategoryService } from 'src/app/shared/service/category.service';
import { ShopService } from 'src/app/shared/service/shop.service';

declare const $: any;
@Component({
  selector: 'app-arabic-shop-cat',
  templateUrl: './arabic-shop-cat.component.html'
})
export class ArabicShopCatComponent implements OnInit {

  public closeResult: string;
  public categoriesAR = [];
  public tempId: any;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
 id:any;
  constructor(private modalService: NgbModal,private shopService:ShopService,private _domSanitizer: DomSanitizer,
    private fb: FormBuilder,private router: Router,private toastr:ToastrService,private route:ActivatedRoute) {

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  goToAddCat(){
    this.router.navigate(['/products/add-category']);
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
    this.id = this.route.snapshot.queryParams["id"];
    console.log(this.id)
    this.getCategories(this.id);
    
  }

  addCategory(){
    this.router.navigate(['/shops/add-shop-category/'],{ queryParams: {shopId: this.id}});
  }

  getCategories(id) {
    this.shopService.getCategories(id.toString()).subscribe(res => {
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }else{
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
      this.categoriesAR = res;
    });
  }
 
  onDeleteConfirm(category) {
    if (window.confirm('Are you sure you want to delete '+category.name+' ?')) {
    //  category.confirm.resolve(category.newData);
      console.log(category.id)
      this.shopService.removeCategoryAR(category.id);
    } else {
      category.confirm.reject();
    }
  }
  

    onEditAR(id){
      this.router.navigate(['/shops/add-shop-category/'],{ queryParams: {id: id,shopId:this.id}});
      }
  
    }
