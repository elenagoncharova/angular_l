import { Component } from '@angular/core';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.scss']
})
export class InformComponent {

  prodInfo = [
    {
      name: 1,
      cost: 'figchmgmjhmrst',
      size: 5,
      describtion: 'dgthtdhgdgjm'
    },
    {
      name: 1,
      cost: 'first',
      size: 5,
      describtion: 'teset'
    },
    {
      name: 1,
      cost: 'firsnt',
      size: 5,
      describtion: 'tesfyhnjhghmmet'
    }
  ];


  prodItem = {
    name: '',
    cost: '',
    size: '',
    describtion: ''
  };

  getItemData($event) {
    console.log(this)
    this.prodItem = $event;
  }

}
