/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from '../component/interface/product.interface';
import { ProductsService } from '../products/data-access/products.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit {

  @ViewChild('track', { static: true }) track!: ElementRef;
  @ViewChild('slickList', { static: true }) slickList!: ElementRef;

  producto:Product[]=[];
  activeIndex2: number = 0;

  prevSlide2(): void {
    this.activeIndex2 = (this.activeIndex2 > 0) ? this.activeIndex2 - 1 : this.producto.length - 1;
  }

  nextSlide2(): void {
    this.activeIndex2 = (this.activeIndex2 < this.producto.length - 1) ? this.activeIndex2 + 1 : 0;
  }

  showSlide2(index: number): void {
    this.activeIndex2 = index;
  }



  constructor(private productoServicio:ProductsService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.getProducts();
    this.setupEventListeners();
  }
  getProductId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoServicio.getProduct(id).subscribe((product) => {
        this.product = product;
      });
    }

  }


  getProducts(): void {
    this.productoServicio.getProducts().subscribe(
      (products) => {
        this.producto = products;
        this.totalSlides1 = products.length;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }





//carrusel 1
  activeIndex = 0;
  totalSlides = 3;
  //carrusel 2
  activeIndex1 = 0;
  totalSlides1 =3;

  /////////////////////////////////////////////
//carrusel 1
  prevSlide(): void {
    this.activeIndex = (this.activeIndex === 0) ? this.totalSlides - 1 : this.activeIndex - 1;
  }

  nextSlide(): void {
    this.activeIndex = (this.activeIndex === this.totalSlides - 1) ? 0 : this.activeIndex + 1;
  }

  showSlide(index: number): void {
    this.activeIndex = index;
  }

  @Input() product!: Product;

  //////////////////////////////////////////////
  //Carrucel 2

  prevSlide1(): void {
    this.activeIndex1 = (this.activeIndex1 === 0) ? this.totalSlides1 - 1 : this.activeIndex1 - 1;
  }

  nextSlide1(): void {
    this.activeIndex1 = (this.activeIndex1 === this.totalSlides1 - 1) ? 0 : this.activeIndex1 + 1;
  }

  showSlide1(index: number): void {
    this.activeIndex1 = index;
  }


  //nuevo slide funcion

  setupEventListeners(): void {
    // const prevButton = document.getElementById('button-prev');
    // const nextButton = document.getElementById('button-next');

    // if (prevButton) {
    //   prevButton.addEventListener('click', () => this.processingButton('button-prev'));
    // }

    // if (nextButton) {
    //   nextButton.addEventListener('click', () => this.processingButton('button-next'));
    // }
  }

   processingButton(buttonType: string): void {
    const track = this.track.nativeElement;
    const slickList = this.slickList.nativeElement;
    const slicks = track.querySelectorAll('.slick');
    const slickWidth = slicks[0].offsetWidth;

    const trackWidth = track.scrollWidth; // Usar scrollWidth para obtener el tamaño total del track
    const listWidth = slickList.clientWidth; // Usar clientWidth para el tamaño del contenedor visible

    let leftPosition = parseFloat(track.style.left.slice(0, -2)) || 0;

    if (buttonType === 'button-prev') {
      this.prevAction(leftPosition, slickWidth, track);
    } else if (buttonType === 'button-next') {
      this.nextAction(leftPosition, trackWidth, listWidth, slickWidth, track);
    }
  }

  prevAction(leftPosition: number, slickWidth: number, track: any): void {
    if (leftPosition < 0) {
      track.style.left = `${Math.min(0, leftPosition + slickWidth)}px`;
    }
  }

  nextAction(leftPosition: number, trackWidth: number, listWidth: number, slickWidth: number, track: any): void {
    if (leftPosition > (trackWidth - listWidth)) {
      track.style.left = `${Math.max(trackWidth - listWidth, leftPosition - slickWidth)}px`;
    }
  }
}

