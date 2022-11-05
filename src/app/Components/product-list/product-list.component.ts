import { ProductService } from './../../Services/product.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  Products : Product[] = [];
  constructor(private prodectService:ProductService) { }

  ngOnInit(): void {
    this.prodectService.getProductList().subscribe(res=>this.Products = res);
  }

}
