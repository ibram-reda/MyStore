import { CartItem } from './../Models/cart-item';
import { Product } from './../Models/product';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Expansion } from '@angular/compiler';

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
    if(item.Count<0)
      throw new Error('item count can not be negitve');
    // notify user to add item
    const msg = `a ${item.Count} item${item.Count>1?'s':''} of ${item.product.name} will add to ur cart`;
    this._snackBar.open(msg,'Cool',{duration:2000,verticalPosition:'top'});
    // Add item to the cart
    const existProduct = this.cartItems.find(i=>i.product.id == item.product.id);
    if(existProduct){
      existProduct.Count += item.Count;
      return;
    }
    this.cartItems.push(item);
  }

  remove(ItemId:number){
    const ProductIndex = this.cartItems.findIndex(i=>i.product.id == ItemId);
    if(ProductIndex<0) return;
    // notify user to add item
    const ProductObj:CartItem|undefined = this.cartItems.find(i=>i.product.id == ItemId);
    const msg = `${ProductObj?.product.name} removed from ur cart`;
    this._snackBar.open(msg,'Cool',{duration:2000,verticalPosition:'top'});
    this.CartItems.splice(ProductIndex,1);
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
