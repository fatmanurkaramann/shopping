import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BasketModel } from '../models/basket';
import { ListResponseModel } from '../models/listResponseModel';
import { OrderModel } from '../models/order';
import { OrderAddDtoModel } from '../models/orderAddDto';
import { PaymentModel } from '../models/payment';
import { ResponseModel } from '../models/responseModel';
import { ErrService } from './err.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  baskets: BasketModel[] = [];
  total: number = 0;
  orders: OrderModel[] = [];
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private toastrService: ToastrService,
    private httpClient: HttpClient,
    private errorService:ErrService
  ) {}

  getList() {
    let api = this.apiUrl + 'baskets/getlist';
    return this.httpClient
      .get<ListResponseModel<BasketModel>>(api)
      .subscribe((res) => {
        this.baskets = res.data;
        this.calc();
      },(err)=>{
        this.errorService.errorHandler(err)

      });
  }
  add(basketModel: BasketModel): Observable<ResponseModel> {
    let api = this.apiUrl + 'baskets/add';
    return this.httpClient.post<ResponseModel>(api, basketModel);
  }
  delete(model: BasketModel): Observable<ResponseModel> {
    let api = this.apiUrl + 'baskets/delete';
    return this.httpClient.post<ResponseModel>(api, model);
  }
  update(model: BasketModel): Observable<ResponseModel> {
    let api = this.apiUrl + 'baskets/update';
    return this.httpClient.post<ResponseModel>(api, model);
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

  payment(paymentModel: PaymentModel) {
    let api = 'https://webapi.angulareducation.com/api/Orders/addPayment';
    let orderModel = new OrderAddDtoModel();
    orderModel.payment = paymentModel;
    orderModel.baskets = this.baskets;
    this.httpClient.post<ResponseModel>(api, orderModel).subscribe(() => {
      this.getList();
      this.toastrService.success('ödeme başarılı');
    },(err)=>{
      this.errorService.errorHandler(err)
    });
  }
}
