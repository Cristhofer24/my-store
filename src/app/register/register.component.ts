/* eslint-disable no-unexpected-multiline */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsersService } from '../Services/users/users.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private usersService:UsersService,private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    });
  }

  onClickRegister():void{
    this.usersService.register(this.form.value).then
    ((response)=>{
      console.log(response);
    }).catch(error=>console.log(error))
    }


}
