import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BasketModel } from '../models/basket';
import { ListResponseModel } from '../models/listResponseModel';
import { OrderModel } from '../models/order';
import { OrderAddDtoModel } from '../models/orderAddDto';
import { PaymentModel } from '../models/payment';
import { ProductModel } from '../models/product';
import { ResponseModel } from '../models/responseModel';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  baskets: BasketModel[] = [];
  total: number = 0;
  orders: OrderModel[] = [];
  constructor(
    private toastrService: ToastrService,
    private orderService: OrderService,
    private httpClient: HttpClient
  ) {}

  getList() {
    let api = 'https://webapi.angulareducation.com/api/baskets/getlist';
    return this.httpClient
      .get<ListResponseModel<BasketModel>>(api)
      .subscribe((res) => {
        this.baskets = res.data;
        this.calc();
      });
  }
  add(basketModel: BasketModel): Observable<ResponseModel> {
    let api = 'https://webapi.angulareducation.com/api/baskets/add';
    return this.httpClient.post<ResponseModel>(api, basketModel);
  }
  delete(model: BasketModel): Observable<ResponseModel> {
    let api = 'https://webapi.angulareducation.com/api/baskets/delete';
    return this.httpClient.post<ResponseModel>(api, model);
  }
  update(model: BasketModel): Observable<ResponseModel> {
    let api = 'https://webapi.angulareducation.com/api/baskets/update';
    return this.httpClient.post<ResponseModel>(api, model);
  }
  getById(guid: string) {
    let api = 'https://webapi.angulareducation.com/api/baskets/getById';
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
  // payment(total: number) {
  //   if ((this.total = total)) {
  //     let count = this.baskets.length;
  //     this.orderService.addOrder(this.baskets)

  //     // this.baskets.splice(0, count);
  //     this.toastrService.info('ödeme başarılı');
  //   }
  //   this.calc();
  // }
  payment(paymentModel: PaymentModel) {
    let api = 'https://webapi.angulareducation.com/api/Orders/addPayment';
    let orderModel = new OrderAddDtoModel();
    orderModel.payment = paymentModel;
    orderModel.baskets = this.baskets;
    this.httpClient.post<ResponseModel>(api, orderModel).subscribe(() => {
      this.getList();
      this.toastrService.success('ödeme başarılı');
    });
  }
}
