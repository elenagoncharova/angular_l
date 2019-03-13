import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../articles.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  articles;

  constructor(
      public articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleService.fetchArticles().subscribe((articles) => {
      this.articles = articles;
      this.articles.length = 4;
    });
  }

}
