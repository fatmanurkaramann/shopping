import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductModel } from '../models/product';
import { ResponseModel } from '../models/responseModel';

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
   return  this.httpClient.get<ListResponseModel<ProductModel>>(api)
  }
  // add(model: ProductModel) {
  //   this.products.push(model);
  //   this.toastrService.success(model.name + ' başarıyla eklendi');
  //   console.log(this.products);
  // }
  // getById(id: number): Observable<any> {
  //   let model: ProductModel = this.products.find((i) => i.id == id);
  //   return of(model);
  // }
  // update(model: ProductModel) {
  //   let productModel: ProductModel = this.products.find(
  //     (i) => i.id == model.id
  //   );
  //   let index = this.products.indexOf(productModel);
  //   this.products[index] = model;
  // }
}
