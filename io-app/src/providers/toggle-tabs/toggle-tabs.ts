// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// observables to observe window resizing
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

/*
  Makes tabs invisible in big screens
*/
@Injectable()
export class ToggleTabsProvider {
  windowSize: number;
  observer;

  constructor() {
    // initial check
    Observable.fromEvent(window, 'load')
      .subscribe(() => {this.checkTabbar()});

    // creating observer for passing
    this.observer = Observable.fromEvent(window, 'resize')
      .debounceTime(100)
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

}
