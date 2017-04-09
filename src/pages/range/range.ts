import { Component } from '@angular/core';
import {NavController, NavParams, AlertController, Platform, ToastController} from 'ionic-angular';
import {NFC, Ndef} from 'ionic-native';
/*
  Generated class for the Range page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-range',
  templateUrl: 'range.html'
})
export class RangePage {

  public tag:any;
  constructor(public toastCtrl: ToastController ,public Alert: AlertController ,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RangePage');
  }

  cekNFC() {
    NFC.enabled()
        .then(() => {
          console.log("NFC is ready");
          this.addListenNFC();
          // IF Disabled
        })
        .catch(err => {
          console.log(err);
          let alert = this.Alert.create({
            subTitle : "NFC DISABLED",
            buttons: [{ text : "OK"},{ text : "Go Setting",
              handler : () => {
                NFC.showSettings();
              }
            }]
          });
          alert.present();
        });
  }

  addListenNFC() {
    console.log("Listening...");
    NFC.addNdefListener(nfcEvent => this.sesReadNFC(nfcEvent.tag));
    // <-- does not work for me

  }

  sesReadNFC(data):void {
    this.tag = JSON.parse(JSON.stringify(data, null, 4));
    console.log(JSON.stringify(data, null, 4));
  }
  presentToast(){
    let toast = this.toastCtrl.create({
      message: 'NFC enable',
      duration: 3000
    });
  }
}
