import { CartItem } from './../Models/cart-item';
import { Product } from './../Models/product';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItems:CartItem[] = [];

  constructor(private _snackBar: MatSnackBar) { }

  addProduct(product:Product){
    let item: CartItem ={product:product, Count:1};
    this.addCartItem(item);
  }

  addCartItem(item:CartItem){
    // notify user to add item
    const msg = `a ${item.Count} item${item.Count>1?'s':''} of ${item.product.name} will add to ur cart`;
    this._snackBar.open(msg,'Cool',{duration:10000,verticalPosition:'top'});
    // Add item to the cart
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
