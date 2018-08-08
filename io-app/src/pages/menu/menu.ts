
import { RoomsPage } from '../rooms/rooms';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { ToggleTabsProvider } from '../../providers/toggle-tabs/toggle-tabs';


export interface PageInterface { 
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = TabsPage;
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'Home Page', tabComponent: HomePage, index: 0, icon: 'home' },
    { title: 'Rooms', pageName: 'Rooms Page', tabComponent: RoomsPage, index: 1, icon: 'list' },
    { title: 'Contacts', pageName: 'Contacts', tabComponent: ContactPage,index: 2, icon: 'map' },
  ];

  constructor(
    public navCtrl: NavController,
    public toggleTab: ToggleTabsProvider
  ) { }

  ionViewDidLoad() {
    this.toggleTab.observer.subscribe((e) => this.toggleTab.checkTabbar(e['target'].innerWidth));
  }

  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNavs();
 
    if (childNav[0]) {
      if (childNav[0].getSelected() && childNav[0].getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

}
