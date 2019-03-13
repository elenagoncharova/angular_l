import { Component, Input } from '@angular/core';
import { ArticleService } from '../articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() public article;
  public comments;

  constructor(
      private articleService: ArticleService
  ){}

  public getComments() {
    this.articleService.fetchComments(this.article.id).subscribe((comments) => {
      this.comments = comments;
    });
  }

}
