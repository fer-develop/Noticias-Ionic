import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private url = 'https://newsapi.org/v2';
  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&
    category=business&apiKey=64ea72f5d1d843528bb263f0a20b527e`);
  }
}
