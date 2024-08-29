import { Component, Input } from '@angular/core';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-card-games',
  standalone: true,
  imports: [],
  templateUrl: './card-games.component.html',
  styleUrl: './card-games.component.scss'
})
export class CardGamesComponent {
  @Input() game: any;

}
