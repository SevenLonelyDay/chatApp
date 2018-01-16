import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toUser: object;

  constructor(public navCtrl: NavController) {
    this.toUser = {
      toUserId: '210000198410281948',
      toUserName: 'Hancock'
    }
  }

}
