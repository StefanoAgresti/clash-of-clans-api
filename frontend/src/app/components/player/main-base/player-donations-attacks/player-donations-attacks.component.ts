import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
  selector: 'app-player-donations-attacks',
  standalone: true,
  imports: [],
  templateUrl: './player-donations-attacks.component.html',
  styleUrl: './player-donations-attacks.component.css',
})
export class PlayerDonationsAttacksComponent {
  @Input() player!: Player;
}
