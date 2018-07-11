import { Component, OnInit } from '@angular/core';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {
  order: string = 'info.name';
  reverse: boolean = false;
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
      }
    },
  ];

  /**
   * Example: Use Order pipe in the component
   *
   * @param {OrderPipe} orderPipe
   */
  constructor(private orderPipe: OrderPipe) {console.log(this.orderPipe.transform(this.collection, this.order)); }

  ngOnInit() {
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
