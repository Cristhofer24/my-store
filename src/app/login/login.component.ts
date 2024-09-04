/* eslint-disable no-unexpected-multiline */
import { UsersService } from './../Services/users/users.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private usersService:UsersService,private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    });
  }

  onClickLogin():void{
    this.usersService.login(this.form.value).then
    ((response)=>{
      console.log(response);
    }).catch(error=>console.log(error))
  }

  onClickLoginWithGoogle():void{
    this.usersService.loginWithGoogle().then
    ((response)=>{
      console.log(response);
    }).catch(error=>console.log(error))
  }

}
