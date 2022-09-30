import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit, AfterContentChecked {
  total: number;
  paymentForm: FormGroup;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();
  constructor(
    private basketService: BasketService,
    private formBuilder: FormBuilder,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.createPaymentForm();
  }

  ngAfterContentChecked(): void {
    this.total = this.basketService.total;
  }
  createPaymentForm() {
    this.paymentForm = this.formBuilder.group({
      id: [0],
      date: [Date()],
      cartNumber: ['', [Validators.required]],
      cartOwner: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
    });
  }
  payment() {
    if (this.paymentForm.valid) {
      let model = this.paymentForm.value;
      this.basketService.payment(model);
      document.getElementById('paymentCloseBtn').click();
    }else{
      this.toastrService.error("Zorunlu alanları doldurun.")
    }
  }
}
