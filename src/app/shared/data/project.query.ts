import { ProjectState, ProjectStore } from './project.store';
import { Injectable, Input } from '@angular/core';
import { Query } from '@datorama/akita';

import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IssueStatus } from './issue';
import { Order } from '../interfaces/order';
import { OrderService } from '../service/order.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectQuery extends Query<ProjectState> {
  

  orders:Order[] =[] 
 

  constructor(protected store: ProjectStore,private orderService:OrderService) {
    super(store);
    
  }

  
  lastIssuePosition = (status: IssueStatus): number => {
    const raw = this.orders;
    console.log("raw:"+raw)
    const issuesByStatus = raw.filter(x => x.status === status);
    return issuesByStatus.length;
  };

  issueByStatusSorted$ = (status: IssueStatus,orders:Order[] ): Order[] => orders
          .filter((x) => x.status === status)
          .sort((a, b) => a.orderId - b.orderId);

  //issueById$(issueId: string){
 ////   return this.issues$.pipe(
  //    delay(500),
  //    map((issues) => issues.find(x => x.id === issueId))
 //   );
 // }
}
