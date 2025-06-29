import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista_categorias } from '../models/categorias.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private apiUrl = 'https://api.viveplus.com.mx/v1/?key=AQGE23BDKW$&m=lista_categorias'; 

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<{Categorias: Lista_categorias[]}> {
    return this.http.get<{Categorias:Lista_categorias[]}>(this.apiUrl);
  }
}
