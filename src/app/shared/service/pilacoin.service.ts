import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pilaCoin } from '../model/pilaCoin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PilacoinService {

  private readonly API_URL = 'http://localhost:8080/';

  constructor(
    private http: HttpClient
  ) { }


  getMeusPilas():  Observable<pilaCoin[]>{
    return this.http.get<pilaCoin[]>(this.API_URL+'buscarPilas'); 
  }
}
