import { Component } from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';
import {LoginPage} from "../login/login";
/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.menu.enable(false);
  }
  slides = [
    {
      title: "",
      description:  "Bienvenue sur SWH! App.",
      image: "assets/images/SWR.jpg",
    },
    {
      title: "Qu'est ce que DWH! ?",
      description: "<b>DWH! App</b> Vous accompagne dans la gestion de votre entrepôt.",
      image: "assets/images/logo2.jpg",
    }

  ];

  startApp(){
    this.navCtrl.setRoot(LoginPage,{},{
      animate: true,
      direction: 'forward'
    });
  }
}
