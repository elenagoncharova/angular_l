import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../articles.service';
import {finalize, tap} from 'rxjs/operators';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  articles;

  fetchingCompleted: boolean;

  constructor(
      public articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleService.fetchArticles().subscribe((articles) => {
      this.articles = articles;
      this.articles.length = 4;
    });

    this.articleService.$articles
        .pipe(
            tap((articles) => {
              this.articles = articles;
            }),
            finalize(() => { this.fetchingCompleted = true; })
        )
        .subscribe({
          complete() { console.log ('the end'); }
        });
  }
}
