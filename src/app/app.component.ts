import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  productData = [
    {
      name: 'name',
      cost: '50$',
      size: '15 x 20',
      describtion: 'test test test'
    },
    {
      name: 'name2',
      cost: '500$',
      size: '20 x 30',
      describtion: 'test ghgh test'
    },
    {
      name: 'Grggg',
      cost: '80$',
      size: '40 x 20',
      describtion: 'teghghst test test'
    }
  ];
}
