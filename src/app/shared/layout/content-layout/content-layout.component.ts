import { Component, OnInit } from '@angular/core';
import { NavService } from '../../service/nav.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, zoomOut, zoomIn, fadeIn, bounceIn } from 'ng-animate';
import { MessagingService } from 'src/service/messaging.service';
import { AuthService } from '../../service/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  animations: [
    trigger('animateRoute', [transition('* => *', useAnimation(fadeIn, {
      // Set the duration to 5seconds and delay to 2 seconds
      //params: { timing: 3}
    }))])
  ]
})
export class ContentLayoutComponent implements OnInit {

  public right_side_bar: boolean;
  public layoutType: string = 'RTL';
  public layoutClass: boolean = false;
  user:User;
  shop:boolean = false;

  constructor(public navServices: NavService,private messagingService: MessagingService,private authService:AuthService) {
    const user = localStorage.getItem('adminUser');
    if(user){
    console.log(user) 
    let jsonObj: any = JSON.parse(user); // string to generic object first
    this.user = <User>jsonObj;
    console.log(this.user) 
    this.shop = this.user.roles;
   }

   
  }

  message;

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public rightSidebar($event) {
    this.right_side_bar = $event
    console.log($event)
  }

  public clickRtl(val) {
    if (val === 'RTL') {
      document.body.className = 'rtl';
      this.layoutClass = true;
      this.layoutType = 'LTR';
    } else {
      document.body.className = '';
      this.layoutClass = false;
      this.layoutType = 'RTL';
    }
  }

  ngOnInit() {
    


    
    
   }

}
