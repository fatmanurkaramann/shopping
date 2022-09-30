import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private spinner:NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",[Validators.required, Validators.email]],
      password: ["",[Validators.required, Validators.min(2)]],
    })
  }

  login(){
    this.spinner.show();
    if (this.loginForm.valid) {
      let loginModel: LoginModel = this.loginForm.value;
      let result = this.authService.login(loginModel);
      if (!result) {
        this.spinner.hide();
      }
    }else{
      this.spinner.hide();
      this.toastrService.error("Zorunlu alanları doldurun");
    }
  }

}
