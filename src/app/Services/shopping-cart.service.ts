import { CartItem } from './../Models/cart-item';
import { Product } from './../Models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItems:CartItem[] = [];

  constructor() { }

  addProduct(product:Product){
    const existProduct = this.cartItems.find(i=>i.product.id == product.id);
    if(existProduct){
      existProduct.Count++;
      return;
    }
    this.cartItems.push({product:product,Count:1});
  }

  addCartItem(item:CartItem){
    const existProduct = this.cartItems.find(i=>i.product.id == item.product.id);
    if(existProduct){
      existProduct.Count += item.Count;
      return;
    }
    this.cartItems.push(item);
  }
 /**
  * Delete all items in the cart
  */
  Clear(){
    while(this.CartItems.length)
      this.CartItems.pop();
  }

  get CartItems():CartItem[]{
    return this.cartItems;
  }

  get ItemCount():number
  {
    let count = 0;
    this.cartItems.forEach(item=>count+=item.Count);
    return count
  }
}
