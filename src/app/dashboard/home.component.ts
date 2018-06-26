import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
declare var $ :any;
import { User } from '../_models';
import { UserService } from '../_services';

@Component({
    templateUrl: 'home.component.html',
    styleUrls:['home.component.css'],
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();   
        $(function () {
            $("#chkPassport").click(function () {
                if ($(this).is(":checked")) {
                    $("#dvPassport").show();
                    $("#AddPassport").hide();
                } else {
                    $("#dvPassport").hide();
                    $("#AddPassport").show();
                }
            });
        });

        $(".open").on("click", function(){
            $(".popup-overlay, .popup-content").addClass("active");
            $("#datalist").hide();
            $(".popup-overlay").show();
            
          });
          
          //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
          $(".close, .popup-overlay").on("click", function(){
            $(".popup-overlay, .popup-content").removeClass("active");
            $("#datalist").show();
            $(".popup-overlay").hide();
          });
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllUsers() 
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}