import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { Permissons } from 'src/app/shared/service/permissions';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-coupons',
        component: ListCouponComponent,
        data: {
          title: "List Coupons",
          breadcrumb: "List Coupons"
        }
      },
      {
        path: 'create-coupons',
        canActivate:[Permissons],
        component: CreateCouponComponent,
        data: {
          permission: '"add_coupon":true',
          title: "Create Coupon",
          breadcrumb: "Create Coupons"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponsRoutingModule { }
