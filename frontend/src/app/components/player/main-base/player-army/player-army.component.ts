import { Component, Input, OnInit } from '@angular/core';
import { Troop } from '../../../../shared/models/player';
import { TroopCategories } from '../../player.component';

@Component({
  selector: 'app-player-army',
  imports: [],
  templateUrl: './player-army.component.html',
})
export class PlayerArmyComponent implements OnInit {
  @Input() sortedTroops!: TroopCategories;

  troops: Troop[] = [];
  superTroops: Troop[] = [];
  siegeMachines: Troop[] = [];
  pets: Troop[] = [];

  ngOnInit(): void {
    this.troops = this.sortedTroops.troops.filter(
      (troop) => troop.village === 'home'
    );
    this.superTroops = this.sortedTroops.superTroops.filter(
      (troop) => troop.village === 'home'
    );
    this.siegeMachines = this.sortedTroops.siegeMachines.filter(
      (troop) => troop.village === 'home'
    );
    this.pets = this.sortedTroops.pets.filter(
      (troop) => troop.village === 'home'
    );
  }

  getTroopImage(troopName: string) {
    return `troops/${troopName}.png`;
  }
}
