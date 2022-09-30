import { AfterContentChecked, AfterViewChecked, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit,AfterContentChecked {
  baskets: BasketModel[] = [];
  total: number = 0;
  id: number;

  constructor(
    private toastrService: ToastrService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.getList();


  }
  ngAfterContentChecked(): void {
   this.baskets=this.basketService.baskets
    this.total = this.basketService.total;

  }
getList(){
  this.basketService.getList()
}

  deleteItem(basket: BasketModel) {
    this.basketService.delete(basket).subscribe((res)=>{
      this.getList();
    })
  }
updateBasket(basket:BasketModel,quantity:number){
  if(basket.product.inventoryQuantity-(basket.quantity+quantity) <0){
    this.toastrService.error("Ekleme başarısız")
    return
  }
  basket.quantity=basket.quantity+quantity
  this.basketService.update(basket).subscribe((res)=>{
    this.getList();
  })
}



}
