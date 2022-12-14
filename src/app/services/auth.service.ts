import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/token';
import { ErrService } from './err.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private router: Router,
    private errorService:ErrService
  ) {}

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  login(loginModel: LoginModel): boolean {
    let api = this.apiUrl+'users/login';
    this.httpClient
      .post<SingleResponseModel<TokenModel>>(api, loginModel)
      .subscribe(
        (res) => {
          localStorage.setItem('token', res.data.token);
          this.toastrService.success('Giriş Başarılı!');
          this.isAuth = true;
          this.router.navigate(['/']);
          return true;
        },
        (err) => {
         this.errorService.errorHandler(err)
          return false;
        }
      );
    return true;
  }
  logout() {
    localStorage.removeItem('token');
    this.isAuth = false;
    this.router.navigate(['/login']);
  }
}
