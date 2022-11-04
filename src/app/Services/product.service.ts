import { Product } from './../Models/product';
import { HttpClient } from '@angular/common/http';
import { TaggedTemplateExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map,filter, Observable,of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly BaseUrl = "/assets/data.json"
  products:Observable<Product[]>|null = null;
  constructor(private http:HttpClient) { }

  getProductList():Observable<Product[]>
  {
    if(this.products === null){
      this.products= this.http.get<Product[]>(this.BaseUrl);
    }
    return this.products;
  }

  getProduct(id:number): Observable<Product|null>{
    return this.getProductList().pipe(
      map(res=> res.find(x=>x.id == id)??null)

      );

  }
}
