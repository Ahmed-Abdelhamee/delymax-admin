import { SalesRoutingModule } from './routes-routing.module';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ngx-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { ViewRouteComponent } from './view-route/view-route.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomStatus } from 'src/assets/pipes/custom-status.pipe';
import { AgmCoreModule } from '@agm/core';
import { mapSDirective } from 'src/app/shared/service/mapS.directive';
import { HttpClientModule } from '@angular/common/http';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};

@NgModule({
  declarations: [RoutesListComponent, TransactionsComponent, ViewRouteComponent,mapSDirective],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    Ng2SmartTableModule,
    NgbModule,
    DropzoneModule,
    TranslateModule,
    DataTablesModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzWiF1jqp_BF-jxFHEq53C23NUZ81VwVc',
      libraries: ['places', 'drawing', 'geometry'],
      language: localStorage && localStorage.lang || 'ar'

    }),
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
export class RoutesModule { }
