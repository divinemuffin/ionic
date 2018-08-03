import { Component } from '@angular/core';

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

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  pages = [
    HomePage,
    AboutPage,
    ContactPage
  ]

  windowSize:number;

  constructor() {
    Observable.fromEvent(window, 'resize')
    .debounceTime(100)
    // .subscribe((e) => this.checkTabbar(e['target'].innerWidth));
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


  redirect(page){
    this.root = page
  }

}
