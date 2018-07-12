import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.showcoins').click(function() {
      $('#myDIV').toggle('slow');
      $("i", this).toggleClass("fa fa-caret-up fa fa-caret-down");
  });
  }

}
