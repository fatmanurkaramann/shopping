import { Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  baskets:BasketModel[]=[]

  getBaskets(event:any){
    this.baskets=event.data

  }
}
