import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'https://www.freetogame.com/api';

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games`);
  }

  getGameById(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.baseUrl}/game?id=${id}`);
  }

}
