import { Component, Input } from '@angular/core';
import { Player } from '../../../../shared/models/player';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-capital-statistics',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './capital-statistics.component.html',
  styleUrl: './capital-statistics.component.css',
})
export class CapitalStatisticsComponent {
  @Input() player!: Player;
}
