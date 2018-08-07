import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalVarProvider } from "../../providers/local-var/local-var"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(
    public navCtrl: NavController, 
    public localVarService: LocalVarProvider
  ) { 
    this.variables = this.localVarService.query();
  }

  root = 'AboutPage';
  variables: Object[];

  open(pageName) {
    this.root = pageName;
  }

  myFunction(thing){
    // console.log(typeof(thing));
    // console.log(thing);
    console.log("xxxx");
  }
}
