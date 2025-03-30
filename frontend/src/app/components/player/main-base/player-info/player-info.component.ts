import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
  selector: 'app-player-info',
  imports: [],
  templateUrl: './player-info.component.html',
})
export class PlayerInfoComponent {
  @Input() player!: Player;
}
