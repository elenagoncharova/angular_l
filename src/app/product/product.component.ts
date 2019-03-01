import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  name = '----';
  cost = '----';
  size = '----';
  describtion = '----';

  addtext1(){
    this.name = 'name';
    this.cost = '50$';
    this.size = '15 x 20';
    this.describtion = 'test test test';
  }
  addtext2(){
    this.name = 'name2';
    this.cost = '500$';
    this.size = '20 x 30';
    this.describtion = 'test ghgh test';
  }
  addtext3(){
    this.name = 'Grggg';
    this.cost = '80$';
    this.size = '40 x 20';
    this.describtion = 'teghghst test test';
  }

}
