import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MineiracaoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private readonly API_URL = 'http://localhost:8080/';


  iniciarMineiracao(): Observable<String> {
    return this.httpClient.post<String>(this.API_URL+'iniciarMineiracao', '');      
  }


  pararMineiracao(): Observable<String> {
    return this.httpClient.post<String>(this.API_URL+'pararMineiracao', '');      
  }
}
