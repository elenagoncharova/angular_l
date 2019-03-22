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
import { ValidatorMessageComponent } from './directives/validator-message.directive';
import { ProdService } from './prod.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './articles.service';
import { MainContainerComponent } from './main-container/main-container.component';
import { ArticleComponent } from './article/article.component';
import { Form1Component } from './form1/form1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import {CustomSelectComponent} from './shared/custom-select/custom-select.component';
import { PipeComponent } from './pipe/pipe.component';
import {PowPipe} from './pow.pipe';
import {CarFilterPipe} from './car-filter.pipe';


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
    ValidatorMessageComponent,
    Form3Component,
    CustomSelectComponent,
    PipeComponent,
    PowPipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [ ProdService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
