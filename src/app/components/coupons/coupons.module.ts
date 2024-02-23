import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CouponsRoutingModule } from './coupons-routing.module';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};


@NgModule({
  declarations: [ListCouponComponent, CreateCouponComponent],
  imports: [
    CouponsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    Ng2SmartTableModule,
    NgbModule,
    DropzoneModule,
    TranslateModule,
    DataTablesModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    NgbActiveModal
  ],
  exports:[TranslateModule]
})
export class CouponsModule { }
