import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { Page1 } from '../page1/page1';
import {AuthService} from "../../providers/auth-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }
  public createAccount(){
    this.navCtrl.push(RegisterPage);
  }
  public login(){
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if(allowed){
        setTimeout(() => {
          this.loading.dismiss();
          this.navCtrl.setRoot(Page1);
        });
      } else{
        this.showError("Acces Denied");
      }
    },
    error => {
      this.showError(error);
    });
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait ...'
    });
    this.loading.present();
  }

  showError(text){
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
