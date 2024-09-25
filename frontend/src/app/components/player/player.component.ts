import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../shared/search.service';
import { Player, Troop } from '../../shared/models/player';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerInfoComponent } from './main-base/player-info/player-info.component';
import { PlayerClanInfoComponent } from './main-base/player-clan-info/player-clan-info.component';
import { PlayerStatisticsComponent } from './main-base/player-statistics/player-statistics.component';
import { PlayerDonationsAttacksComponent } from './main-base/player-donations-attacks/player-donations-attacks.component';
import { PlayerLegendTournamentComponent } from './main-base/player-legend-tournament/player-legend-tournament.component';
import { StatisticsComponent } from './builder-base/statistics/statistics.component';
import { TournamentComponent } from './builder-base/tournament/tournament.component';
import { NgClass } from '@angular/common';
import { CapitalStatisticsComponent } from './capital/capital-statistics/capital-statistics.component';
import { customOrder } from '../../shared/customOrder';
import { PlayerArmyComponent } from './main-base/player-army/player-army.component';
import { BbArmyComponent } from './builder-base/bb-army/bb-army.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    PlayerInfoComponent,
    PlayerClanInfoComponent,
    PlayerStatisticsComponent,
    PlayerDonationsAttacksComponent,
    PlayerLegendTournamentComponent,
    StatisticsComponent,
    TournamentComponent,
    NgClass,
    CapitalStatisticsComponent,
    PlayerArmyComponent,
    BbArmyComponent,
  ],
  templateUrl: './player.component.html',
  styles: [],
})
export class PlayerComponent implements OnInit {
  constructor(
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  playerTag: string = '';
  player!: Player;
  base: 'main' | 'builder' | 'capital' = 'main';
  sortedTroops: Troop[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.playerTag = params.get('tag') || '';
      if (this.playerTag && this.playerTag.includes('#')) {
        this.playerTag = this.playerTag.replace('#', '');
      }
    });
    this.searchService.getPlayerByTag(this.playerTag).subscribe({
      next: (data) => {
        console.log(data);
        this.player = data;
        this.sortTroops();
        console.log('sortedTroops: ', this.sortedTroops);
      },
    });
  }

  switchBase(selectedBase: 'main' | 'builder' | 'capital') {
    this.base = selectedBase;
  }

  // Funzione che ordina le truppe in base a customOrder
  sortTroops() {
    this.sortedTroops = this.player.troops.sort((a, b) => {
      return customOrder.indexOf(a.name) - customOrder.indexOf(b.name);
    });
  }
}
