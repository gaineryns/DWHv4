import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductService {
data ="";
  constructor(public http: Http) {
    console.log('Hello ProductService Provider');
  }

  load(){
    if(this.data){
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      //this.http.get('https://randomuser.me/api/?results=10')
        this.http.get('https://randomuser.me/api/?results=10')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data.results;
            resolve(this.data);
          });
    });
  }


}
