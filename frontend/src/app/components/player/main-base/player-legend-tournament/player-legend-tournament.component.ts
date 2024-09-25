import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
  selector: 'app-player-legend-tournament',
  standalone: true,
  imports: [],
  templateUrl: './player-legend-tournament.component.html',
  styleUrl: './player-legend-tournament.component.css',
})
export class PlayerLegendTournamentComponent {
  @Input() player!: Player;
}
