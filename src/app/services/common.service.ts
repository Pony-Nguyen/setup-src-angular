import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  url = environment.api;

  constructor(private http: HttpClient) {}

  public getNews(): Observable<any> {
    return this.http.get<any>(`${this.url}/`);
  }
}
