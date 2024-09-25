import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PlayerRankingsComponent } from './player-rankings/player-rankings.component';
import { ClanRankingsComponent } from './clan-rankings/clan-rankings.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SearchBarComponent, PlayerRankingsComponent, ClanRankingsComponent],
  templateUrl: './homepage.component.html',
  styles: [],
})
export class HomepageComponent {}
