import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service';
import { MenuController, NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  username = "";
  email ="";
  constructor(public navCtrl: NavController ,private auth: AuthService,  public menu: MenuController) {
    let info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;
  }

  public logout(){
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage);
    })
  }
}
