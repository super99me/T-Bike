import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../../shared/common/constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(
    private http: HttpClient,
    private constant: Constants,
  ) { }

  search(model: any): Observable<any> {
    return this.http.post<any>(this.constant.ServerWithApiUrl + 'product/search', model, httpOptions);
  }

  login(model: any): Observable<any> {
    return this.http.post<any>(this.constant.ServerWithApiUrl + 'user/login', model, httpOptions);
  }
}
