import { Component } from '@angular/core';
import { TrophiesComponent } from './trophies/trophies.component';
import { BuilderBaseTrophiesComponent } from './builder-base-trophies/builder-base-trophies.component';

@Component({
  selector: 'app-player-rankings',
  standalone: true,
  imports: [TrophiesComponent, BuilderBaseTrophiesComponent],
  templateUrl: './player-rankings.component.html',
  styles: [],
})
export class PlayerRankingsComponent {}
