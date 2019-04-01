import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from './form.component';
import {ReactiveComponent} from './reactive/reactive.component';
import {TemplateComponent} from './template/template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';
import {ValidatorMessageComponent} from '../../directives/validator-message.directive';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    FormComponent,
    ReactiveComponent,
    TemplateComponent,
    ValidatorMessageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormpageModule { }
