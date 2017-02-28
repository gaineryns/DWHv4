import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  searchTerm: string = '';
  searchControl: FormControl;
  products: any;
  searching: any = false;

  constructor(public navCtrl: NavController, public dataService: Data) {
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
}
