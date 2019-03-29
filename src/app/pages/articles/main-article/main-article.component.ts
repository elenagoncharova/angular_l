import {Component, Input} from '@angular/core';
import {ArticleService} from '../../../articles.service';

@Component({
  selector: 'app-main-article',
  templateUrl: './main-article.component.html',
  styleUrls: ['./main-article.component.css']
})
export class MainArticleComponent {

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
