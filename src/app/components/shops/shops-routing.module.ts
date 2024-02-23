import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Permissons } from 'src/app/shared/service/permissions';
import { AddShopComponent } from './add-shop/add-shop.component';
import { AddShopCategoryComponent } from './menu/add-shop-category/add-shop-category.component';
import { AddShopProductComponent } from './menu/add-shop-product/add-shop-product.component';
import { AddShopSideComponent } from './menu/add-shop-side/add-shop-side.component';
import { AddShopUnitComponent } from './menu/add-shop-units/add-shop-unit.component';
import { AddTypeComponent } from './menu/add-type/add-type.component';
import { ShopViewOrderComponent } from './shop-view-order/shop-view-order.component';
import { ShopsListComponent } from './shops-list/shops-list.component';
import { ViewShopComponent } from './view-shop/view-shop.component';


const routes: Routes = [
  {
    path: 'shops',
    children: [
      {
        path: '',
        component: ShopsListComponent,
        data: {
          title: "Shops",
          breadcrumb: "shops"
        }
      },
      {
        path: 'add-shop-category',
        canActivate:[Permissons],
        component: AddShopCategoryComponent,
        data: {
          title: "Add Category",
          permission: '"add_product":true',
          breadcrumb: "Add Category"
        }
      },
      {
        path: 'add-shop-side',
        canActivate:[Permissons],
        component: AddShopSideComponent,
        data: {
          title: "Add Side",
          permission: '"add_product":true',
          breadcrumb: "Add Side"
        }
      },
      {
        path: 'add-shop-product',
        canActivate:[Permissons],
        component: AddShopProductComponent,
        data: {
          title: "Add Products",
          permission: '"add_product":true',
          breadcrumb: "Add Product"
        }
      },
      {
        path: 'add-shop-unit',
        canActivate:[Permissons],
        component: AddShopUnitComponent,
        data: {
          title: "Add Unit",
          permission: '"add_product":true',
          breadcrumb: "Add Unit"
        }
      },
      {
        path: 'add-shop-type',
        canActivate:[Permissons],
        component: AddTypeComponent,
        data: {
          title: "Add Type",
          permission: '"add_product":true',
          breadcrumb: "Add Type"
        }
      },
      {
        path: 'add-shop-product/:id',
        canActivate:[Permissons],
        component: AddShopProductComponent,
        data: {
          title: "Edit Product",
          permission: '"add_product":true',
          breadcrumb: "Edit Product"
        }
      },
      {
        path: 'view-shop',
        canActivate:[Permissons],
        component: ViewShopComponent,
        data: {
          title: "Shop Details",
          permission: '"view_shop":true',
          breadcrumb: "shop-details"
        }
      },
      {
        path: 'shop-view-order',
        canActivate:[Permissons],
        component: ShopViewOrderComponent,
        data: {
          title: "Shop Details",
          permission: '"view_order":true',
          breadcrumb: "shop-details"
        }
      },
      {
        path: 'add-shop',
        canActivate:[Permissons],
        component: AddShopComponent,
        data: {
          title: "Add Shop",
          permission: '"add_shop":true',
          breadcrumb: "Add Shop"
        }
      },
      {
        path: 'edit-shop',
        canActivate:[Permissons],
        component: AddShopComponent,
        data: {
          title: "Edit Shop",
          permission: '"add_shop":true',
          breadcrumb: "Edit Shop"
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsShopRoutingModule { }
