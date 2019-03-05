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
      size: '25 x 50',
      describtion: 'describtion one'
    },
    {
      name: 'Second',
      cost: '100$',
      size: '50 x 25',
      describtion: 'describtion two'
    },
    {
      name: 'third',
      cost: '150$',
      size: '5 x 10',
      describtion: 'describtion three'
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
