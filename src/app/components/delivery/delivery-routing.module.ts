import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDeliveryBoyComponent } from './add-delivery-boy/add-delivery-boy.component';
import { ListDeliveryBoysComponent } from './list-delivery-boys/list-delivery-boys.component';
import { OrdersBoardComponent } from './orders-board/orders-board.component';
import { OrdersDashboardComponent } from './orders-dashboard/orders-dashboard.component';
import { ViewDeliveryBoyComponent } from './view-delivery-boy/view-delivery-boy.component';
import { ZoneDeliveryBoysTrackingComponent } from './zone-delivery-boys-tracking/zone-delivery-boys-tracking.component';
import { ZoneOrdersComponent } from './zone-orders/zone-orders.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-delivery-boys',
        component: ListDeliveryBoysComponent,
        data: {
          title: "Drivers List",
          breadcrumb: "drivers-list"
        }
      },
      {
        path: 'add-delivery-boy',
        component: AddDeliveryBoyComponent,
        data: {
          title: "Create Driver",
          breadcrumb: "create-driver"
        }
      },
      {
        path: 'orders-board',
        component: OrdersBoardComponent,
        data: {
          title: "zone orders",
          breadcrumb: "zone-orders"
        }
      },
      {
        path: 'track-delivery-boys',
        component: ZoneDeliveryBoysTrackingComponent,
        data: {
          title: "track delivery boys",
          breadcrumb: "track-delivery-boys"
        }
      },
      {
        path: 'orders-dashboard',
        component: OrdersDashboardComponent,
        data: {
          title: "orders dashboard",
          breadcrumb: "orders-dashboard"
        }
      },
      {
        path: 'view-delivery-boy',
        component: ViewDeliveryBoyComponent,
        data: {
          title: "view delivery boy",
          breadcrumb: "view-delivery-boy"
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
