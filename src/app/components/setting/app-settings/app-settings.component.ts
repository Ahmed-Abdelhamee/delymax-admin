import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from "@angular/platform-browser-dynamic";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";
import { AppSetting } from "src/app/shared/interfaces/app-setting.model";
import { DataService } from "src/app/shared/service/data.service";

export class DomainAppSetting extends AppSetting {
  
}

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss']
})
export class AppSettingsComponent implements OnInit {

  public companySettings: FormGroup;
  public appSetting : DomainAppSetting;
  private AppSettingSubscription: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private dataService:DataService
  ) {
 

  }

  ngOnInit() {
    this.initForm()
    this.AppSettingSubscription = this.dataService.getAppSetting().subscribe((appSetting: AppSetting) =>{
      if(appSetting){
        this.appSetting = appSetting
        console.log(this.appSetting)
        this.initForm()
      
      }    
     }); 
  }
  initForm(){
    this.companySettings = this.formBuilder.group({
      company: [ this.appSetting && this.appSetting.company, [Validators.required]],
      ver: [ this.appSetting && this.appSetting.ver, [Validators.required]],
      address: [this.appSetting && this.appSetting.address, [Validators.required]],
      email: [this.appSetting && this.appSetting.email, [Validators.required]],
      phone: [this.appSetting && this.appSetting.phone, [Validators.required]],
      facebook: [this.appSetting && this.appSetting.facebook],
      twitter: [this.appSetting && this.appSetting.twitter],
      insta: [this.appSetting && this.appSetting.insta],
      google: [this.appSetting && this.appSetting.google]
    });
  }

  submitCompany() {
    if (this.companySettings.valid) {

        console.log(this.companySettings.value)
        this.dataService.saveSetting(this.companySettings.value);
      
    }else{
      console.log("not")
    }
  }
}
