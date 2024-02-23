import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportRoutesRoutingModule } from './import-routes-routing.module';
import { ImportRouteComponent } from './import-route/import-route.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { DriverRouteComponent } from './driver-route/driver-route.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDrawingModule } from '@agm/drawing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { CKEditorModule } from 'ngx-ckeditor';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImportTempComponent } from './import-temp/import-temp.component';
import { ImportTempListComponent } from './import-temp-list/import-temp-list.component';
import { ViewRouteComponent } from './view-route/view-route.component';
import { ViewDriverRouteComponent } from './view-driver-route/view-driver-route.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [ImportRouteComponent, RoutesListComponent, DriverRouteComponent, ImportTempComponent, ImportTempListComponent, ViewRouteComponent, ViewDriverRouteComponent],
  imports: [
    CommonModule,
    ImportRoutesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    Ng2SmartTableModule,
    NgbModule,
    NzModalModule,
    DropzoneModule,
    TranslateModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    NgbModule,
    SharedModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    GooglePlaceModule,
    DataTablesModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzWiF1jqp_BF-jxFHEq53C23NUZ81VwVc',
      libraries: ['places', 'drawing', 'geometry'],

    }),
    AgmDrawingModule,
    MatCheckboxModule,
    GalleryModule.forRoot()
  ]
})
export class ImportRoutesModule { }
