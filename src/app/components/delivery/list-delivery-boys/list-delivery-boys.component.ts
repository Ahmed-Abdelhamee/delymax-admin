import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { State } from 'src/app/shared/interfaces/state';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DataService } from 'src/app/shared/service/data.service';
import { DeliveryService } from 'src/app/shared/service/delivery.service';

@Component({
  selector: 'app-list-delivery-boys',
  templateUrl: './list-delivery-boys.component.html',
  styleUrls: ['./list-delivery-boys.component.scss']
})
export class ListDeliveryBoysComponent implements OnInit {

 
  public closeResult: string;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  isDtInitialized:boolean = false
  public dtTrigger: Subject<any> = new Subject();
  public customers = [];
  public editedClient;
  public tempId: any;
  public states:State[]=[];
  public rows = [];
  public srch = [];
  public statusValue;
  public pipe = new DatePipe("en-US");
  selectedTown='';
  selectedState:any;
  user:User;
  allZone:boolean = false;
  constructor(private modalService: NgbModal,private deliveryService:DeliveryService,private _domSanitizer: DomSanitizer
    ,private router:Router,private dataService:DataService) {
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
      this.dataService.getAllStates().subscribe(states=>{
        this.states = states;
      })
   
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

    this.getDBoys();
  }
  getDBoys() {
    if(this.allZone){
      this.deliveryService.getAllDeliveryBoys().subscribe(res=>{
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
          });
        }else{
          this.isDtInitialized = true
          this.dtTrigger.next();
        }
        
        this.customers = res;
        console.log(this.customers)
      
      });
    }else{
      this.deliveryService.getDeliveryBoysByZone(this.selectedState).subscribe(res=>{
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
          });
        }else{
          this.isDtInitialized = true
          this.dtTrigger.next();
        }
        
        this.customers = res;
        console.log(this.customers)
      
      });
    }
    
   
  }
  onEditClient(event){

  }

  onDeleteConfirm(user) {
    if (window.confirm('Are you sure you want to delete '+user.name+' ?')) {
    //  category.confirm.resolve(category.newData);
      console.log(user.phone)
     this.deliveryService.removeDB(user.phone);
    } else {
      user.confirm.reject();
    }
  }
  

    onEdit(id){
      this.router.navigate(['/delivery/add-delivery-boy'],{ queryParams: {id: id}});
      }

    

}

