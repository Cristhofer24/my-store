import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
//carrusel 1
  activeIndex = 0;
  totalSlides = 3;
  //carrusel 2
  activeIndex1 = 0;
  totalSlides1 = 3;

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
}
