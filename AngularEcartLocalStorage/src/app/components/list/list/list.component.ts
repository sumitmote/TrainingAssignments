import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartitemsService } from 'src/app/services/cartitems.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductServiceService, private cartserv: CartitemsService) { }
  @Output() selectedProduct = new EventEmitter();

  ngOnInit(): void {
    this.products = this.service.getProducts();
    this.show();
  }

  LoadData(product: Product) {
    this.selectedProduct.emit(product);
  }

  Delete(pname: string) {
    if (confirm('Are you sure you want to delete?')) {
      this.service.Delete(pname);
    }
  }

  show() {
    this.products = this.service.getProducts();
  }

  addToCart(product: Product) {
    this.cartserv.addToCart(product);
  }

 
}
