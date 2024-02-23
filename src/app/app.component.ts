import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessagingService } from 'src/service/messaging.service';
import { OrderService } from './shared/service/order.service';
import { ProjectService } from './shared/service/project.service';
import { ChatAdapter, IChatController } from 'ng-chat';
import { DemoAdapter } from './chat/demo-adapter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bestway-Admin Panal';
  public layoutType: string = 'RTL';
  public layoutClass: boolean = false;
  userId = 999;
 

  public adapter: ChatAdapter = new DemoAdapter();
  constructor(private messagingService: MessagingService,translate: TranslateService,private orderService:OrderService) { 

    if (localStorage.getItem('language')){
      const lang = localStorage.getItem('language');
      console.log(lang)
      if (lang === 'ar') {
        translate.setDefaultLang('ar');
         translate.use('ar');
   
        document.body.className = 'rtl';
        this.layoutClass = true;
        this.layoutType = 'LTR';
      } else {
          translate.setDefaultLang('en');
          translate.use('en');
   
        document.body.className = '';
        this.layoutClass = false;
        this.layoutType = 'RTL';
      }
    }else{
        localStorage.setItem('language','en')
        translate.setDefaultLang('en');
        translate.use('en');
  
        document.body.className = '';
        this.layoutClass = false;
        this.layoutType = 'RTL';
      
    }


  }
ngOnInit() {
  
  this.orderService.getAllNotification().subscribe(res=>{
    
  })
 }
}