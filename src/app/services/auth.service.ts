import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  isAuthenticated() {
    return this.isAuth;
  }
  login(loginModel: LoginModel):boolean {
    let api = 'https://webapi.angulareducation.com/api/users/login';
    this.httpClient
      .post<SingleResponseModel<TokenModel>>(api, loginModel)
      .subscribe(
        (res) => {
          localStorage.setItem('token', res.data.token);
          this.toastrService.success("Giriş Başarılı!");
          this.isAuth = true;
          this.router.navigate(['/']);
          return true
        },
        (err) => {
          this.toastrService.error(err.error);
          return false
        }
      );
      return true
  }
  logout() {
    localStorage.removeItem("token")
    this.isAuth = false;
    this.router.navigate(['/']);
  }
}
