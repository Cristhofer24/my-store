/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, User } from '@angular/fire/auth';

export interface LoginInfo {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})

export class UsersService {
constructor(private auth:Auth){}

register({email,password}:LoginInfo):Promise<any> {
  return createUserWithEmailAndPassword(this.auth,email,password);
}
login({email,password}:LoginInfo):Promise<any> {
  return signInWithEmailAndPassword(this.auth,email,password);
}
loginWithGoogle():Promise<any> {
  return signInWithPopup(this.auth,new GoogleAuthProvider());
}
logOut():Promise<any> {
  return signOut(this.auth);
}
getCurrentUser():User|null{
return this.auth.currentUser;
}
}
