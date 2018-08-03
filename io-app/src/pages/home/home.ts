import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LocalVarProvider } from "../../providers/local-var/local-var"

import { AboutPage } from '../about/about';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  root = 'AboutPage';
 
  constructor(public navCtrl: NavController) { }
 
  open(pageName) {
    this.root = pageName;
  }
}
