import { Component, OnInit } from '@angular/core';
declare var $ :any;
import { PieDataService } from '../_services/pie-data.service';
@Component({
  selector: 'app-testport',
  templateUrl: './testport.component.html',
  styleUrls: ['./testport.component.css']
})
export class TestportComponent implements OnInit {
  data: Array<any>;
  colours = ['#57A1C6', '#4FC3F7', '#36D7B7'];
  constructor(private pieDataService: PieDataService) { }

  ngOnInit() {

    this.data = this.pieDataService.generateData(30);
    setInterval(() => {
      this.data = this.pieDataService.generateData(30);
    }, 4000);


    $(document).ready(function () {
      var trigger = $('.hamburger'),
          overlay = $('.overlay'),
         isClosed = false;
    
        trigger.click(function () {
          hamburger_cross();      
        });
    
        function hamburger_cross() {
    
          if (isClosed == true) {          
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
          } else {   
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
          }
      }
      
      $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
      });  
    });
  }

}
