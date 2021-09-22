import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Proveedor/';
  }

  guardarProveedor(proveedor: Proveedor): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, proveedor);
  }

  getListProveedores(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListProveedores');
  }

  deleteProveedor(nitProveedor: string): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + nitProveedor);
  }

  getCuestionario(nitProveedor: string): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + nitProveedor);
  }


}
