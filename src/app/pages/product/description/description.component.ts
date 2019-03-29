import {Component, Input} from '@angular/core';
import {Availability} from '../../../entity/aviability';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  @Input() public information: Availability;
  @Input() public itemIndex;

  isFeatureAvailable() {
    return this.information.availability === 'yes';
  }

}
