import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Categoria/';
  }

  saveCategoria(categoria: Categoria): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, categoria);
  }

  getListCategorias(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListCategorias');
  }

  deleteCategoria(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  getCategoria(id: number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + id);
  }

}
