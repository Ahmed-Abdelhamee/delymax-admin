import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverRouteComponent } from './driver-route/driver-route.component';
import { ImportRouteComponent } from './import-route/import-route.component';
import { ImportTempListComponent } from './import-temp-list/import-temp-list.component';
import { ImportTempComponent } from './import-temp/import-temp.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { ViewDriverRouteComponent } from './view-driver-route/view-driver-route.component';
import { ViewRouteComponent } from './view-route/view-route.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'routes-list',
        component: RoutesListComponent,
        data: {
          title: "Routes",
          breadcrumb: "import-routes"
        }
      },
      {
        path: 'import-route',
        component: ImportRouteComponent,
        data: {
          title: "Import Route",
          breadcrumb: "import-route"
        }
      },
      {
        path: 'add-temp',
        component:ImportTempComponent,
        data: {
          title: "Add Template",
          breadcrumb: "add-temp"
        }
      },
      {
        path: 'temp-list',
        component:ImportTempListComponent,
        data: {
          title: "Template",
          breadcrumb: "temp-list"
        }
      },
      {
        path: 'driver-route',
        component:DriverRouteComponent,
        data: {
          title: "driver Routes",
          breadcrumb: "driver-route"
        }
      },
      {
        path: 'view-route',
        component:ViewRouteComponent,
        data: {
          title: "View Route",
          breadcrumb: "view-route"
        }
      },
      {
        path: 'view-driver-route',
        component:ViewDriverRouteComponent,
        data: {
          title: "View Driver Route",
          breadcrumb: "view-driver-route"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutesRoutingModule { }
