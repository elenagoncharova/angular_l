import { Component } from '@angular/core';
// import 'rxjs/add/observable';
// import { of } from 'rxjs/add/observable';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  num = 2;
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
        {
          xyz: 3,
          numbers: [1, 2, 3]
        }
  };


  // searchCar = '';
  // cars = [
  //   {name: 'Ford', descr: 'WFM 1'},
  //   {name: 'Mazda', descr: 'WFM 2'},
  //   {name: 'Bently', descr: 'WFM 3'},
  //   {name: 'Audi', descr: 'WFM 4'},
  //   {name: 'Mercedes', descr: 'WFM 5'},
  //   {name: 'BWM', descr: 'WFM 6'}
  // ];
  //
  // // asyncTitle = Observable.of('Async title 3 seconds').delay(3000);
  //
  // addCar() {
  //   this.cars.push({
  //     name: 'New Car',
  //     descr: 'WFM'
  //   });
  // }
}
