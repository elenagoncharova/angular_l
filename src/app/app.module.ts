import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import {ProdService} from '../service/prod.service';
import { ProductComponent } from './pages/product/product.component';
import { GoodsComponent } from './pages/product/goods/goods.component';
import { DescriptionComponent } from './pages/product/description/description.component';
import { InformComponent } from './pages/product/inform/inform.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { MainArticleComponent } from './pages/articles/main-article/main-article.component';
import {ArticleService} from './articles.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbdCarouselBasic} from './home/home-page/carousel-basic';
import {NgbActiveModal, NgbModal, NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './pages/form/form.component';
import { ReactiveComponent } from './pages/form/reactive/reactive.component';
import { TemplateComponent } from './pages/form/template/template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomSelectComponent} from './shared/custom-select/custom-select.component';
import {ValidatorMessageComponent} from './directives/validator-message.directive';
import { PipeComponent } from './pages/pipe/pipe.component';
import {InputFilterPipe} from './input-filter.pipe';
import { SwitchComponent } from './pages/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    ProductComponent,
    GoodsComponent,
    DescriptionComponent,
    InformComponent,
    ArticlesComponent,
    MainArticleComponent,
    NgbdCarouselBasic,
    HomeComponent,
    FormComponent,
    ReactiveComponent,
    TemplateComponent,
    CustomSelectComponent,
    ValidatorMessageComponent,
    PipeComponent,
    InputFilterPipe,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProdService, ArticleService, NgbModalConfig, NgbModal, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
