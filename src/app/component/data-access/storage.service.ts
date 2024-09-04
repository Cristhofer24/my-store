import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductItemCart } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  loadProducts(): Observable<ProductItemCart[]>{
    const rawProducts=localStorage.getItem('products');
    return of(rawProducts ? JSON.parse(rawProducts) : []);
  }

  saveProducts(Products:ProductItemCart[]):void{
    localStorage.setItem('products',JSON.stringify(Products));
  }

}
