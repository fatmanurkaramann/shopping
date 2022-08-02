import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  @Input() baskets: BasketModel[] = [];
  @Input() total: number = 0;
  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {}
  deleteItem(basket: BasketModel) {
    let i = this.baskets.indexOf(basket);
    this.baskets.splice(i, 1);
    this.toastrService.error(basket.product.name + ' Ürün silindi');
    //this.total=this.total-(basket.product.price*basket.quantity)
  }
  calc() {
    this.total = 0;
    this.baskets.forEach((e) => {
      this.total = this.total + e.product.price * e.quantity;
    });
    return this.total;
  }
  changeProduct(basket: BasketModel) {
    let quantity: number = parseInt(
      (<HTMLInputElement>(
        document.getElementById('changeQuantity-' + basket.product.name)
      )).value
    );
    let i = this.baskets.indexOf(basket);
    this.baskets.splice(i, 1);

    basket.quantity = quantity;
    this.baskets.push(basket)
  }
  payment(event:any){
    if(this.total=event.total){
      let count=this.baskets.length;
      this.baskets.splice(0,count)
      this.toastrService.info("ödeme başarılı")
    }
  }
}
