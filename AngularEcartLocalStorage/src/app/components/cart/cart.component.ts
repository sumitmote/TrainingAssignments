import { Component, OnInit } from '@angular/core';
import { CartItems } from 'src/app/models/Cartitems';
import { Product } from 'src/app/models/Product';
import { CartitemsService } from 'src/app/services/cartitems.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product!: Product;
  cartItem!: CartItems[];
  grandTotal = 0;

  constructor(private cartitemservice: CartitemsService) { }

  ngOnInit(): void {
    this.cartItem = JSON.parse(localStorage.getItem('mycart') || '{}');
    this.grandTotal = (JSON.parse(localStorage.getItem('grandTotal') || '{}'));
    console.log("GRAND TOTAL" + this.grandTotal);

  }
  emptycart() {
    this.cartitemservice.clearCart();
    window.location.reload()
  }

  deletefrmCart(item: any, itemIndex: any) {
    let grand = 0;
    grand = (JSON.parse(localStorage.getItem('grandTotal') || '{}'));
    grand = grand - item.total;
    localStorage.setItem('grandTotal', JSON.stringify(grand));
    console.log("Delete", itemIndex);
    this.cartItem = JSON.parse(localStorage.getItem('mycart') || '{}');
    // Delete itemIndex element from the array
    this.cartItem.splice(itemIndex, 1);
    localStorage.setItem("mycart", JSON.stringify(this.cartItem));
    location.reload();
  }
}





  // deleteItem(item: any) {
  //   this.cartservice.deleteItem(item);
  //   let domItem = document.getElementById(`cart-item` + item.product.id);
  //   setTimeout(() => {
  //     domItem.classList.add('delete-style');
  //     domItem.parentNode.removeChild(domItem);
  //   }, 1000);


  // addQty(item: any) {
  //   this.cartservice.addQty(item);
  // }






