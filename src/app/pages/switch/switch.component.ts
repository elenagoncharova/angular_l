import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  lists = [1, 2, 3, 4];
  current = 1;

  onClisk(number: number) {
    this.current = number;
  }

}
