import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticlesComponent} from './articles.component';
import {MainArticleComponent} from './main-article/main-article.component';
import {ArticleService} from '../../articles.service';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  declarations: [
    ArticlesComponent,
    MainArticleComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [ArticleService]
})
export class ArticleModule { }
