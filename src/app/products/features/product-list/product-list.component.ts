/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from './../../../component/interface/product.interface';
import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../../component/data-access/cart-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './product-list.component.html',
  providers: [ ProductsStateService ],
})
export default class ProductListComponent {

productsState=inject(ProductsStateService);
cartState=inject(CartStateService).state;
  form: any;


changePage(){

  const page = this.productsState.state.page() + 1;

  this.productsState.changePage$.next(page);
}
addToCart(product: Product) {
  this.cartState.add({
    product,
    quantity: 1,
  });
}
}


