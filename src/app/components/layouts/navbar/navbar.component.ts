import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as $ from 'jquery';
@Component({
  styles: [
    `
      .router-link-active {
        background-color: red;
      }
    `,
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterContentChecked {
  isAuth: boolean = false;
  filterText: string = '';
  panelOpenState = false;
  text:string="Hesabım"
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;

    $(function () {
      $(function () {});
      var text = $('.text-box');
      var dropdown = $('.dropdown');

      dropdown.hover(function () {
        $('.dropdown').toggleClass('active');
      });
    });

    // $(document).ready(function () {
    //   $('#home1').hover(
    //     function () {
    //       $('#home1').css('color', 'red');
    //       $('#home1').css('background-color', 'rgb(76, 51, 152)');
    //     },
    //     function () {
    //       $('#home1').css('color', 'black');
    //     }
    //   );
    //   $('#home2').hover(
    //     function () {
    //       $('#home2').css('color', 'white');
    //       $('#home2').css('background-color', 'rgb(76, 51, 152)');
    //     },
    //     function () {
    //       $('#home2').css('color', 'black');
    //       $('#home2').css('background-color', 'white');
    //     }
    //   );
    // });

    //   $(function() {
    //     var header = $(".navbar");
    //     $(window).scroll(function() {
    //         var scroll = $(window).scrollTop();

    //         if ((window).scrollY > 50) {
    //             header.css({"background":"#f8f8f8"});

    //         } else {
    //             header.css({"background-color":"#f8f8f8"});

    //         }
    //     });
    // });
  }

  logout() {
    this.authService.logout();
  }
  ngAfterContentChecked(): void {
    this.isAuth = this.authService.isAuth;
  }
}
