import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IssueStatus } from 'src/app/shared/data/issue';
import { ProjectQuery } from 'src/app/shared/data/project.query';
import { Order } from 'src/app/shared/interfaces/order';
import { OrderService } from 'src/app/shared/service/order.service';
import { ProjectService } from 'src/app/shared/service/project.service';

@Component({
  selector: 'app-orders-board',
  templateUrl: './orders-board.component.html',
  styleUrls: ['./orders-board.component.scss']
})
@UntilDestroy()
export class OrdersBoardComponent {
  @Input() Allorders:Order[]=[]
  
  issueStatuses: IssueStatus[] = [
    IssueStatus.NEW,
    IssueStatus.PREPARE,
    IssueStatus.STORED,
    IssueStatus.DISPATCHING
  ];

  orders:Order[]=[]

  constructor(public projectQuery: ProjectQuery,private orderService:OrderService) {

   
        
 
   

  }
  

}
