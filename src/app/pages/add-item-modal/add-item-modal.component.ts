import {Component} from '@angular/core';
import {ProdService} from '../../../service/prod.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent {


  addItemForm = this.fb.group({
    name: ['', Validators.required],
    price: ['']
  });

  constructor(
      private fb: FormBuilder,
      public activeModal: NgbActiveModal,
  ) {}

  public onSubmit(): void {
    this.activeModal.close(this.addItemForm.controls);
  }

}
