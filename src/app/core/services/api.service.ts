import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GifQuery, GifResponse } from '../interfaces/gif';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  get apiKey() {
    return environment.apiKey;
  }

  constructor(private http: HttpClient) {}

  public search(query: GifQuery): Observable<GifResponse> {
    return this.http.get<GifResponse>(
      `${environment.apiURL}/gifs/search?api_key=${this.apiKey}&q=${query.q}&limit=${query.limit}&offset=${query.offset}`
    );
  }
}
