import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  root = HomePage;
  myIndex: number;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  windowSize:number;

  constructor(navParams: NavParams) {
    Observable.fromEvent(window, 'resize')
    .debounceTime(100)
    // .subscribe((e) => this.checkTabbar(e['target'].innerWidth));

    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
   
  ionViewDidLoad() {
    // this.checkTabbar()
  }

  checkTabbar(width = window.innerWidth){
    this.windowSize = width;
    console.log(this.windowSize);
    let tabbar = document.querySelector(".tabbar");
    if(this.windowSize < 768){
      tabbar['style'].display = "flex"
    }
    else tabbar['style'].display = "none"
  }


  redirectToPage(root){
    this.root = root;
  }

  log(object){
    console.log(object);
  }

}
