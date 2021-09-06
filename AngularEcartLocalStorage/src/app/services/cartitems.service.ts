import { Injectable } from '@angular/core';
import { NEVER } from 'rxjs';
import { CartItems } from '../models/Cartitems';
import { Product } from '../models/Product';

let itemsInCart = [];
let cart = [];

@Injectable({
  providedIn: 'root'
})
export class CartitemsService {

  product!: Product;
  cartItem!: CartItems;
  emptyCart!: CartItems[];
  grand = 0;

  constructor() { }
  calcuGrandTotal(product: any) {
    if ((localStorage.getItem('grandTotal') == null)) {
      this.grand = product.pquantity * product.price;
      localStorage.setItem('grandTotal', JSON.stringify(this.grand));

    }
    else {
      this.grand = JSON.parse(localStorage.getItem('grandTotal') || '{}')

      this.grand = this.grand + (product.pquantity * product.price);
      localStorage.setItem('grandTotal', JSON.stringify(this.grand));

    }
    return this.grand;
  }

  addToCart(product: Product) {
    let local_storage;
    let itemsInCart = [];
    let index_i: any;
    const pquant = 1;

    this.grand = this.calcuGrandTotal(product);

    this.cartItem = {
      pname: product.pname,
      pdetails: product.pdetails,
      pimage: product.pimage,
      pquantity: pquant,
      price: product.price,
      total: product.price * pquant,
    }
    if (localStorage.getItem('mycart') == null) {
      local_storage = [];
      itemsInCart.push(this.cartItem);
      localStorage.setItem('mycart', JSON.stringify(itemsInCart));
      this.calcuGrandTotal(this.cartItem);
    }
    else {
      console.log("inside else block");
      local_storage = JSON.parse(localStorage.getItem('mycart') || '{}');
      var tempvarindex: any;
      var backup: any;
      for (var i in local_storage) {
        if (this.cartItem.pname == local_storage[i].pname) {
          tempvarindex = i;
          local_storage[i].pquantity += 1;
          local_storage[i].total = local_storage[i].pquantity * local_storage[i].price;
          this.calcuGrandTotal(this.cartItem);
          backup = local_storage[i];
        }
        //local_storage.splice(index_i, -1);
        break;
      }


    }
    if (this.cartItem) {
      itemsInCart.push(this.cartItem);
      local_storage.forEach(function (cartItem: any) {
        itemsInCart.push(cartItem);

      })
    }
    localStorage.setItem('mycart', JSON.stringify(itemsInCart));
    location.reload();
  }






  getItems() {
    return this.cartItem = JSON.parse(localStorage.getItem('mycart') || '{}');
  }

  deleteItem(item: any) {
    item = item;
    console.log("Deleting : ", item);
    let shopping_cart;
    let index;
    shopping_cart = JSON.parse(localStorage.getItem('mycart') || '{}');
    for (let i in shopping_cart) {
      if (item.product.name == shopping_cart[i].product.name) {
        index = i;
        console.log(index);
      }
    }
    shopping_cart.splice(index, 1);
    console.log("shopping_cart ", shopping_cart);
    localStorage.setItem('mycart', JSON.stringify(shopping_cart));
    if (localStorage.getItem('mycart') == null) {
      this.clearCart();
    }
    location.reload();

  }
  addQty(item: CartItems) {
    item = item;
    let shopping_cart;
    shopping_cart = JSON.parse(localStorage.getItem('mycart') || '{}');
    for (let i in shopping_cart) {
      if (item.pname == shopping_cart[i].pname) {
        shopping_cart[i].quantity += 1;
        item: null;
        break;
      }
    }
    localStorage.setItem('mycart', JSON.stringify(shopping_cart));

  }
  numberOfItems() {
    let itemsInCart = JSON.parse(localStorage.getItem('mycart') || '{}');
    return itemsInCart.length;
  }
  clearCart() {
    this.grand = 0;
    localStorage.setItem('grandTotal', JSON.stringify(this.grand));
    this.emptyCart = [];
    localStorage.setItem('mycart', JSON.stringify(this.emptyCart));
  }

}
