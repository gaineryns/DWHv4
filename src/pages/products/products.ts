import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  MenuController, NavController, ModalController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import {LoginPage} from "../login/login";
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-page2',
  templateUrl: 'products.html'
})
export class ProductsPage {

  searchTerm: string = '';
  searchControl: FormControl;
  products: any;
  searching: any = false;

  constructor(public navCtrl: NavController, public dataService: Data, public auth: AuthService, public menu: MenuController, public modalCtrl: ModalController) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {

    this.setFilteredProducts();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching =false;
      this.setFilteredProducts();

    });
  }

  onSearchInput(){
    this.searching = true;
  }

  setFilteredProducts() {

    this.products = this.dataService.filterProducts(this.searchTerm);

  }

  openModal(product) {
    let modal = this.modalCtrl.create(ModalContent, product);
    modal.present();
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}

@Component({
  template:`
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-left>
          <img src="{{product.picture}}">
        </ion-avatar>
        <h2>{{product.nom}}</h2>
        <p>{{product.quantity}}</p>
      </ion-item>
   </ion-list>
</ion-content>
`
})

export class ModalContent{
  product;
  constructor(public params: NavParams,public viewCtrl: ViewController) {
    this.product = this.params.get('prod');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}