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
export class ProductService {

  constructor(
    private http: HttpClient,
    private constant: Constants,
  ) { }

  searchProduct(model: any): Observable<any> {
    return this.http.post<any>(this.constant.ServerWithApiUrl + 'product/search', model, httpOptions);
  }

  getAllBrands(): Observable<any> {
    return this.http.get<any>(this.constant.ServerWithApiUrl + 'brand/search', httpOptions);
  }

  getByProductId(id: string): Observable<any> {
    return this.http.get<any>(this.constant.ServerWithApiUrl + 'product/get-by-id/' + id, httpOptions);
  }

}
