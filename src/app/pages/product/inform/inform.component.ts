import { Component, OnInit } from '@angular/core';
import {ProdService} from '../../../../service/prod.service';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.css'],
  providers: [ ProdService ]
})
export class InformComponent implements OnInit {

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
