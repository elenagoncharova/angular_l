import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {ProductsModule} from './pages/product/products.module';
import {ArticleModule} from './pages/articles/article.module';
import {FormpageModule} from './pages/form/formpage.module';
import { CarsService } from '../service/inform.service';

import { NgbdCarouselBasic } from './home/home-page/carousel-basic';
import { HomeComponent } from './home/home.component';

import { PipeComponent } from './pages/pipe/pipe.component';
import { InputFilterPipe} from './input-filter.pipe';
import { SwitchComponent } from './pages/switch/switch.component';
import { AddItemModalComponent } from './pages/add-item-modal/add-item-modal.component';
import { RoutingInComponent } from './pages/rout-my/routing-in.component';
import { InfoPageComponent } from './pages/rout-my/info-page/info-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {PagesComponent} from './pages/pages.component';


@NgModule({
  declarations: [
      HeaderComponent,
      FooterComponent,
    AppComponent,
    NgbdCarouselBasic,
    HomeComponent,
    PipeComponent,
    InputFilterPipe,
    SwitchComponent,
    AddItemModalComponent,
    RoutingInComponent,
    InfoPageComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule,
    ArticleModule,
    FormpageModule
  ],
  providers: [ NgbModalConfig, NgbModal, NgbActiveModal, CarsService],
  bootstrap: [AppComponent],
  entryComponents: [AddItemModalComponent]
})
export class AppModule { }
