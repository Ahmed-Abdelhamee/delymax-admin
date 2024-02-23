import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { CategoryService } from 'src/app/shared/service/category.service';
import { CheckPermisson } from 'src/app/shared/service/check-permisson';

import { TypeService } from 'src/app/shared/service/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  @ViewChild('photos', { static: true }) photos;
  public closeResult: string;
  public types = []
  categoryForm: FormGroup;
  public tempId: any;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
  canDelete:boolean=false;
  id:any;
  constructor(private modalService: NgbModal,private typeService:TypeService,private _domSanitizer: DomSanitizer
    ,private fb: FormBuilder,private router: Router,private permisson:CheckPermisson,private route:ActivatedRoute) {
      this.canDelete = this.permisson.checkPermisson('"delete_product":true')
    
  }

  
  onAddType(){
    this.router.navigate(['/shops/add-shop-type/'],{ queryParams: {shopId:this.id}});
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
    this.getTypes()  
    
  }
  getTypes() {
    this.typeService.getTypes(this.id).subscribe(res => {
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }else{
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
      this.types = res;
    });
  }

  onDeleteConfirm(type) {
    if (window.confirm('Are you sure you want to delete '+type.name+' ?')) {
      console.log(type.id)
      this.typeService.removeType(type.id);
    } else {
      type.confirm.reject();
    }
  }

  
  onEdit(id){
    this.router.navigate(['/shops/add-shop-type/'],{ queryParams: {id: id,shopId:this.id}});
    }

}
