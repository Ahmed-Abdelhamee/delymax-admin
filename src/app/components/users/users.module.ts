import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from 'ngx-ckeditor';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DataTablesModule } from 'angular-datatables';
import { CountToModule } from 'angular-count-to';
import { SharedModule } from 'src/app/shared/shared.module';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { MatSelectModule } from '@angular/material/select';
import { ViewUserComponent } from './view-user/view-user.component';
import { CollectorAccountComponent } from './collector-account/collector-account.component';

@NgModule({
  declarations: [ListUserComponent, CreateUserComponent, ViewUserComponent, CollectorAccountComponent],
  imports: [

    UsersRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    Ng2SmartTableModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    NgbModule,
    DropzoneModule,
    TranslateModule,
    DataTablesModule,
    CountToModule,
    SharedModule,
    GalleryModule.forRoot()
  
  ]
})
export class UsersModule { }
