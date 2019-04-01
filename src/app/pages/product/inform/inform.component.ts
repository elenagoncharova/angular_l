import { Component, OnInit } from '@angular/core';
import {ProdService} from '../../../../service/prod.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddItemModalComponent} from '../../add-item-modal/add-item-modal.component';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.css'],
  providers: [ ProdService ]
})
export class InformComponent implements OnInit {

  product = [];

  constructor (private service: ProdService, private modalService: NgbModal, private fb: FormBuilder, private mainService: ProdService) {}

  prodItem = {
    name: '',
    cost: '',
    size: '',
    describtion: ''
  };

  ngOnInit() {
    this.product = this.service.prodInfo;
  }


  getItemData($event) {
    this.prodItem = $event;
  }

  public openModal(): void {
    const modalRef = this.modalService.open(AddItemModalComponent);
    modalRef.result.then((result) => {
      this.mainService.addNewProduct(result.name.value, result.price.value);
    });
  }

}
