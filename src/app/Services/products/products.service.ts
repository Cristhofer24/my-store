/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

//Creacion de interface
 export interface Product {
   id:string;
   name:string;
   categoria:string;
   tipo:string;
   descripcion:string;
   precio:number;
   imagen:string;
 }

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

push(response:any){
  throw new Error('Method not implemented.');
}
  constructor(private firestore:Firestore) { }

  //read trae los productos
  getProducts(): Observable<Product[]> {

    const todoRef = collection(this.firestore, 'products');

    return collectionData(todoRef, { idField: 'id' }) as Observable<Product[]>
      }

//create almacena los productos
      addProduct(product: Product): Promise<any> {

        const productRef = collection(this.firestore, 'products');

        return addDoc(productRef, product);
      }



}
