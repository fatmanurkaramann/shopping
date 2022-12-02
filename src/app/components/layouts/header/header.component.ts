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
  //   $(function() {
  //     var header = $(".header");
  //     $(window).scroll(function() {
  //         var scroll = $(window).scrollTop();

  //         if ((window).scrollY > 50) {
  //             header.css({"background":"white"});


  //         } else {
  //             header.css({"background-color":"white"});



  //         }
  //     });
  // });
  }

}
