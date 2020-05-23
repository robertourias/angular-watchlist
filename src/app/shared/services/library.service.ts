import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { ApiService } from 'src/app/core/services/api.service';
import { Library } from '../models/library.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  endpoint: string;

  constructor(private api: ApiService, private http: HttpClient) {
    this.endpoint = this.api.getEndpoint('/library');
  }

  getLibraryItems(): Observable<Library[]> {
    return this.http.get<Library[]>(this.endpoint)
      .pipe(
        tap(library => console.log('leu os itens')),
        catchError(this.api.handleError<Library[]>('getLibraryItems', []))
      );
  }

  getLibraryItem(id: number): Observable<Library> {
    const url = `${this.endpoint}/${id}`;
    return this.http.get<Library>(url).pipe(
      tap(_ => console.log(`leu o item id=${id}`)),
      catchError(this.api.handleError<Library>(`getLibraryItem id=${id}`))
    );
  }

  addLibraryItem (item): Observable<Library> {
    return this.http.post<Library>(this.endpoint, item, this.api.httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((item: Library) => console.log(`adicionou o item com w/ id=${item.id}`)),
      catchError(this.api.handleError<Library>('addLibraryItem'))
    );
  }

  updateLibraryItem(id, item): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.http.put(url, item, this.api.httpOptions).pipe(
      tap(_ => console.log(`atualiza o item com id=${id}`)),
      catchError(this.api.handleError<any>('updateLibraryItem'))
    );
  }

  deleteLibraryItem(id): Observable<Library> {
    const url = `${this.endpoint}/delete/${id}`;

    return this.http.delete<Library>(url, this.api.httpOptions).pipe(
      tap(_ => console.log(`remove o item com id=${id}`)),
      catchError(this.api.handleError<Library>('deleteLibraryItem'))
    );
  }
}
