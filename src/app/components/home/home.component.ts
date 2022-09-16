import { Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';
import { AuthService } from 'src/app/services/auth.service';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  baskets:BasketModel[]=[]
  isAuth:boolean=false
constructor(private basketService:BasketService,private authService:AuthService){}
ngOnInit(): void {
this.baskets=this.basketService.baskets
}
}
