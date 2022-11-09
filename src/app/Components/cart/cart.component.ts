import { UserInfo } from './../../Models/user-info';
import { CartItem } from './../../Models/cart-item';
import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  confirmed: boolean = false;
  userInfo: UserInfo = {
    fullName: '',
    address: '',
    creditCardNumber: 0,
  };
  FinalTotalValue = 0;
  ControlesWithErrors: string[] = [];

  constructor(private shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {
    this.cartItems = this.shoppingCart.CartItems;
  }

  get Total(): number {
    let total = 0;
    this.cartItems.forEach((item) => {
      total += item.Count * item.product.price;
    });
    return total;
  }

  OnSubmit(formData: NgForm) {
    if (formData.invalid) {
      formData.form.markAllAsTouched();
      return;
    }
    this.FinalTotalValue = this.Total;
    this.confirmed = true;
    this.shoppingCart.Clear();
  }

  OnDelete(ItemId: number) {
    this.shoppingCart.remove(ItemId);
  }

  OnModelChange(controlData: NgModel) {
    const controlName = controlData.name;
    const ErrorIndx = this.ControlesWithErrors.findIndex(a => a === controlName);
    if (controlData.invalid && ErrorIndx < 0) {
      this.ControlesWithErrors.push(controlName);
      return;
    }
    if (controlData.valid && ErrorIndx >= 0)
      this.ControlesWithErrors.splice(ErrorIndx, 1);
  }
}
