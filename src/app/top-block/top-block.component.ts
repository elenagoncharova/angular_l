import { Component } from '@angular/core';

@Component({
  selector: 'app-top-block',
  templateUrl: './top-block.component.html',
  styleUrls: ['./top-block.component.scss']
})
export class TopBlockComponent {
  inputText = '';
  inputText2 = '';


  onKeyUp(value) {
    this.inputText = value;
  }

  onKeyUp2(event){
    this.inputText2 = event.target.value;
  }
}
