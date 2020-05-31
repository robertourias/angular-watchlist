import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiTmdbService {
  api_key = 'de130ab53335726f46541e164a10094a';
  baseUrl = 'https://api.themoviedb.org/3';
  Authorization = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTEzMGFiNTMzMzU3MjZmNDY1NDFlMTY0YTEwMDk0YSIsInN1YiI6IjVlY2E5ZWE0OGUyZTAwMDAyMDI1MWQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ssTal3SXc2-6O-AycVm23f8CiZCrMk-AbOnx0v_sHbQ';

  constructor(private http: HttpClient) { }

  getItems(name?: string): Observable<any[]> {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      Authorization: this.Authorization
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    const query = name ? `&query=${name}` : '';
    const url = `${this.baseUrl}/search/movie?api_key=${this.api_key}&language=pt-BR${query}&sort_by=popularity.desc`;

    return this.http.get<any[]>(url, requestOptions).pipe(
      catchError((error) => throwError(error))
    );
  }
}
