import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../../service/inform.service';

@Component({
  selector: 'app-routing-in',
  templateUrl: './routing-in.component.html',
  styleUrls: ['./routing-in.component.css']
})
export class RoutingInComponent implements OnInit {

  cars = [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars = this.carsService.cars;
  }

}
