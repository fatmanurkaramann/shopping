import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit,AfterContentChecked {
  isAuth: boolean = false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isAuth=this.authService.isAuth
    $(function(){
      var text = $(".text-box");
      var dropdown = $(".dropdown");
      dropdown.hover(function(){
        $(".dropdown").toggleClass("active")
      })

    })
  }
  logout() {
    this.authService.logout();
  }
  ngAfterContentChecked(): void {
    this.isAuth = this.authService.isAuth;
  }
}
