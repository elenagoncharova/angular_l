import { Component } from '@angular/core';
@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.scss']
})
export class InformComponent {

  prodInfo = [
    {
      name: 'First',
      cost: '50$',
      describtion: 'describtion one',
      information: [
        {
          id: 1,
          name: 'Product 1',
          size: '25 x 50',
          availability: 'yes',
          number: 12345
        }
      ]
    },
    {
      name: 'Second',
      cost: '100$',
      describtion: 'describtion two',
      information: [
        {
          id: 2,
          name: 'Product 1',
          size: '25 x 50',
          availability: 'yes',
          number: 12345
        },
        {
          id: 3,
          name: 'Product 2',
          size: '25 x 50',
          availability: 'no',
          number: 12345
        }
      ]
    },
    {
      name: 'third',
      cost: '150$',
      describtion: 'describtion three',
      information: [
        {
          id: 4,
          name: 'Product 1',
          size: '25 x 50',
          availability: 'no',
          number: 12345
        },
        {
          id: 5,
          name: 'Product 2',
          size: '25 x 50',
          availability: 'yes',
          number: 12345
        },
        {
          id: 6,
          name: 'Product 3',
          size: '25 x 50',
          availability: 'no',
          number: 12345
        },
      ]
    },
    {
      name: 'Fourth',
      cost: '50$',
      describtion: 'describtion four',
      information: [
        {
          id: 7,
          name: 'Product 1',
          size: '25 x 50',
          availability: 'yes',
          number: 12345
        },
        {
          id: 8,
          name: 'Product 2',
          size: '25 x 50',
          availability: 'no',
          number: 12345
        },
        {
          id: 9,
          name: 'Product 3',
          size: '25 x 50',
          availability: 'yes',
          number: 12345
        },
        {
          id: 10,
          name: 'Product 4',
          size: '25 x 50',
          availability: 'no',
          number: 12345
        }
      ]
    }
  ];


  prodItem = {
    name: '',
    cost: '',
    size: '',
    describtion: ''
  };



  getItemData($event) {
    this.prodItem = $event;
  }

}
