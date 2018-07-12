import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
declare var $ :any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isLoggedIn:boolean
  constructor(private authenticationService: AuthenticationService) {
      this.isLoggedIn=this.authenticationService.getIsLoggedIn();
   }

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
