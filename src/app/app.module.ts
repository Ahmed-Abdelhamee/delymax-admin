import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgxImageCompressService} from 'ngx-image-compress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core'
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './components/routes/routes.module';
import { CouponsModule } from './components/coupons/coupons.module';
import { PagesModule } from './components/pages/pages.module';
import { MediaModule } from './components/media/media.module';
import { MenusModule } from './components/menus/menus.module';
import { VendorsModule } from './components/vendors/vendors.module';
import { UsersModule } from './components/users/users.module';
import { LocalizationModule } from './components/localization/localization.module';
import { InvoiceModule } from './components/invoice/invoice.module';
import { SettingModule } from './components/setting/setting.module';;
import { ReportsModule } from './components/reports/reports.module';
import { AuthModule } from './components/auth/auth.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { MessagingService } from 'src/service/messaging.service';
import { AsyncPipe } from '@angular/common';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { ShopsModule } from './components/shops/shops.module';
import { ChatModule } from './chat/chat.module';
import { NgChatModule } from 'ng-chat';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
const config = {
  apiKey: "AIzaSyB3uojciVtBr_c6eCGCp2VXdYFXX0ffjr0",
  authDomain: "profliix-77742.firebaseapp.com",
  databaseURL: "https://profliix-77742-default-rtdb.firebaseio.com",
  projectId: "profliix-77742",
  storageBucket: "profliix-77742.appspot.com",
  messagingSenderId: "941703932132",
  appId: "1:941703932132:web:33735e1700ff845750e4f1",
  measurementId: "G-KNHCLXJ1W6"
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    DashboardModule,
    InvoiceModule,
    SettingModule,
    ReportsModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    LocalizationModule,
    ShopsModule,
    RoutesModule,
    VendorsModule,
    CouponsModule,
    PagesModule,
    MediaModule,
    MenusModule,
    UsersModule,
    DataTablesModule,
    NgChatModule,
    ChatModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(config),
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: false,
      enableHtml: true,
      positionClass :'toast-top-left'
    }),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule ,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [MessagingService,AsyncPipe,NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
