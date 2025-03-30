import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
  selector: 'app-player-legend-tournament',
  imports: [],
  templateUrl: './player-legend-tournament.component.html',
})
export class PlayerLegendTournamentComponent {
  @Input() player!: Player;
}
