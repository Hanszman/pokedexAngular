import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespostaClass } from '../classes/resposta-class'; 
import { ConfigClass } from '../classes/config-class';

const caminho = ConfigClass.getUrlApi().toString();

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getTodosPokemon(url: string): Observable<HttpResponse<RespostaClass>> {
    return this.http.get<RespostaClass>(
      caminho + 'pokemon' + url, {observe: 'response'}
    );
  }

  getTodosRegion(): Observable<HttpResponse<RespostaClass>> {
    return this.http.get<RespostaClass>(
      caminho + 'region', {observe: 'response'}
    );
  }

  getTodosType(): Observable<HttpResponse<RespostaClass>> {
    return this.http.get<RespostaClass>(
      caminho + 'type', {observe: 'response'}
    );
  }
}
