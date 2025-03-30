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

export interface TroopCategories {
  troops: Troop[];
  superTroops: Troop[];
  builderBaseTroops: Troop[];
  siegeMachines: Troop[];
  pets: Troop[];
}

@Component({
  selector: 'app-player',
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
  sortedTroops: TroopCategories = {
    troops: [],
    superTroops: [],
    builderBaseTroops: [],
    siegeMachines: [],
    pets: [],
  };

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
      },
    });
  }

  switchBase(selectedBase: 'main' | 'builder' | 'capital') {
    this.base = selectedBase;
  }

  sortTroops() {
    const troopCategories: TroopCategories = {
      troops: [],
      superTroops: [],
      builderBaseTroops: [],
      siegeMachines: [],
      pets: [],
    };

    this.player.troops.forEach((troop) => {
      if (customOrder.troops.includes(troop.name)) {
        troopCategories.troops.push(troop);
      } else if (customOrder.superTroops.includes(troop.name)) {
        troopCategories.superTroops.push(troop);
      } else if (customOrder.builderBaseTroops.includes(troop.name)) {
        troopCategories.builderBaseTroops.push(troop);
      } else if (customOrder.siegeMachines.includes(troop.name)) {
        troopCategories.siegeMachines.push(troop);
      } else if (customOrder.pets.includes(troop.name)) {
        troopCategories.pets.push(troop);
      }
    });

    this.sortedTroops = troopCategories;
  }
}
