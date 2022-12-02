import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
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
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient
  ) {}

  getList(): Observable<ListResponseModel<ProductModel>> {
    let api = this.apiUrl + 'products/getlist';
    return this.httpClient.get<ListResponseModel<ProductModel>>(api);
  }
  add(productModel: ProductModel): Observable<ResponseModel> {
    let api = this.apiUrl + 'products/add';
    return this.httpClient.post<ResponseModel>(api, productModel);
  }
  getById(guid: string): Observable<SingleResponseModel<ProductModel>> {
    let api = this.apiUrl + 'products/getById?guid=' + guid;
    return this.httpClient.get<SingleResponseModel<ProductModel>>(api);
  }
  update(product: ProductModel): Observable<ResponseModel> {
    let api = this.apiUrl + 'products/update';
    return this.httpClient.post<ResponseModel>(api, product);
  }
  delete(product: ProductModel): Observable<ResponseModel> {
    let api = this.apiUrl + 'products/delete';
    return this.httpClient.post<ResponseModel>(api, product);
  }
}
