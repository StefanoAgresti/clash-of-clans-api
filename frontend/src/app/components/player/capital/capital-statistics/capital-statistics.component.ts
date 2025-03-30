import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-capital-statistics',
  imports: [DecimalPipe],
  templateUrl: './capital-statistics.component.html',
})
export class CapitalStatisticsComponent {
  @Input() player!: Player;
}
