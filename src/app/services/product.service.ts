import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductModel } from '../models/product';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private toastrService: ToastrService,
    private httpClient: HttpClient
  ) {}

  getList(): Observable<ListResponseModel<ProductModel>> {
    let api = 'https://webapi.angulareducation.com/api/products/getlist';
    return this.httpClient.get<ListResponseModel<ProductModel>>(api);
  }
  add(productModel: ProductModel): Observable<ResponseModel> {
    let api = 'https://webapi.angulareducation.com/api/products/add';
    let token = localStorage.getItem('token');
    return this.httpClient.post<ResponseModel>(api, productModel, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }
  getById(guid: string): Observable<SingleResponseModel<ProductModel>> {
    let api =
      'https://webapi.angulareducation.com/api/products/getById?guid=' + guid;
    let token = localStorage.getItem('token');
    return this.httpClient.get<SingleResponseModel<ProductModel>>(api, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }
  update(product: ProductModel): Observable<ResponseModel> {
    let api = 'https://webapi.angulareducation.com/api/products/update';
    let token = localStorage.getItem('token');
    return this.httpClient.post<ResponseModel>(api, product, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }
  delete(product: ProductModel): Observable<ResponseModel> {
    let api = 'https://webapi.angulareducation.com/api/products/delete';
    let token = localStorage.getItem('token');
    return this.httpClient.post<ResponseModel>(api, product, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }
}
