import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from '../models/basket';
import { OrderModel } from '../models/order';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  baskets: BasketModel[] = [];
  total: number = 0;
  orders:OrderModel[]=[]
  constructor(
    private toastrService: ToastrService,
    private orderService: OrderService
  ) {}

  addBasket(model: BasketModel) {
    let basketModel: BasketModel[] = this.baskets.filter(
      (p) => p.product == model.product
    );
    if (basketModel.length > 0) {
      model.quantity = basketModel[0].quantity + model.quantity;
      this.changeProduct(basketModel[0], model.quantity);
      this.toastrService.info('ürün sepete eklendi');
    } else {
      this.baskets.push(model);
      this.toastrService.info('ürün sepete eklendi');
      this.calc();
    }
  }
  deleteItem(basket: BasketModel) {
    let i = this.baskets.indexOf(basket);
    this.baskets.splice(i, 1);
    this.toastrService.error(basket.product.name + ' Ürün silindi');
    this.calc();
  }
  calc() {
    this.total = 0;
    this.baskets.forEach((e) => {
      this.total = this.total + e.product.price * e.quantity;
    });
  }
  changeProduct(basket: BasketModel, quantity: number) {
    let i = this.baskets.indexOf(basket);
    this.baskets[i].quantity = quantity;
    this.calc();
  }
  payment(total: number) {
    if ((this.total = total)) {
      let count = this.baskets.length;
      this.orderService.addOrder(this.baskets)

      // this.baskets.splice(0, count);
      this.toastrService.info('ödeme başarılı');
    }
    this.calc();
  }


}
