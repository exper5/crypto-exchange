import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(".dropdown.funds").hover(
      function () {
          $('.dropdown-menu.funds').finish().slideDown('fast');
      },
      function () {
          $('.dropdown-menu.funds').finish().slideUp('fast');
      }
  );
  $(".dropdown.more").hover(
    function () {
        $('.dropdown-menu.more').finish().slideDown('fast');
    },
    function () {
        $('.dropdown-menu.more').finish().slideUp('fast');
    }
);
  }

}
