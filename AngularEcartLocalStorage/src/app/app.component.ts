import { Component } from '@angular/core';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //title = 'localAngularCart';
  product!: Product;
  getProducts(event: any) {
    this.product = event;
  }
}
