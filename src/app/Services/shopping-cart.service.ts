import { CartItem } from './../Models/cart-item';
import { Product } from './../Models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItems:CartItem[] = [
    { product:{
      id: 1,
      name: "Book",
      price: 9.99,
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "You can read it!"
    },
    Count:6
  }
];

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
