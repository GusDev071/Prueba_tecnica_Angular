import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista_marcas } from '../models/marcas.model';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  private apiUrl = 'https://api.viveplus.com.mx/v1/?key=AQGE23BDKW$&m=lista_marcas';

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<{Marcas: Lista_marcas[]}>{
    return this.http.get<{Marcas: Lista_marcas[]}>(this.apiUrl);
  }
}
