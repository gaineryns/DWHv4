import { Component } from '@angular/core';
import {NavController, NavParams, AlertController, LoadingController, Loading, MenuController, ToastController} from 'ionic-angular';
import { RegisterPage } from "../register/register";
import {AuthService} from "../../providers/auth-service";
import { ProductsPage } from "../products/products"
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public menu:MenuController) {

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
          this.menu.enable(true);
          this.navCtrl.setRoot(ProductsPage);
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
