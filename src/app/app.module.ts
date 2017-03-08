import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1} from '../pages/page1/page1';
import {ProductsPage, ModalContent1} from '../pages/products/products';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AuthService} from '../providers/auth-service';
import { ModalContent } from '../pages/page1/page1';
import { Data } from '../providers/data';

import { ProductService } from '../providers/product-service'
import {RangePage} from "../pages/range/range";
import {PickingPage} from "../pages/picking/picking";

@NgModule({
  declarations: [
    MyApp,
    Page1,
    ProductsPage,
    LoginPage,
    RegisterPage,
    ModalContent,
    ModalContent1,
    WelcomePage,
    RangePage,
    PickingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    ProductsPage,
    LoginPage,
    RegisterPage,
    ModalContent,
    ModalContent1,
    WelcomePage,
    RangePage,
    PickingPage
  ],
  providers: [AuthService, Data,ProductService ]
})
export class AppModule {}
