import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
  selector: 'app-player-info',
  standalone: true,
  imports: [],
  templateUrl: './player-info.component.html',
  styleUrl: './player-info.component.css',
})
export class PlayerInfoComponent {
  @Input() player!: Player;
}
