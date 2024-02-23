import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';



import { Observable, combineLatest } from 'rxjs';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

import * as dateFns from 'date-fns';

import { FilterState } from 'src/assets/filter/filter.store';
import { IssueStatus, IssueStatusDisplay } from 'src/app/shared/data/issue';
import { FilterQuery } from 'src/assets/filter/filter.query';
import { IssueUtil } from 'src/app/shared/data/utils/issue';
import { ProjectService } from 'src/app/shared/service/project.service';
import { Order } from 'src/app/shared/interfaces/order';

@Component({
  selector: '[app-zone-orders]',
  templateUrl: './zone-orders.component.html',
  styleUrls: ['./zone-orders.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@UntilDestroy()
export class ZoneOrdersComponent implements OnInit {
  @Input() status: IssueStatus;
  @Input() currentUserId: string;
  IssueStatusDisplay = IssueStatusDisplay;
  @Input() orders: Order[] ;

  get ordersCount(): number {
    return this.orders.length;
  }

  constructor(private _projectService: ProjectService, private _filterQuery: FilterQuery) {}

  ngOnInit(): void {
    this._projectService.getProject();
  
  }

  drop(event: CdkDragDrop<Order[]>) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log( event.previousIndex, event.currentIndex)
     
  }

  filterIssues(order: Order[], filter: FilterState): Order[] {
    const { onlyMyIssue, ignoreResolved, searchTerm, userIds } = filter;
    return order.filter((order) => {
      const isMatchTerm = searchTerm ? IssueUtil.searchString(order.orderId, searchTerm) : true;

     // const isIncludeUsers = userIds.length
    //    ? order.userIds.some((userId) => userIds.includes(userId))
       // : true;

    //  const isMyIssue = onlyMyIssue
      //  ? this.currentUserId && order.userIds.includes(this.currentUserId)
      //  : true;

      const isIgnoreResolved = ignoreResolved ? order.status !== IssueStatus.DONE : true;

      return isMatchTerm ;//&& isIncludeUsers && isMyIssue && isIgnoreResolved;
    });
  }

  isDateWithinThreeDaysFromNow(date: string) {
    const now = new Date();
    const inputDate = new Date(date);
    return dateFns.isAfter(inputDate, dateFns.subDays(now, 3));
  }

  private updateListPosition(newList: Order[]) {
    newList.forEach((order, idx) => {
      const newIssueWithNewPosition = { ...order, listPosition: idx + 1 };
      //this._projectService.updateIssue(newIssueWithNewPosition);
    });
  }
}