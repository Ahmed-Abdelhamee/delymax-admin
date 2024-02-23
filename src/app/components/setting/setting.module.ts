import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingRoutingModule } from './setting-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { HomeSettingsComponent } from './home-settings/home-settings.component';
import { SliderComponent } from './slider/slider.component';
import { AddSliderComponent } from './slider/add-slider/add-slider.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DataTablesModule } from 'angular-datatables';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { ArSlidersComponent } from './slider/ar-sliders/ar-sliders.component';
import { EnSlidersComponent } from './slider/en-sliders/en-sliders.component';
import { TownsComponent } from './towns/towns.component';
import { AddTownComponent } from './towns/add-town/add-town.component';
import { CitiesComponent } from './cities/cities.component';
import { AddCityComponent } from './cities/add-city/add-city.component';
import { TownNamePipe } from 'src/assets/pipes/town-name.pipe';
import { AgmCoreModule } from '@agm/core';
import { AgmDrawingModule } from '@agm/drawing';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { DeliveryHoursComponent } from './cities/delivery-hours/delivery-hours.component';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [ TownNamePipe, AppSettingsComponent, HomeSettingsComponent, SliderComponent, AddSliderComponent, ArSlidersComponent, EnSlidersComponent, TownsComponent, AddTownComponent, CitiesComponent, AddCityComponent, DeliveryHoursComponent],
  imports: [
   
    SettingRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    Ng2SmartTableModule,
    NgbModule,
    NzModalModule,
    DropzoneModule,
    TranslateModule,
    MatSelectModule,
    SharedModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    GooglePlaceModule,
    DataTablesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzWiF1jqp_BF-jxFHEq53C23NUZ81VwVc',
      libraries: ['places', 'drawing', 'geometry'],

    }),
    AgmDrawingModule,
    MatCheckboxModule,
    GalleryModule.forRoot()
  ],
  providers: [TownNamePipe],
})
export class SettingModule { }
