import { CartItem } from './../../Models/cart-item';
import { Product } from './../../Models/product';
import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems:CartItem[] = [];

  constructor(private shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
    this.cartItems = this.shoppingCart.CartItems;
  }

  get Total():number
  {
    let total = 0;
    this.cartItems.forEach(item=>{
      total += item.Count * item.product.price;
    })
    return total;
  }
}
