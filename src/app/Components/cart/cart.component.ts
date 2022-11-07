import { UserInfo } from './../../Models/user-info';
import { CartItem } from './../../Models/cart-item';
import { Product } from './../../Models/product';
import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems:CartItem[] = [];
  confirmed:boolean = false;
  userInfo:UserInfo={
    fullName:'',
    address:'',
    creditCardNumber:0
  };
  FinalTotalValue = 0;
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

  OnSubmit(formData:NgForm){
    if(formData.invalid){
      formData.form.markAllAsTouched();
      return;
    }
    this.FinalTotalValue = this.Total;
    this.confirmed = true;
    this.shoppingCart.Clear();
  }

  OnDelete(ItemId:number){
    this.shoppingCart.remove(ItemId);
  }
}
