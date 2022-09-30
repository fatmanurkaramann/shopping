import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasketModel } from 'src/app/models/basket';
import { AuthService } from 'src/app/services/auth.service';
import { BasketService } from 'src/app/services/basket.service';
import { BasketComponent } from '../basket/basket.component';
import { OrderComponent } from '../order/order.component';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
@Component({
  selector: 'app-basket-icon',
  templateUrl: './basket-icon.component.html',
  styleUrls: ['./basket-icon.component.css'],
})
export class BasketIconComponent implements OnInit,AfterContentChecked {
  title="angular-material"
  baskets: BasketModel[] = [];
  basket:BasketModel
  isAuth: boolean = false;
  total:number=0
  constructor(
    private basketService: BasketService,
    private authService: AuthService,
    private dialog: MatDialog,
    public bsModalRef: BsModalRef,
    private _modalService: BsModalService,
  ) {}

  ngOnInit(): void {
    this.baskets = this.basketService.baskets;
    this.isAuth=this.authService.isAuth;

  }
  ngAfterContentChecked(): void {
    this.total = this.basketService.total;
    this.isAuth=this.authService.isAuth;
  }
  contactDetail(basket: BasketModel): void {
    this.showContactDialog(basket.id);
  }

  showContactDialog(contactId?: number): void {

    let contactDialog: BsModalRef;

    contactDialog = this._modalService.show(BasketComponent, {

      class: "modal-lg",
      initialState: {
        id: contactId,
      },
    });

    contactDialog.content.onSave.subscribe(() => {
      //this.refresh();
    });
  }
}
