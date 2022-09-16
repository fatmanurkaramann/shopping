import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';
import { AuthService } from 'src/app/services/auth.service';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket-icon',
  templateUrl: './basket-icon.component.html',
  styleUrls: ['./basket-icon.component.css'],
})
export class BasketIconComponent implements OnInit,AfterContentChecked {
  baskets: BasketModel[] = [];
  isAuth: boolean = false;
  total:number=0
  constructor(
    private basketService: BasketService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.baskets = this.basketService.baskets;
  }
  ngAfterContentChecked(): void {
    this.total = this.basketService.total;

  }
}
