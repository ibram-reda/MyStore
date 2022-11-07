import { Product } from './../../../Models/product';
import { CartItem } from './../../../Models/cart-item';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent {

  @Input("Item") item : CartItem = {
    product:{
      id:0,
      name:'',
      price:0,
      url:'',
      description:''
    },
    Count:0
  }
  @Output() Delete = new EventEmitter<number>();


  constructor() { }

  removeItem(){
    this.Delete.emit(this.item.product.id);
  }

}
