import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  searchCar = '';
  cars = [
    {name: 'Anatoly', descr: 'WFM 1'},
    {name: 'Anton', descr: 'WFM 2'},
    {name: 'Eduard', descr: 'WFM 3'},
    {name: 'Philipp', descr: 'WFM 4'},
    {name: 'Stepan', descr: 'WFM 5'},
    {name: 'Alisa', descr: 'WFM 6'},
    {name: 'Angelina', descr: 'WFM 1'},
    {name: 'Alla', descr: 'WFM 2'},
    {name: 'Angelina', descr: 'WFM 3'},
    {name: 'Maya', descr: 'WFM 4'},
    {name: 'Margarita', descr: 'WFM 5'},
    {name: 'Tamara', descr: 'WFM 6'},
    {name: 'Ulyana', descr: 'WFM 1'},
    {name: 'Rosa', descr: 'WFM 2'},
    {name: 'Yana', descr: 'WFM 3'},
    {name: 'Elina', descr: 'WFM 4'},
    {name: 'Natalia', descr: 'WFM 5'},
    {name: 'Diana', descr: 'WFM 6'},
    {name: 'Daria', descr: 'WFM 1'},
    {name: 'Vera', descr: 'WFM 2'},
    {name: 'Veronica', descr: 'WFM 3'},
    {name: 'Yury', descr: 'WFM 4'},
    {name: 'Timofey', descr: 'WFM 5'},
    {name: 'Pavel', descr: 'WFM 6'}
  ];

  addCar() {
    this.cars.push({
      name: 'New Car',
      descr: 'WFM'
    });
  }

}
