
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UsersService } from './../../../Services/users/users.service';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartStateService } from '../../data-access/cart-state.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {


  cartState = inject(CartStateService).state;


  constructor(private UsersService:UsersService) {}
  
    isLogged():boolean{
      return this.UsersService.getCurrentUser()!=null;
    }

    isAdmin(): boolean {
      const user = this.UsersService.getCurrentUser();
      return user?.email === 'admin@admin.com';
    }

    onClickLogout(): void {
      this.UsersService.logOut().then(() => {

        window.location.href = '/login';
      }).catch(error => console.log(error));
    }

}
