import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketModel } from '../models/basket';
import { ListResponseModel } from '../models/listResponseModel';
import { OrderModel } from '../models/order';
import { OrderDtoModel } from '../models/orderDtoModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders:OrderModel[]=[]
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient
  ) {}

  getList(): Observable<ListResponseModel<OrderDtoModel>> {
    let api = this.apiUrl + 'Orders/getList';
    return this.httpClient.get<ListResponseModel<OrderDtoModel>>(api);
  }

}
