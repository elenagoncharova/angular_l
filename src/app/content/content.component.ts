import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  lists = [1, 2, 3, 4];
  current = 1;

  onClisk(number: number) {
    this.current = number;
  }
}
