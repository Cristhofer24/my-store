import { collection, collectionData, doc, docData, Firestore, limit, query } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from '../../component/interface/product.interface';


const LIMIT = 10;

@Injectable({ providedIn: 'root' })
export class ProductsService{
  constructor(private firestore:Firestore){}

  getProducts(page: number): Observable<Product[]> {
    const productsCollection = collection(this.firestore, 'products');
    const productsQuery = query(productsCollection, limit(page * LIMIT));

    return collectionData(productsQuery, { idField: 'id' }) as Observable<Product[]>;
  }
  getProduct(id: string): Observable<Product> {
    const productDoc = doc(this.firestore, `products/${id}`);
    return docData(productDoc, { idField: 'id' }) as Observable<Product>;
  }

}
