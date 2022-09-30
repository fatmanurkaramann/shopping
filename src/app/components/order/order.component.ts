import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';
import { OrderModel } from 'src/app/models/order';
import { OrderDtoModel } from 'src/app/models/orderDtoModel';
import { BasketService } from 'src/app/services/basket.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit, AfterContentChecked {
  orders: OrderDtoModel[] = [];
  baskets: BasketModel[] = [];
  constructor(
    private orderService: OrderService,
    private basketServie: BasketService
  ) {}

  ngOnInit(): void {
    this.getList();
  }
  ngAfterContentChecked(): void {}

  getList() {
    this.orderService.getList().subscribe((res) => {
      this.orders = res.data;


    });
  }
}
