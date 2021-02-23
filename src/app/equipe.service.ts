import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  baseurl: string = 'http://127.0.0.1:85/equipes';

  constructor(private http: HttpClient) { }

  public getEquipe(){
    return this.http.get(this.baseurl);
  }

}