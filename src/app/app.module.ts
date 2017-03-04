import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1} from '../pages/page1/page1';
import { ProductsPage } from '../pages/products/products';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AuthService} from '../providers/auth-service';
import { ModalContent } from '../pages/page1/page1';
import { Data } from '../providers/data';

import { ProductService } from '../providers/product-service'

@NgModule({
  declarations: [
    MyApp,
    Page1,
    ProductsPage,
    LoginPage,
    RegisterPage,
    ModalContent
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
    ModalContent
  ],
  providers: [AuthService, Data,ProductService ]
})
export class AppModule {}
