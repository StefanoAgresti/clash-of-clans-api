import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';

@Component({
    selector: 'app-statistics',
    imports: [],
    templateUrl: './statistics.component.html',
    styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  @Input() player!: Player;
}
