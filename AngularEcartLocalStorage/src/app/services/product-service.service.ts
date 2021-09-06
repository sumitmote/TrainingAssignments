import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Product[] = [];


  ngOnInit(): void {
    this.CreateLocal();
  }

  constructor() {

  }

  CreateLocal() {
    localStorage.setItem('productlist', JSON.stringify(this.products));
  }

  getProducts() {
    this.GetLocal();
    return this.products;
  }

  Add(product: Product) {
    this.products.push(product);
    this.CreateLocal();
  }

  Edit(obj: Product) {
    const index = this.products.findIndex(data => data.pname === obj.pname);
    this.products[index] = obj;
    this.CreateLocal();
  }

  Delete(pname: string) {
    const index = this.products.findIndex(data => data.pname === pname);

    if (pname !== null) {
      this.products.splice(index, 1);
      this.CreateLocal();
    }
  }

  GenerateCode() {
    let pname = "";
    if (this.products == null || this.products.length === 0) {
      pname = "No Name";
    } else {
      const index = this.products.length - 1;
      pname = (this.products[index].pname);
    }
    return pname;
  }

  GetLocal() {
    if (localStorage.getItem('productlist') == null) {
      this.products = [];
    } else {
      this.products = JSON.parse(localStorage.getItem('productlist') || '{ }');
    }

  }

  EraseLocal() {
    localStorage.removeItem('productlist');
  }
}
