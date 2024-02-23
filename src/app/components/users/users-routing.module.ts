import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { Permissons } from 'src/app/shared/service/permissions';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-user',
        component: ListUserComponent,
        data: {
          title: "User List",
          breadcrumb: "User List"
        }
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
        canActivate:[Permissons],
        data: {
          permission: '"add_user":true',
          title: "Create User",
          breadcrumb: "Create User"
        }
      },
      {
        path: 'edit-user',
        component: CreateUserComponent,
        canActivate:[Permissons],
        data: {
          permission: '"update_user":true',
          title: "Edit User",
          breadcrumb: "Edit User"
        }
      },
      {
        path: 'view-user',
        component: ViewUserComponent,
        canActivate:[Permissons],
        data: {
          permission: '"update_user":true',
          title: "Edit User",
          breadcrumb: "Edit User"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
