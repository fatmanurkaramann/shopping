import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function(){
      var text = $(".text-box");
      var dropdown = $(".dropdown");
      dropdown.click(function(){
        $(".dropdown").toggleClass("active")
      })

    })
  }

}
