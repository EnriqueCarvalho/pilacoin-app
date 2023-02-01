import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../model/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {


  private readonly API_URL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
  ) { }


 
  transferirPila(transferencia: Transferencia): Observable<String> {   
    return this.httpClient.post<String>(this.API_URL+'transferePila', transferencia);      
  }
}