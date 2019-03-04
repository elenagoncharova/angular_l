import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() prodInfo: object;
  @Output() pusher = new EventEmitter();

  pushItemData(): void {
    this.pusher.emit(this.prodInfo);
  }
}
