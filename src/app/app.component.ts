import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { ProductsPage } from '../pages/products/products';
import { WelcomePage } from '../pages/welcome/welcome';
import {RangePage} from "../pages/range/range";
import {PickingPage} from "../pages/picking/picking";
import {TestnfcPage} from "../pages/testnfc/testnfc";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component:""},
      { title: 'All Produits', component: ProductsPage },
      { title: 'Inventaire', component: Page1 },
      { title: 'Product In', component: RangePage },
      { title: 'Product Out', component: PickingPage },
      { title: 'Test Nfc', component: TestnfcPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
