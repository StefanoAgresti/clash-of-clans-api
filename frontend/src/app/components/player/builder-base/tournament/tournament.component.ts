import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
    selector: 'app-tournament',
    imports: [],
    templateUrl: './tournament.component.html',
    styleUrl: './tournament.component.css'
})
export class TournamentComponent {
  @Input() player!: Player;
}
