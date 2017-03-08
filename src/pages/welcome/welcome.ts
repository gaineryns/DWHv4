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
      title: "Bienvenue !!",
      description:  "",
      image: "assets/images/SWR.png",
    },
    {
      title: "Qu'est ce que DWH! ?",
      description: "<b>DWH! App</b> est l'application mobile qui vous permettra de non seulement de reduite le temps de préparation d'une commande mais aussi de l'effectuer un inventaire rapide et facile de votre entrepôt.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  startApp(){
    this.navCtrl.setRoot(LoginPage,{},{
      animate: true,
      direction: 'forward'
    });
  }
}
