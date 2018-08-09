import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalVarProvider } from "../../providers/local-var/local-var"
import { RoomDetailsPage } from "../room-details/room-details"

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

  goToNextPage(page = RoomDetailsPage, room?){
    // function that alows to add page to stack and to view it
    // NavController provided by Ionic is used
    room = room || 'No information for this object';
    console.log(room);
    this.navCtrl.push(page, room) 
  }
}
