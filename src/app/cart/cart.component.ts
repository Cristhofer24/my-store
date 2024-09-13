
import { EmailService } from './../Services/email/email.service';
import { Component, inject, OnInit } from '@angular/core';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { CartStateService } from '../component/data-access/cart-state.service';
import { ProductItemCart } from '../component/interface/product.interface';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PaypalService } from '../Services/paypal/paypal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe,CommonModule],
  templateUrl: './cart.component.html',
  styles: ``,
})
export default class CartComponent implements OnInit{
  state = inject(CartStateService).state;


  constructor(private paypalService: PaypalService, private route: ActivatedRoute,private emailService: EmailService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params['paymentId']);
      });
  }
  pay(): void {
    this.paypalService.getAccessToken()
      .subscribe(accessToken => {
        this.paypalService.createWebProfile(accessToken.access_token, `Pago-${Math.random()}`)
          .subscribe(webProfile => {
            console.log(this.state.price.toString().split(":")[1].slice(1, -1));

            this.paypalService.createPayment(
              accessToken.access_token,
              webProfile.id,
              "http://localhost:4200/home",
              "http://localhost:4200/login",
              this.state.price.toString().split(":")[1].slice(1, -1),
              "Productos del carrito"
            ).subscribe(payment => {
              console.log(payment.id);
              window.location.href = payment.links[1].href;
            })
          })
      })
  }

///carrito con cuenta total



  onRemove(id: string) {
    this.state.remove(id);
  }

  onIncrease(product: ProductItemCart) {
    this.state.udpate({
      product: product.product,
      quantity: product.quantity + 1,
    });
  }

  onDecrease(product: ProductItemCart) {
    this.state.udpate({
      ...product,
      quantity: product.quantity - 1,
    });
  }

  onSendEmail(): void {
    const price = this.state.price.toString();
    console.log(price);
    this.emailService.sendEmail({
      name: 'My-Store',
      email: 'cristhofer.elian.gramal@gmail.com',
      htmlContent: `<h1>My-Store le informa que su Pago de $${price} ha sido exitoso</h1>`
    }).subscribe(response => console.log(response));
  }

  //modal
  msj=false;

  click(){
    this.msj=true;
  }

  close(){
    this.msj=false;
  }

}
