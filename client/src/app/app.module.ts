import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireDatabaseModule} from "angularfire2/database-deprecated";
import { Provider } from '../providers/provider/provider';
import {HttpModule} from "@angular/http";
import {PlanPage} from "../pages/plan/plan";
import {HistoryPage} from "../pages/history/history";
import {ExponatsPage} from "../pages/exponats/exponats";
import {ReservePage} from "../pages/reserve/reserve";
import {AddReservePage} from "../pages/add-reserve/add-reserve";
import {HttpClientModule} from '@angular/common/http';
import {AboutPage} from "../pages/about/about";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlanPage,
    HistoryPage,
    ExponatsPage,
    ReservePage,
    AddReservePage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlanPage,
    HistoryPage,
    ExponatsPage,
    ReservePage,
    AddReservePage,
    AboutPage
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider
  ]
})
export class AppModule {}
