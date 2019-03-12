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
    TextStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
