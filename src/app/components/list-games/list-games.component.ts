import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterTypes, Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import { FilterGamesComponent } from '../filter-games/filter-games.component';
import { CommonModule } from '@angular/common';
import { CardGamesComponent } from '../card-games/card-games.component';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [
    RouterOutlet,
    FilterGamesComponent,
    CardGamesComponent,
    CommonModule,
  ],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.scss'
})
export class ListGamesComponent implements OnInit {
  title: string = 'frontend-games-app';
  allGames: Game[] = [];
  toListGames: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // Puedes llamar a métodos del servicio aquí
    this.gameService.getAllGames().subscribe(
      (data: Game[]) => {
        this.allGames = data;
        this.allGames = this.allGames.slice(0, 6) // Asigna los datos recibidos al array de juegos
        this.toListGames = [...this.allGames]
      },
      (error) => {
        console.error('Error fetching games:', error); // Manejo de errores
      }
    );
  }

  applyFilter(fields: any) {
    if (fields.search) {
      
      if(fields.filterType == FilterTypes.TITLE) {
        this.toListGames = this.allGames.filter(item => 
          item.title.toLowerCase().includes(fields.search.toLowerCase())
        );
      }
      if(fields.filterType == FilterTypes.GENRE) {
        this.toListGames = this.allGames.filter(item => 
          item.genre.toLowerCase().includes(fields.search.toLowerCase())
        );

      }
      if(fields.filterType == FilterTypes.PLATFORM) {
        this.toListGames = this.allGames.filter(item => 
          item.platform.toLowerCase().includes(fields.search.toLowerCase())
        );
      }

    } else {
      this.toListGames = [...this.allGames];
    }
  }

}
