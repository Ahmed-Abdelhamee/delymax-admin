import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './companies-routing.module';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { CustomStatus } from 'src/assets/pipes/custom-status.pipe';
import { SummeryComponent } from './summery/summery.component';
import { OrdersComponent } from './orders/orders.component';
import { GiftsComponent } from './gifts/gifts.component';
import { CountToModule } from 'angular-count-to';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddWearhouseComponent } from './add-wearhouse/add-wearhouse.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ViewWearhouseComponent } from './view-wearhouse/view-wearhouse.component';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};

@NgModule({
  declarations: [ListCompaniesComponent, ViewCompanyComponent, SummeryComponent, OrdersComponent, GiftsComponent, AddCompanyComponent, AddWearhouseComponent, ViewWearhouseComponent],
  imports: [
    CustomersRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    Ng2SmartTableModule,
    NgbModule,
    DropzoneModule,
    TranslateModule,
    DataTablesModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    CountToModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule,
    GalleryModule.forRoot()
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
export class CompaniesModule { }
