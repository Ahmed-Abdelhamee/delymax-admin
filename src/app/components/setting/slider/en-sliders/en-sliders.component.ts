import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-en-sliders',
  templateUrl: './en-sliders.component.html',
  styleUrls: ['./en-sliders.component.scss']
})
export class EnSlidersComponent implements OnInit {


  public allLang = true;
  lang = "";
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  isDtInitialized:boolean = false
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public url: any = "page";
  public packages: any = [];
  public addLeaveType: FormGroup;
  public editLeaveType: FormGroup;
  public editId: any;
  public tempId: any;
  public status =[{name:'true',value:'Active',color:'text-success'},{name:'false',value:'Inactive',color:'text-danger'}]
  constructor(
    private dataService:DataService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.lang = localStorage.getItem('language');
    console.log(this.lang)
  }

  ngOnInit() {
    this.getPosts();
    // for data table configuration
    this.dtOptions = {
      // ... skipped ...
      pageLength: 5,
      dom: "lrtip",
    };

  }

  getPosts() {
    this.dataService.getSliders.subscribe((data) => {
      this.packages = data;
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }else{
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
      
    });
    
  }

  onDeleteConfirm(slider) {
    if (window.confirm('Are you sure you want to delete '+slider.title+' ?')) {
    //  category.confirm.resolve(category.newData);
      console.log(slider.id)
      this.dataService.deleteSlider(slider.id);
    } else {
      slider.confirm.reject();
    }
  }

  
  onEdit(id){
    this.router.navigate(['/settings/add-slider/'],{ queryParams: {id: id,lang:'EN'}});
    }

  active(value) {
    console.log("status")
    this.editId = value.id;
    const index = this.packages.findIndex((item) => {
      return item.id === value.id;
    });
    let active = true;
    if(value.active){
      active = false;
    }
   // this.appService.updateTVPackageStatus(this.editId,active)
    
  }

  // Delete Provident Modal Api Call

  view(id) {
    this.document.location.href = 'https://egc.canadaresources.ca/blog/blog-detail/'+id;

  }

  deletePost() {
    /*
    if(this.allLang){
      this.appService.deleteSlider(this.tempId).then((data) => {
        this.appService.deleteSliderFR(this.tempId).then((data) => {
          $("#datatable").DataTable().clear();
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
          });
          this.dtTrigger.next();
        });
      });
      $("#delete_post").modal("hide");
      this.toastr.success("slider  deleted sucessfully..!", "Success");
    }else{
      if(this.lang == "fr"){
        this.appService.deleteSliderFR(this.tempId).then((data) => {
          $("#datatable").DataTable().clear();
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
          });
          this.dtTrigger.next();
        });
        this.getPosts();
        $("#delete_post").modal("hide");
        this.toastr.success("slider  deleted sucessfully..!", "Success");
      }else{
        this.appService.deleteSlider(this.tempId).then((data) => {
          $("#datatable").DataTable().clear();
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
          });
          this.dtTrigger.next();
        });
        this.getPosts();
        $("#delete_post").modal("hide");
        this.toastr.success("slider  deleted sucessfully..!", "Success");
      }
    }
    this.appService.deleteSlider(this.tempId).then((data) => {
      $("#datatable").DataTable().clear();
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      });
      this.dtTrigger.next();
    });
    this.getPosts();
    $("#delete_post").modal("hide");
    this.toastr.success("slider  deleted sucessfully..!", "Success");

    */
  }
  // for unsubscribe datatable
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  allLangs(){
    if(this.allLang){
    this.allLang = false;  
    console.log(this.allLang)
    }else{
      this.allLang = true;
      console.log(this.allLang)
    }
      
   }
}


