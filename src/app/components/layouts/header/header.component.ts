import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products: ProductModel[] = [];
  isAuth: boolean = false;
  filterText: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
