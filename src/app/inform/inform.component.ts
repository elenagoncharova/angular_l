import {Component, OnInit} from '@angular/core';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.scss'],
  providers: [ ProdService ]
})
export class InformComponent implements OnInit{

  product = [];

  constructor (private service: ProdService) {}

  prodItem = {
    name: '',
    cost: '',
    size: '',
    describtion: ''
  };

  ngOnInit() {
    this.product = this.service.prodInfo;
  }


  getItemData($event) {
    this.prodItem = $event;
  }

}
