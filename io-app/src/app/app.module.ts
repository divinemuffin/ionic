import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RoomsPage } from '../pages/rooms/rooms';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../../src/pages/login/login";
import { RoomDetailsPage } from '../pages/room-details/room-details';
import { CalendarComponent } from '../pages/room-details/calendar.component';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalVarProvider } from '../providers/local-var/local-var';
import { ToggleTabsProvider } from '../providers/toggle-tabs/toggle-tabs';

import { CalendarModule } from "ion2-calendar";          // ion2-calendar plugin (RoomDetailsPage)
import { AdminPanelPageModule } from "../pages/admin-panel/admin-panel.module"; // admin panel

@NgModule({
  declarations: [
    MyApp,
    RoomsPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RoomDetailsPage,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicImageViewerModule,
    CalendarModule,
    AdminPanelPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RoomsPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RoomDetailsPage,
    CalendarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalVarProvider,
    ToggleTabsProvider,
  ]
})
export class AppModule {}
