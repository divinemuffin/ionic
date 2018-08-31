import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { CalendarComponent } from "./calendar.component";     // my popup page

@Component({
  selector: 'page-room-details',
  templateUrl: 'room-details.html',
})
export class RoomDetailsPage {
  isFormValid: boolean = false;     // submit entire form and make order
  room = [];

  constructor(public modalCtrl: ModalController, public navParams: NavParams) { this.room = navParams['data']; }
  ionViewDidLoad() { }

  openDatePicker() {
    console.log("OPEN!~");
    let profileModal = this.modalCtrl.create(CalendarComponent, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }

  // openDatePicker(HTMLobject){
  //   console.log("this works fine: ", HTMLobject);
  // }
}
