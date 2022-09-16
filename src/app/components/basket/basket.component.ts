import { AfterContentChecked, AfterViewChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit,AfterContentChecked {
  baskets: BasketModel[] = [];
  total: number = 0;
  constructor(
    private toastrService: ToastrService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.baskets = this.basketService.baskets;

  }
  ngAfterContentChecked(): void {
    this.total = this.basketService.total;

  }


  deleteItem(basket: BasketModel) {
    this.basketService.deleteItem(basket);
  }

  changeProduct(basket: BasketModel,quantity:any) {
   this.basketService.changeProduct(basket,quantity.value)
  }

}
