"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var Page2 = (function () {
    function Page2(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.searchTerm = '';
        this.searching = false;
        this.searchControl = new forms_1.FormControl();
    }
    Page2.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setFilteredProducts();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredProducts();
        });
    };
    Page2.prototype.onSearchInput = function () {
        this.searching = true;
    };
    Page2.prototype.setFilteredProducts = function () {
        this.products = this.dataService.filterProducts(this.searchTerm);
    };
    Page2 = __decorate([
        core_1.Component({
            selector: 'page-page2',
            templateUrl: 'products.html'
        })
    ], Page2);
    return Page2;
}());
exports.Page2 = Page2;
