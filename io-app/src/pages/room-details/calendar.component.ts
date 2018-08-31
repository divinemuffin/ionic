import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-room-details',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title> Picker </ion-title>
        <ion-buttons end>
          <button ion-button icon-only (click)="viewCtrl.dismiss()"><ion-icon name="close"></ion-icon></button>
        </ion-buttons>
      </ion-navbar>
    </ion-header>
    <ion-content col-12>
      <ion-grid col-10 style="margin:0 auto;">
        <ion-row>
          <ion-col>
            <ion-calendar [(ngModel)]="dateRange"
              (onChange)="changeDate($event)"
              (onSelectStart)="checkIn.date = ''"
              [options]="{pickMode: 'range', color: 'primary'}"
              [type]="'string'"
              [format]="'DD.MM.YYYY'">
            </ion-calendar>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-6>
            <ion-item>
              <ion-label><ion-icon name="clock"></ion-icon> In</ion-label>
              <ion-datetime displayFormat="HH:mm" minuteValues="0,15,30,45" (ionChange)=changeTime($event) (click)="changeTime(false, 'checkIn')">
              </ion-datetime>
            </ion-item>
          </ion-col>
          <ion-col col-6>
            <ion-item>
              <ion-label><ion-icon name="clock"></ion-icon> Out</ion-label>
              <ion-datetime displayFormat="HH:mm" minuteValues="0,15,30,45" (ionChange)=changeTime($event) (click)="changeTime(false, 'checkOut')"></ion-datetime>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col (click)="checkErrors()">
            <button ion-button [disabled]="!checkIn.date || !checkOut.date || !checkIn.time || !checkOut.time" (click)="submitDateTime()" col-12>Submit</button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `,
})
export class CalendarComponent {

  /* [ADMIN VARIABLES] */

  minHoursForRoom = 8;      // minimal hours for rent
  discounts: [              // discounts for rent: min days and discoun coeficient
    { days: 7, coef: 0.95 },
    { days: 14, coef: 0.87 },
    { days: 31, coef: 0.70 },
    { days: 365, coef: 0.60 }
  ];

  defaultCheckInTime: "12:00";    // Will be displayed as default value
  defaultCheckOutTime: "09:00";   // Most visitors stick with default

  // if empty every time is available
  earliestCheckInTime: "07:00";   // Hotel is closed before this time
  latestCheckOutTime: "01:00";    // Hotel does not check out after this time

  maxDaysToRent: 365;             // How many days person can rent at once
  minDaysToRent: 1;

  room = [];
  cache = "";     // Here checkIn / checkOut string is passed. Made because ionChange sucks and cant support 2 args
  checkIn = {
    date: "",
    time: ""
  };
  checkOut = {
    date: "",
    time: ""
  };

  unavailableDates = [];    // 4 future
  constructor(
    params: NavParams,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController
  ) { console.log('UserId', params.get('userId')); }

  checkErrors(){
    // checks validation errors to show toast
    if(!this.checkIn.date || !this.checkOut.date){
      this.showToast(`Please, select both Check In and Check Out days. 
      Pick range or double click on single day if you want one night reservation`, 3000);
    }
    else if (!this.checkIn.time){
      this.showToast(`Please, select valid Check In time`, 3000);
    }
    else if (!this.checkOut.time){
      this.showToast(`Please, select valid Check Out time`, 3000);
    }
  }

  showToast(msg, time) {
    // popup (toast, snackbar) for error display after validation
    let toast = this.toastCtrl.create({
      message: msg,
      duration: time,
      position: 'bottom'
    });
  
    toast.present();
  }

  changeDate(newDate){

    this.checkIn.date = newDate.from;
    this.checkOut.date = newDate.to;
  }

  changeTime(newTime, newParam = ""){
    if(newParam !== ""){
      this.cache = newParam;
    }
    if(this.cache !== "" && newTime){
      // default return for minute is 0, therefore ternary check
      this[this.cache].time = `${newTime.hour}:${newTime.minute === 0 ? "00" : newTime.minute}`;
    }
  }

  submitDateTime(){
    if(!this.checkIn.date || !this.checkIn.time){
      this.checkIn.date = '01.01.2017';
      this.checkIn.time = '12:00';
      console.error("[CalendarComponent]: Validation error. Either Check In date or time is undefined");
    }
    if(!this.checkOut.date || !this.checkOut.time){
      this.checkOut.date = '01.01.2017';
      this.checkOut.time = '12:00';
      console.error("[CalendarComponent]: Validation error. Either Check Out date or time is undefined");
    }
    else this.viewCtrl.dismiss({checkIn: this.checkIn, checkOut:this.checkOut});
  }


  
  
}
