/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable no-irregular-whitespace */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Product, ProductsService } from '../Services/products/products.service';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.scss'
})
export class AdministradorComponent {
  product: Product[] = [];
  form: FormGroup;
  constructor(private productService: ProductsService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({

      name:["", Validators.required],
      categoria:["", Validators.required],
      tipo:["", Validators.required],
      descripcion:["", Validators.required],
      precio:["", Validators.required],
      imagen:[""],
    });
  }
ngOnInit(): void {
  this.productService.getProducts().subscribe((product) => {
    this.product = product;
  });
}

//traer datos
getProducts(): void {
  this.productService.getProducts().subscribe((product) => {
    this.product = product;
  });
}
//add
addProduct(): void {
  if (this.form.invalid) return;
  const product = this.form.value;

  this.productService.addProduct(product)
    .then((response) => {
      console.log('Product added successfully:', response);
      this.product.push(response);
      this.form.reset();
    })
    .catch((error) => {
      console.log('Error adding product:', error);
    });
}


  isModalOpen = false;
  isModalOpen1 = false;

  openModal() {
    this.isModalOpen = true;
  }
  openModal1() {
    this.isModalOpen1 = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isModalOpen1 = false;
  }

}
