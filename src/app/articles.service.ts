import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {

    constructor(
        private httpClient: HttpClient
    ){}

    public fetchArticles(): Observable<any> {
        return this.httpClient.get('http://angular-assessment.digio.ch/api/article');
    }

    public fetchComments(id): Observable<any> {
        return this.httpClient.get('http://angular-assessment.digio.ch/api/article/' + id + '/comment');
    }
}
