import { Component } from '@angular/core';
import { TrophiesComponent } from './trophies/trophies.component';
import { BuilderBaseTrophiesComponent } from './builder-base-trophies/builder-base-trophies.component';
import { CapitalTrophiesComponent } from './capital-trophies/capital-trophies.component';

@Component({
  selector: 'app-clan-rankings',
  standalone: true,
  imports: [
    TrophiesComponent,
    BuilderBaseTrophiesComponent,
    CapitalTrophiesComponent,
  ],
  templateUrl: './clan-rankings.component.html',
  styles: [],
})
export class ClanRankingsComponent {}
