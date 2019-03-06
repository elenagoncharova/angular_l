import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Availability } from '../entity/availability';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() prodInfo: Availability;
  @Output() pusher = new EventEmitter();
  activeItem = false;


  pushItemData(): void {
    this.pusher.emit(this.prodInfo);
    this.activeItem = !this.activeItem;
  }

  showActiveState(): boolean {
    return this.activeItem;
  }

}
