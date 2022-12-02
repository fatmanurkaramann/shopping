import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BasketModel } from 'src/app/models/basket';
import { OrderModel } from 'src/app/models/order';
import { OrderDtoModel } from 'src/app/models/orderDtoModel';
import { BasketService } from 'src/app/services/basket.service';
import { OrderService } from 'src/app/services/order.service';
import { OrderDetailComponent } from './order-detail/order-detail/order-detail.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: OrderDtoModel[] = [];
  constructor(private orderService: OrderService,private basketService:BasketService) {}
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.orderService.getList().subscribe((res) => {
      this.orders = res.data;
    });
  }
}
