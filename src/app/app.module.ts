import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { TopBlockComponent } from './top-block/top-block.component';
import { ProductComponent } from './product/product.component';
import { InformComponent } from './inform/inform.component';
import { FooterComponent } from './footer/footer.component';
import { DescriptionComponent } from './description/description.component';
import { ContentComponent } from './content/content.component';
import { BackgroundDirective } from './directives/background.directive';
import { TextStyleDirective } from './directives/text-style.directive';
import { ProdService } from './prod.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './articles.service';
import { MainContainerComponent } from './main-container/main-container.component';
import { ArticleComponent } from './article/article.component';
import { Form1Component } from './form1/form1.component';
import {FormsModule} from '@angular/forms';
import { Form2Component } from './form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBlockComponent,
    ProductComponent,
    InformComponent,
    FooterComponent,
    DescriptionComponent,
    ContentComponent,
    BackgroundDirective,
    TextStyleDirective,
    MainContainerComponent,
    ArticleComponent,
    Form1Component,
    Form2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
      FormsModule
  ],
  providers: [ ProdService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
