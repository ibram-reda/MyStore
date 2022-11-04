import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Product } from './../../Models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product = {
    id:0,
    name:'',
    price:0,
    url:'',
    description:''
  };
  constructor(private ShoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
  }

  AddToCart(){
    this.ShoppingCart.addProduct(this.product);
  }
}
