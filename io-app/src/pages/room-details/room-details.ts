import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoomDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-room-details',
  templateUrl: 'room-details.html',
})
export class RoomDetailsPage {
  room: object;
  isFormValid: boolean = false;

  days = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.room = navParams['data'];
    for (let index = 1; index <= 31; index++) {
      this.days.push({num:index, name:"mon"})
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomDetailsPage');
  }

}
