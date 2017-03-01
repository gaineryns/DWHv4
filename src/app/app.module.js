"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var app_component_1 = require('./app.component');
var page1_1 = require('../pages/page1/page1');
var products_1 = require('../pages/products/products');
var login_1 = require('../pages/login/login');
var register_1 = require('../pages/register/register');
var auth_service_1 = require('../providers/auth-service');
var page1_2 = require('../pages/page1/page1');
var data_1 = require('../providers/data');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                page1_1.Page1,
                products_1.Page2,
                login_1.LoginPage,
                register_1.RegisterPage,
                page1_2.ModalContent
            ],
            imports: [
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp)
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                page1_1.Page1,
                products_1.Page2,
                login_1.LoginPage,
                register_1.RegisterPage,
                page1_2.ModalContent
            ],
            providers: [auth_service_1.AuthService, data_1.Data]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
