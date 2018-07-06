import { Injectable } from '@angular/core';

@Injectable()
export class PieDataService {
  generateData = (num: number) => {
    const operations = [];
    const labels = ['XRP', 'BTC', 'SIA'];
    const types = ['Price', 'Price', 'Price', '32', '22', '44', '55', '66', '77', 'Price'];

    for (let i = 0; i < Math.floor(1 + Math.random() * num); i++) {
      const operation = {
        id: i,
        familyType: labels[Math.floor(Math.random() * labels.length)],
        name: 'MAN1-APC-01-Get-Power-Consumption',
        type: types[Math.floor(Math.random() * types.length)]
      };

      operations.push(operation);
    }

    return operations;
  }
}