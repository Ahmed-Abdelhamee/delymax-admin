import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ngx-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductsShopRoutingModule } from './shops-routing.module';

import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';



import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DataTablesModule } from 'angular-datatables';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AddShopCategoryComponent } from './menu/add-shop-category/add-shop-category.component';
import { AddShopProductComponent } from './menu/add-shop-product/add-shop-product.component';
import { AddShopSideComponent } from './menu/add-shop-side/add-shop-side.component';
import { ArabicShopProductComponent } from './menu/arabic-shop-product/arabic-shop-product.component';
import { ArabicShopCatComponent } from './menu/arabic-shop-cat/arabic-shop-cat.component';
import { ArabicShopSideComponent } from './menu/arabic-shop-side/arabic-shop-side.component';
import { ArabicShopUnitComponent } from './menu/arabic-shop-unit/arabic-shop-unit.component';
import { ShopsListComponent } from './shops-list/shops-list.component';
import { ViewShopComponent } from './view-shop/view-shop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopSummeryComponent } from './shop-summery/shop-summery.component';
import { ShopOrdersComponent } from './shop-orders/shop-orders.component';
import { ShopCategoryPipe } from './shop-category.pipe';
import { AddShopComponent } from './add-shop/add-shop.component';
import { AddShopUnitComponent } from './menu/add-shop-units/add-shop-unit.component';
import { UnitNamePipe } from './unit-name.pipe';
import { TypeComponent } from './menu/shop-type/type.component';
import { AddTypeComponent } from './menu/add-type/add-type.component';
import { CountToModule } from 'angular-count-to';
import { ShopViewOrderComponent } from './shop-view-order/shop-view-order.component';
import { AgmCoreModule } from '@agm/core';
import { mapShopDirective } from 'src/app/shared/service/mapShop.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};

@NgModule({
  declarations: [   UnitNamePipe,ShopCategoryPipe,ShopViewOrderComponent,TypeComponent,AddTypeComponent,mapShopDirective, AddShopProductComponent,AddShopUnitComponent, AddShopCategoryComponent, ArabicShopCatComponent, ArabicShopUnitComponent, ArabicShopProductComponent, AddShopSideComponent, ArabicShopSideComponent, ShopsListComponent, ViewShopComponent, ShopSummeryComponent, ShopOrdersComponent, AddShopComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    ProductsShopRoutingModule,
    Ng2SmartTableModule,
    NgbModule,
    DropzoneModule,
    TranslateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    DataTablesModule,
    MatCheckboxModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzWiF1jqp_BF-jxFHEq53C23NUZ81VwVc',
      libraries: ['places', 'drawing', 'geometry'],
      language: localStorage && localStorage.lang || 'ar'

    }),
    GalleryModule.forRoot(),
    CountToModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    NgbActiveModal,
    ShopCategoryPipe
  ],
  exports:[
    TranslateModule,ShopCategoryPipe,UnitNamePipe]
})
export class ShopsModule { }
