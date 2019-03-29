import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Availability} from '../../../entity/aviability';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent {

  @Input() product: Availability;
  @Output() pusher = new EventEmitter();
  activeItem = false;


  pushItemData(): void {
    this.pusher.emit(this.product);
    this.activeItem = !this.activeItem;
  }

  showActiveState(): boolean {
    return this.activeItem;
  }

}
