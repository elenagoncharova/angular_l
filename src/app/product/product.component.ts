import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Availability } from '../entity/availability';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  cost = 5;

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
