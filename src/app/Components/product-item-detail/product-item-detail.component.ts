import { ProductService } from './../../Services/product.service';
import { Product } from './../../Models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit {

  isPageIntialized = false;
  product : Product|null = null;
  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id:number = this.route.snapshot.params['id'];
    this.productService.getProduct(id).subscribe(res=>this.product = res);
    this.isPageIntialized= true;
  }

}
