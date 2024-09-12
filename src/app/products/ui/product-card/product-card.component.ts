/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, EventEmitter, Input, input, OnInit, Output, output } from '@angular/core';
import { Product } from '../../../component/interface/product.interface';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../data-access/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  products: Product[] = [];
  currentPage: number = 1;


  constructor(private productosService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void {
    this.productosService.getProducts(this.currentPage).subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  add(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.addToCart.emit(this.product);
  }

  loadMore(): void {
    this.currentPage += 1;
    this.loadProducts();
  }





  // product = input.required<Product>();

  // addToCart = output<Product>();
  // add(event: Event) {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   this.addToCart.emit(this.product());
  // }

}
