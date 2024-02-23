import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { CountToModule } from 'angular-count-to';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { CKEditorModule } from 'ngx-ckeditor';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListDeliveryBoysComponent } from './list-delivery-boys/list-delivery-boys.component';
import { ViewDeliveryBoyComponent } from './view-delivery-boy/view-delivery-boy.component';
import { AddDeliveryBoyComponent } from './add-delivery-boy/add-delivery-boy.component';
import { ZoneHoursComponent } from './zone-hours/zone-hours.component';
import { ZoneDeliveryBoysTrackingComponent } from './zone-delivery-boys-tracking/zone-delivery-boys-tracking.component';
import { ZoneOrdersComponent } from './zone-orders/zone-orders.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { IssueCardComponent } from './issue-card/issue-card.component';
import { IssueModalComponent } from './issue-modal/issue-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OrdersBoardComponent } from './orders-board/orders-board.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueLoaderComponent } from './issue-loader/issue-loader.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDrawingModule } from '@agm/drawing';
import { mapDirective } from 'src/app/shared/service/map.directive';
import { OrdersDashboardComponent } from './orders-dashboard/orders-dashboard.component';
import { NgChatModule } from 'ng-chat';
import { DeliverySummeryComponent } from './delivery-summery/delivery-summery.component';
import { DeliveryOrdersComponent } from './delivery-orders/delivery-orders.component';
import { DeliveryAccountsComponent } from './delivery-accounts/delivery-accounts.component';
import { ZoneChatComponent } from './zone-chat/zone-chat.component';
import { DeliveryHourReportComponent } from './delivery-hour-report/delivery-hour-report.component';



@NgModule({
  declarations: [ListDeliveryBoysComponent,IssueLoaderComponent,IssueCardComponent,IssueModalComponent,IssueDetailComponent, ViewDeliveryBoyComponent,
     AddDeliveryBoyComponent, ZoneHoursComponent, ZoneDeliveryBoysTrackingComponent, ZoneOrdersComponent, OrdersBoardComponent,mapDirective, OrdersDashboardComponent, DeliverySummeryComponent, DeliveryOrdersComponent, DeliveryAccountsComponent, ZoneChatComponent, DeliveryHourReportComponent],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    NzModalModule,
    Ng2SmartTableModule,
    NgbModule,
    DropzoneModule,
    TranslateModule,
    DragDropModule,
    ContentLoaderModule,
    DataTablesModule,
    CountToModule,
    SharedModule,
    MatProgressSpinnerModule,
    GalleryModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzWiF1jqp_BF-jxFHEq53C23NUZ81VwVc',
      libraries: ['places', 'drawing', 'geometry'],
      language: localStorage && localStorage.lang || 'ar'

    }),
    AgmDrawingModule
  ]
})
export class DeliveryModule { }
