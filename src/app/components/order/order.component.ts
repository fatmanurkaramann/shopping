import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';
import { OrderModel } from 'src/app/models/order';
import { BasketService } from 'src/app/services/basket.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit,AfterContentChecked {
  orders:OrderModel[]=[]
  baskets:BasketModel[]=[]
  constructor(private orderService:OrderService,private basketServie:BasketService) { }

  ngOnInit(): void {
    this.baskets=this.basketServie.baskets

  }
  ngAfterContentChecked(): void {
    this.orders=this.orderService.orders
  }
}
