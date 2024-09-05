import { UsersService } from './../Services/users/users.service';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private usersService: UsersService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }

  onClickLogin(): void {
    this.usersService.login(this.form.value).then((response) => {
      console.log(response);
        const email = this.form.value.email;
        if(email ==='admin@admin.com'){
          this.router.navigate(['/dashboard']);
        }else{
          this.router.navigate(['/products']);
        }
    }).catch(error => console.log(error));
  }

  onClickLoginWithGoogle(): void {
    this.usersService.loginWithGoogle().then((response) => {
      console.log(response);

      this.router.navigate(['/products']);
    }).catch(error => console.log(error));
  }
}
