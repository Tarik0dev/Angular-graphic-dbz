import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbzApiService {


  private apiUrl = 'https://dragonball-api.com/api/characters?race=Saiyan';


  constructor(private http: HttpClient) { }

  getSaiyanCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

}
