/* eslint-disable no-irregular-whitespace */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.scss'
})
export class AdministradorComponent {
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

// ngAfterViewInit(): void {
//   // Ejecuta el clic en el botón una vez que el DOM está completamente cargado
//   const readProductButton = document.getElementById('readProductButton') as HTMLButtonElement;
  
//   if (readProductButton) {
//     readProductButton.click();
//   }
// }

}