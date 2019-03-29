import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../articles.service';
import {finalize, tap} from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

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
