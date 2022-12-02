import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDtoModel } from 'src/app/models/orderDtoModel';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
orders:OrderDtoModel
id:number
  constructor(private activatedRoute:ActivatedRoute,
    private orderService:OrderService) { }

  ngOnInit(): void {
    this.getById()


  }
  getById(){

     console.log( this.orders)
  }
}
