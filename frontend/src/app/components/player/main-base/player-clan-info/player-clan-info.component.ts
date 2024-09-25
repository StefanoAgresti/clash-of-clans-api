import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
  selector: 'app-player-clan-info',
  standalone: true,
  imports: [],
  templateUrl: './player-clan-info.component.html',
  styleUrl: './player-clan-info.component.css',
})
export class PlayerClanInfoComponent {
  @Input() player!: Player;
}
