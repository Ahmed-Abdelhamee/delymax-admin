import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../service/auth.service';
import { NavService } from '../../service/nav.service';
import { OrderService } from '../../service/order.service';
import { Howl } from 'howler';
import { User } from '../../interfaces/user';
import { Message } from '../../interfaces/message';
import { MSCust } from '../../interfaces/ms-cust';
import { Customer } from '../../interfaces/customer';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public right_sidebar: boolean = false;
  public open: boolean = false;
  public openNav: boolean = false;
  public isOpenMobile : boolean;
  public newNot:any=[]
  public newMessges:Message[]=[]
  @Output() rightSidebarEvent = new EventEmitter<boolean>();
 @Input() shop:boolean;
  public layoutType: string = 'RTL';
  public layoutClass: boolean = false;
  user:User;
  customers:Customer[]=[];
  cUid:any=[];
  sound =  new Howl({
    src: ['assets/sound/not.mp3'],
    loop: true
  });
  lang:string;
  constructor(public navServices: NavService,private translate: TranslateService,private authService:AuthService,private router:Router,private orderService:OrderService) {
    this.lang=localStorage.getItem('language');
    const user = localStorage.getItem('adminUser');
    if(user){
    console.log(user) 
    let jsonObj: any = JSON.parse(user); // string to generic object first
    this.user = <User>jsonObj;
    console.log(this.user)
    this.shop = this.user.roles;
    }

 
   }

  collapseSidebar() {
    this.open = !this.open;
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar
  }
  right_side_bar() {
    this.right_sidebar = !this.right_sidebar
    this.rightSidebarEvent.emit(this.right_sidebar)
  }

  onLanguage(value:string){
    console.log(value)
    localStorage.setItem('language',value);
    this.lang = value;
    if (value === 'ar') {
      
      this.translate.setDefaultLang('ar');
       this.translate.use('ar');
 
      document.body.className = 'rtl';
      this.layoutClass = true;
      this.layoutType = 'LTR';
    } else {
        this.translate.setDefaultLang('en');
       this.translate.use('en');
 
      document.body.className = '';
      this.layoutClass = false;
      this.layoutType = 'RTL';
    }
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  logout(){
   this.authService.signOut();
  }

  ngOnInit() { 
    this.orderService.getAllNotification().subscribe(res=>{
     
      if(res.length>0){
        this.newNot = res;
       this.sound.play();
       
      }else{
        this.newNot = res;
       this.sound.stop(); 
      }
     });

     
 
 
   }
  getMessageUsers() {
 
      this.authService.searchCutomers(this.cUid).subscribe(cust=>{
     
      // this.customers = cust;
      // console.log(this.customers)
        
      })

  }

   ngAfterViewInit(){
     if(this.shop){
      this.orderService.getAllNotificationByShop(this.user.shop).subscribe(res=>{
        if(res.length>0){
          this.newNot = res;
          
         this.sound.play();
         
        }else{
          this.newNot = res;
         this.sound.stop(); 
        }
       }) 
     }else{
      this.orderService.getAllNotification().subscribe(res=>{
        if(res.length>0){
          this.newNot = res;
         this.sound.play();
         
        }else{
          this.newNot = res;
         this.sound.stop(); 
        }
       }) 
     }
     if(!this.shop){
      this.orderService.getAllChatsByShop("0102").subscribe(res=>{
        if(res.length>0){
          
          this.newMessges = res;
          this.newMessges = this.newMessges.filter((thing, index, self) =>
          index === self.findIndex((t) => (
             t.sender === thing.sender
           ))
        )
          this.newMessges.forEach(item=> this.cUid.push(item.sender))
        }
       }) 
      this.orderService.getAllChatsByShop("0102").subscribe(res=>{
        if(res.length>0){
          this.newMessges = res;
          this.getMessageUsers();
        // this.sound.play();
         
        }else{
          this.newMessges = res;
       //  this.sound.stop(); 
        }
       }) 
      }
   
   }

   clickNote(id,orderId){
    if(this.shop){
      console.log("click:"+id)
      this.orderService.updateNotificationStatusByShop(id,true);
    //  this.router.navigate(["/shops/shop-view-order"], { queryParams: {id: orderId,shopId:this.user.shop}})
    }else{
      console.log("click:"+id)
      this.orderService.updateNotificationStatus(id,true);
      //this.router.navigate(["/sales/view-order"], { queryParams: {id: orderId}})  
    }

     
   }

   clickMessage(id,orderId){

      console.log("click:"+id)
     // this.orderService.updateNotificationStatusByShop(id,true);
     this.router.navigate(["/shops/shop-view-order"], { queryParams: {id: orderId,shopId:this.user.shop}})
    

     
   }

}
