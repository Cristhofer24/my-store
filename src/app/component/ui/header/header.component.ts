import { UsersService } from './../../../Services/users/users.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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

    onClickLogout(){
      this.UsersService.logOut();
    }

}
