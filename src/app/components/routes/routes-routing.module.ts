import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Permissons } from 'src/app/shared/service/permissions';
import {  RoutesListComponent } from './routes-list/routes-list.component';
import { TransactionsComponent } from './transactions/transactions.component';
import {  ViewRouteComponent } from './view-route/view-route.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'routes-list',
        component: RoutesListComponent,
        data: {
          title: "Routes",
          breadcrumb: "routes"
        }
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
        data: {
          title: "Transactions",
          breadcrumb: "Transactions"
        }
      },
      {
        path: 'view-route',
        canActivate:[Permissons],
        component: ViewRouteComponent,
        data: {
          title: "Route Details",
          permission: '"view_order":true',
          breadcrumb: "Order Details"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
