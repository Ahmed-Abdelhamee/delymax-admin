import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ToggleFullscreenDirective } from "./directives/fullscreen.directive";
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavService } from './service/nav.service';
import { WINDOW_PROVIDERS } from './service/windows.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { CustomDatePipe } from 'src/assets/pipes/custom-date.pipe';
import { CustomStatus } from 'src/assets/pipes/custom-status.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ShopTypePipe } from 'src/assets/pipes/shop-type.pipe';
import { ShopPipe } from 'src/assets/pipes/shop.pipe';
import { DateAgoPipe } from 'src/assets/pipes/date-ago.pipe';
import { CustomerName } from 'src/assets/pipes/customer-name.pipe';
import { LocationModalComponent } from './location-modal/location-modal.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDrawingModule } from '@agm/drawing';
import { DirectionsMapDirective } from './service/directions-map.directive';
import { OrderByPipe } from 'src/assets/pipes/order-by.pipe';
import { HourTxtPipe } from 'src/assets/pipes/hour-txt.pipe';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { OrderType } from 'src/assets/pipes/order-type.pipe';
import { ButtonComponent } from './components/button/button.component';
import { ZoneUsersPipe } from 'src/assets/pipes/zone-users.pipe';
import { DBoyNamePipe } from 'src/assets/pipes/d-boy-name.pipe';
import { ChatModalComponent } from '../chat/chat-modal/chat-modal.component';
import { NgChatModule } from 'ng-chat';
import { StatePipe } from 'src/assets/pipes/state.pipe';
import { TownPipe } from 'src/assets/pipes/town.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CompletePipe } from 'src/assets/pipes/complete.pipe';
import { LostPipe } from 'src/assets/pipes/lost.pipe';
import { DamagePipe } from 'src/assets/pipes/damage.pipe';
import { ReturnPipe } from 'src/assets/pipes/return.pipe';
import { RoutStatusPipe } from 'src/assets/pipes/route-status.pipe';



@NgModule({
  declarations: [
    ToggleFullscreenDirective,
    FeatherIconsComponent,
    FooterComponent,
    ChatModalComponent, 
    HeaderComponent,
    SidebarComponent,
    ContentLayoutComponent,
    BreadcrumbComponent,
    RightSidebarComponent,
    PaginationComponent,
    CustomStatus,
    ShopTypePipe,
    OrderType,
    ShopPipe,
    ZoneUsersPipe,
    DateAgoPipe,
    OrderByPipe,
    HourTxtPipe,
    StatePipe,
    CompletePipe,
    LostPipe,
    DamagePipe,
    ReturnPipe,
    TownPipe,
    RoutStatusPipe,
    DBoyNamePipe,
    CustomerName,
    SvgIconComponent,
    LocationModalComponent,
    DirectionsMapDirective,
    SvgDefinitionsComponent,
    AvatarComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzWiF1jqp_BF-jxFHEq53C23NUZ81VwVc',
      libraries: ['places', 'drawing', 'geometry'],
      language: localStorage && localStorage.lang || 'ar'

    }),
    AgmDrawingModule
  ],
  providers: [NavService, WINDOW_PROVIDERS,CustomStatus,ShopTypePipe,PaginationComponent,TownPipe,ShopPipe,ButtonComponent,DBoyNamePipe,RoutStatusPipe,CompletePipe,DamagePipe,ReturnPipe,LostPipe,StatePipe,DateAgoPipe,ZoneUsersPipe,HourTxtPipe,OrderByPipe,CustomerName,GoogleMapsAPIWrapper,OrderType],
  exports: [FeatherIconsComponent,AvatarComponent,ButtonComponent,SvgDefinitionsComponent,PaginationComponent,ChatModalComponent,RoutStatusPipe,CompletePipe,DamagePipe,ReturnPipe,LostPipe,StatePipe,TownPipe, ToggleFullscreenDirective,DBoyNamePipe,ZoneUsersPipe,TranslateModule,SvgIconComponent,CustomStatus,OrderType,ShopTypePipe,ShopPipe,OrderByPipe,HourTxtPipe,DateAgoPipe,CustomerName,LocationModalComponent]
})
export class SharedModule { }
