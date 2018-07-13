import { Component, OnInit } from '@angular/core';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
declare var $ :any;
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  order: string = 'info.name';
  reverse: boolean = false;
  _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
    }
    set listFilter(value:string){
      this._listFilter= value;

      console.log("Value of list filter is "+ this._listFilter);
      this.filteredProducts= (this.listFilter.length!=0)? this.performFilter(this.listFilter): this.collection;
      console.log(this.filteredProducts);
  }

  filteredProducts:any[];
  collection: any[] = [
    {
      id: 1,
      info: {
        coin:'assets/bitcoinimages/achain.png',
        name: 'Achain',
        totalbalance: '0000',
        avaliablebalance: '0000',
        inorder:'000',
        btcvalue:'00000'
      }
    }, {
      id: 2,
      info: {
        coin:'assets/bitcoinimages/aion.png',
        name: 'Aion',
        totalbalance: '0000',
        avaliablebalance: '0000',
        inorder:'000',
        btcvalue:'00000'
      }
    }, {
      id: 3,
      info: {
        coin:'assets/bitcoinimages/augur.png',
        name: 'Augur',
        totalbalance: '0000',
        avaliablebalance: '0000',
        inorder:'000',
        btcvalue:'00000'
      }
    }, {
      id: 4,
      info: {
        coin:'assets/bitcoinimages/bitcoin_cash.png',
        name: 'Bitcoin Cash',
        totalbalance: '0000',
        avaliablebalance: '0000',
        inorder:'000',
        btcvalue:'00000'
      }
    }, {
      id: 5,
      info: {
        coin:'assets/bitcoinimages/bitcoin.png',
        name: 'Bitcoin',
        totalbalance: '0000',
        avaliablebalance: '0000',
        inorder:'000',
        btcvalue:'00000'
      },
      
    },{
      id: 6,
      info: {
        coin:'assets/bitcoinimages/cuber_miles.png',
        name: 'Cyber Miles',
        totalbalance: '0000',
        avaliablebalance: '0000',
        inorder:'000',
        btcvalue:'00000'
      },
    },{
      id: 7,
      info: {
        coin:'assets/bitcoinimages/eos.png',
        name: 'EOS',
        totalbalance: '0000',
        avaliablebalance: '0000',
        inorder:'000',
        btcvalue:'00000'
      },
    },{
      id: 8,
      info: {
        coin:'assets/bitcoinimages/ether.png',
        name: 'Ether',
        totalbalance: '0000',
        avaliablebalance: '0000',
        inorder:'000',
        btcvalue:'00000'
      },
    },
  ];

  /**
   * Example: Use Order pipe in the component
   *
   * @param {OrderPipe} orderPipe
   *  */
  constructor(private orderPipe: OrderPipe) {console.log(this.orderPipe.transform(this.collection, this.order));
    this.filteredProducts=this.collection; }
    performFilter(filterBy: string): any[]{
      filterBy =filterBy.toLocaleLowerCase();
      return this.collection.filter((product: any)=>
      product.info.name.toLocaleLowerCase().indexOf (filterBy) !== -1);
  }
  ngOnInit() {
    $('.showcoins').click(function() {
      $('#myDIV').toggle('slow');
      $("i", this).toggleClass("fa fa-caret-up fa fa-caret-down");
  });
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
