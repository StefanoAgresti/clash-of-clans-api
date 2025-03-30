import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
  selector: 'app-player-donations-attacks',
  imports: [],
  templateUrl: './player-donations-attacks.component.html',
})
export class PlayerDonationsAttacksComponent {
  @Input() player!: Player;
}
