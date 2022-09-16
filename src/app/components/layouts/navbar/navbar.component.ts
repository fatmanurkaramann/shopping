import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as $ from 'jquery'
@Component({
  styles: [`.router-link-active { background-color: red; }`],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterContentChecked {
isAuth:boolean=false
filterText:string=""
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isAuth=this.authService.isAuth;

  }
  login(){
    this.authService.login()
  }
  logout(){
    this.authService.logout()
  }
  ngAfterContentChecked(): void {
    this.isAuth=this.authService.isAuth;

  }

}

