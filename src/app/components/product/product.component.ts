import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { ProductModule } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: ProductModule[] = [
    {
      name: 'Peynir',
      price: 26.61,
      imageUrl:
        'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/10019128/10019128-3fe8d7-1650x1650.jpg',
    },
    {
      name: 'Zeytin',
      price: 295.5,
      imageUrl:
        'https://www.surenzeytin.com/image/cache/catalog/404/siyah/teneke/5-5-teneke-2000x2000.jpg',
    },
  ];

  baskets:BasketModel[]=[]
  total:number=0;

  @Output() myEvent:EventEmitter<any>=new EventEmitter();

  constructor(
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {}

  addBasket(product:ProductModule){
    let basketModel=new BasketModel();
    basketModel.product=product

    basketModel.quantity=parseInt((<HTMLInputElement>document.getElementById("quantity-" +product.name)).value);
    (<HTMLInputElement>document.getElementById("quantity-" +product.name)).value="1"

    this.baskets.push(basketModel);
    //this.total=this.total+(basketModel.quantity* product.price)

    console.log(this.baskets)
    this.myEvent.emit({data:this.baskets})
    this.toastrService.success(product.name+" sepete eklendi")
  }
}
