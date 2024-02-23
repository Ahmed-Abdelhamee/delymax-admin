import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Permissons } from 'src/app/shared/service/permissions';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddWearhouseComponent } from './add-wearhouse/add-wearhouse.component';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { ViewWearhouseComponent } from './view-wearhouse/view-wearhouse.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListCompaniesComponent,
        canActivate:[Permissons],
        data: {
          title: "Companies",
          permission: '"view_customer":true',
          breadcrumb: "Companies"
        }
      },
      {
        path: 'view-company',
        component: ViewCompanyComponent,
        canActivate:[Permissons],
        data: {
          title: "Company Details",
          permission: '"view_customer":true',
          breadcrumb: "Company Details"
        }
      },
      {
        path: 'add-company',
        component: AddCompanyComponent,
        canActivate:[Permissons],
        data: {
          title: "Add Company",
          permission: '"view_customer":true',
          breadcrumb: "add-company"
        }
      },
      {
        path: 'add-wearhouse',
        component: AddWearhouseComponent,
        canActivate:[Permissons],
        data: {
          title: "Add Wearhouse",
          permission: '"view_customer":true',
          breadcrumb: "add-wearhouse"
        }
      },
      {
        path: 'view-wearhouse',
        component: ViewWearhouseComponent,
        canActivate:[Permissons],
        data: {
          title: "view Wearhouse",
          permission: '"view_customer":true',
          breadcrumb: "view-wearhouse"
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
