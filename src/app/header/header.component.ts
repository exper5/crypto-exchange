import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services';
declare var $ :any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isLoggedIn:boolean
    returnUrl: any;
  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService, 
      private route: ActivatedRoute,
        private router: Router
    ) {
    this.authenticationService.isLoggedIn.subscribe(res =>this.loggedInEmitterCatch(res));
      this.isLoggedIn=this.authenticationService.getIsLoggedIn();
      console.log(this.isLoggedIn + "user is logged in");
      
   }


loggedInEmitterCatch(res:string){
    if(res ==="true"){
        this.isLoggedIn = true;
    }else{
        this.isLoggedIn=false;
    }
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
  
  myMethod(event){
    this.authenticationService.logout();
    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  } 
}
