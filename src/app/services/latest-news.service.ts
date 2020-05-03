import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ILatestNews } from '../model/ILatestNews';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {

  private apiUrl: string = "/api/news";
  constructor(private http: HttpClient) { }

  getLatestNews(): Observable<ILatestNews[]> {
    return this.http.get<ILatestNews[]>(this.apiUrl);
  }

  addNews(newNews: ILatestNews): Observable<ILatestNews> {
    return this.http.post<ILatestNews>(this.apiUrl, newNews, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteNews(id: number) {
    return this.http.delete(this.apiUrl + "/" + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
