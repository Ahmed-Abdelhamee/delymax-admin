import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDate, NgbCalendar, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Coupon } from 'src/app/shared/interfaces/coupon';
import { CouponService } from 'src/app/shared/service/coupon.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.scss']
})
export class CreateCouponComponent implements OnInit {
  public generalForm: FormGroup;
  public restrictionForm: FormGroup;
  public usageForm: FormGroup;
  public model: NgbDateStruct;
  public date: { year: number, month: number };
  public modelFooter: NgbDateStruct;
  public pipe = new DatePipe("en-US");

  constructor(private formBuilder: FormBuilder, private calendar: NgbCalendar,private toastr:ToastrService,private couponService:CouponService,private router:Router) {
    this.createGeneralForm();
    
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  createGeneralForm() {
    this.generalForm = this.formBuilder.group({
      code: ['',Validators.required],
      startDate: ['',Validators.required],
      endDate: ['',Validators.required],
      limit: [''],
      discount:['',Validators.required]
    });
  }

 
  ngOnInit() {

  }
  addCoupon(){
   if(!this.generalForm.valid){
    this.toastr.error("", "Please enter All  fields!");
   }else{
    const id = this.createId();
    
    let startDate = this.getDate(
      this.generalForm.value.startDate
    );
    let endDate = this.getDate(
      this.generalForm.value.endDate
    );
    
    let obj = new Coupon(
      id,
      this.generalForm.value.code,
      this.generalForm.value.discount,
      startDate,
      endDate,
      this.generalForm.value.limit,
    )

    this.couponService.addCoupon(obj).subscribe((res) => {
      if(res){
      this.toastr.success("", "Added successfully!");
      this.router.navigate(["/coupons/list-coupons/"]);  
      }else{
        this.toastr.error("", "Error");
      }
      
    });

    
   }
  }
  getDate(Date: any) :string{
    console.log(Date)
    let day = Date.day;
    let month = Date.month;
    let year = Date.year;
     let dayStr = day+"";
     let monthStr = month+"";
     let yearStr = year+"";
     

    if(day<10){
      dayStr = "0"+day;
    }
    if(month<10){
      monthStr = "0"+month;
    }
    console.log(dayStr+"-"+monthStr+"-"+yearStr)
    return yearStr+"-"+monthStr+"-"+dayStr;
  }

  private createId(): number {
    const randomId = Math.floor(new Date().getTime());

      let id = randomId;

      
   
    return id;
  }


}
