/* eslint-disable no-constant-binary-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { UsersService } from '../Services/users/users.service';



export const permissionsGuard: CanActivateFn = (route, state) => {

  const  usersService=inject(UsersService);
  const router=inject(Router);
  if(!usersService.getCurrentUser()===null){
    router.navigate(['/login']);
  
    return false;
  }
  return usersService.getCurrentUser()!==null;
  };
