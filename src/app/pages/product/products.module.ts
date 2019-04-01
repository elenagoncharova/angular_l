import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product.component';
import {GoodsComponent} from './goods/goods.component';
import {DescriptionComponent} from './description/description.component';
import {ProdService} from '../../../service/prod.service';
import {InformComponent} from './inform/inform.component';

@NgModule({
  declarations: [
    ProductComponent,
    GoodsComponent,
    DescriptionComponent,
    InformComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent
  ],
  providers: [ProdService]
})
export class ProductsModule { }
