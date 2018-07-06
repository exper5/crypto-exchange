import { Component, OnInit } from '@angular/core';
declare var $ :any;
import { PieDataService } from '../_services/pie-data.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  data: Array<any>;
  colours = ['#57A1C6', '#4FC3F7', '#36D7B7'];
  constructor( private pieDataService: PieDataService) { }

  ngOnInit() {

    this.data = this.pieDataService.generateData(30);
    setInterval(() => {
      this.data = this.pieDataService.generateData(30);
    }, 4000);

    $(document).ready(function () {
      $('[data-toggle=offcanvas]').click(function () {
        if ($('.sidebar-offcanvas').css('background-color') == 'rgb(255, 255, 255)') {
          $('.list-group-item').attr('tabindex', '-1');
        } else {
          $('.list-group-item').attr('tabindex', '');
        }
        $('.row-offcanvas').toggleClass('active');
        
      });
    });
    $( document ).ready(function() {

      $( ".cross" ).hide();
      // $( ".menu" ).hide();
      $( ".hamburger" ).click(function() {
      // $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
      // });
      });
      
      $( ".cross" ).click(function() {
      // $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
      // });
      });
      
      });

      //pie chart
      
    
  }

}


