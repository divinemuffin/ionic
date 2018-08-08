import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalVarProvider } from "../../providers/local-var/local-var"

@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})

export class RoomsPage {
  objectKeys = Object.keys;
  constructor(
    public navCtrl: NavController, 
    public variables: LocalVarProvider
  ) { }

  check(x){
    console.log(x)
  }
}
