import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
  selector: 'app-player-statistics',
  standalone: true,
  imports: [],
  templateUrl: './player-statistics.component.html',
  styleUrl: './player-statistics.component.css',
})
export class PlayerStatisticsComponent {
  @Input() player!: Player;
}
