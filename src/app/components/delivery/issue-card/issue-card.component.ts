import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as moment from 'moment';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IssuePriorityIcon } from 'src/app/shared/data/issue-priority-icon';
import { ProjectQuery } from 'src/app/shared/data/project.query';
import { JUser } from 'src/app/shared/data/user';
import { IssueUtil } from 'src/app/shared/data/utils/issue';
import { Order } from 'src/app/shared/interfaces/order';
import { Shop } from 'src/app/shared/interfaces/shop';
import { ProductService } from 'src/app/shared/service/product.service';
import { IssueModalComponent } from '../issue-modal/issue-modal.component';

@Component({
  selector: '[issue-card]',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss']
})
@UntilDestroy()
export class IssueCardComponent implements OnInit {
  @Input() order: Order;
  assignees: JUser[];
  issueTypeIcon: string;
  priorityIcon: IssuePriorityIcon;
  shops:Shop[]=[];
  hours:any ;
  minutes:any ;
  seconds:any ;
  days:any;
  constructor(private _projectQuery: ProjectQuery, private _modalService: NzModalService,private productService:ProductService) {}

  ngOnInit(): void {
    this.productService.getShops.subscribe(shops=>{
      this.shops=shops;
    })
    this.issueTypeIcon="story";
    this.startTimer();
  }
  timeLeft: any;
  interval;

  startTimer() {
    this.interval = setInterval(() => {

      this.timer()
        
      
    },1000)
  }
  updtaeClock() {
  

  }
  timer(){
    
   
   if(this.order.status =="0"){
    var now  =  new Date().getTime();
    var then = this.order.orderTime;

   var ms = moment(now).diff(moment(then));
   var d = moment.duration(ms);
   this.timeLeft = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
   var tp = Math.floor(d.asMinutes());
    if(tp>=15){
      this.issueTypeIcon = "bug"
    }
   }else if(this.order.status =="1"){
    var now  =  new Date().getTime();
    var then = this.order.prepareTime;

   var ms = moment(now).diff(moment(then));
   var d = moment.duration(ms);
   this.timeLeft = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
   var tp = Math.floor(d.asMinutes());
   if(tp>=this.order.pTime){
    this.issueTypeIcon = "bug"
     }
  }else if(this.order.status =="1"){
    var now  =  new Date().getTime();
    var then = this.order.deliveryTime;

   var ms = moment(now).diff(moment(then));
   var d = moment.duration(ms);
   this.timeLeft = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
   var tp = Math.floor(d.asMinutes());
   
  }
   
   

 // this.startTimer(); 
  }
 

  openIssueModal(issueId: string) {
    this._modalService.create({
      nzContent: IssueModalComponent,
      nzWidth: 990,
      nzClosable: false,
      nzFooter: null,
      nzComponentParams: {
        orderId: issueId
      }
    });
  }
}
