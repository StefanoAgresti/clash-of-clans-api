import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
  selector: 'app-player-statistics',
  imports: [],
  templateUrl: './player-statistics.component.html',
})
export class PlayerStatisticsComponent {
  @Input() player!: Player;
}
