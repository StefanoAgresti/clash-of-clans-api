import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
  selector: 'app-player-clan-info',
  imports: [],
  templateUrl: './player-clan-info.component.html',
})
export class PlayerClanInfoComponent {
  @Input() player!: Player;
}
