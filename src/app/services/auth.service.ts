import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth:boolean=false
  constructor() { }

  isAuthenticated(){

      return this.isAuth

  }
  login(){
    this.isAuth=true
  }
  logout(){
    this.isAuth=false
  }
}
