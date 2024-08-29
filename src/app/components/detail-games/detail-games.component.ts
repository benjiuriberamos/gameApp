import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-games',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './detail-games.component.html',
  styleUrl: './detail-games.component.scss'
})
export class DetailGamesComponent implements OnInit {
  gameId: string = "0";
  game: Game | null = null;

  constructor(private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit(): void {
    // Obtén el parámetro 'id' de la URL
    this.route.paramMap.subscribe(params => {
      this.gameId = params.get('id') || '0';
      // Ahora puedes usar this.gameId en tu componente
    });

    this.gameService.getGameById(this.gameId).subscribe(
      (data: Game) => {
        this.game = data;
      },
      (error) => {
        console.error('Error fetching games:', error); // Manejo de errores
      }
    );
  }
}
