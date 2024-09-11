import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {

  activeIndex = 0;
  totalSlides = 3;

  prevSlide(): void {
    this.activeIndex = (this.activeIndex === 0) ? this.totalSlides - 1 : this.activeIndex - 1;
  }

  nextSlide(): void {
    this.activeIndex = (this.activeIndex === this.totalSlides - 1) ? 0 : this.activeIndex + 1;
  }

  showSlide(index: number): void {
    this.activeIndex = index;
  }
}
