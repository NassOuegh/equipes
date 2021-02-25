import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipe } from './entities/models';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  baseurl: string = 'http://127.0.0.1:85/equipes';

  constructor(private http: HttpClient) { }

  public getEquipe(){
    return this.http.get(this.baseurl);
  }

  public postEquipe(equipe: Equipe){
    return this.http.post(this.baseurl, equipe);
  }
  public updateEquipe(equipe: Equipe){
    return this.http.put(this.baseurl, equipe);
  }
  public deleteEquipe(equipe: Equipe){
    return this.http.delete(this.baseurl+'/'+equipe.id);
  }
}