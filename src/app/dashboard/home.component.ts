import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
declare var $ :any;
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import {Observable} from 'rxjs';





@Component({
    templateUrl: 'home.component.html',
    styleUrls:['home.component.css'],
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    stocks:any[]=[];
    stocks1:any[]=[];
    
    logout: void;
    constructor(private userService: UserService) {
        // this.logout=this.authenticationService.logout();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        for(let i=0;i<20;i++){
            let tempStock={
                code : Math.ceil(Math.random()*10500),
                ask : Math.ceil(Math.random()*10700),
                bid : Math.ceil(Math.random()*10200)
            }

            this.stocks.push(tempStock);
        }

        let poll = ()=>{
            for (var i = 0; i < this.stocks.length; i++) {
                this.stocks[i].bid += Math.random()<.5 ? 5 : -5;
                this.stocks[i].code += Math.random()<.5 ? 5 : -5;
                this.stocks[i].ask += Math.random()<.5 ? -5 : 5;
            }
            setTimeout(poll , 1000);
        }

        poll();
        
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

          //change background color of table
          
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

@Component({
    selector: 'app-calc',
    template: `
      
      <div class="calculation">
      <p class="buypricetxt" style="width:50%; float:left">Price:</p>
      <p class="buyamntbox"> <input #num1 type="number" value="{{init.first}}" (input)="0" ></p>
      <p class="buyamnt" style="width:50%; float:left">Amount</p>
      <p class="buypricebox"> <input #num2 type="number" value="{{init.second}}" (input)="0" ></p>
      </div>

      <div>
        <span style="width:50%; float:left;">Total: </span><input type="number" value="{{num1.valueAsNumber * num2.valueAsNumber}}">
        
      </div>
      `
  })
  export class CalcComponent {
  
    get init(): any {
      return {
        first: 6346.01,
        second: 0
      };
    }
  
    max(first: number, second: number): number {
      return Math.max(first, second);
    }
  }