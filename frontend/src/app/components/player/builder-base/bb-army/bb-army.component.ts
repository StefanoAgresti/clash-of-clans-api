import { Component, Input, OnInit } from '@angular/core';
import { Troop } from '../../../../shared/models/player';
import { TroopCategories } from '../../player.component';

@Component({
  selector: 'app-bb-army',
  imports: [],
  templateUrl: './bb-army.component.html',
})
export class BbArmyComponent implements OnInit {
  @Input() sortedTroops!: TroopCategories;

  builderBaseArmy: Troop[] = [];

  ngOnInit(): void {
    this.builderBaseArmy = this.sortedTroops.builderBaseTroops.filter(
      (troop) => troop.village === 'builderBase'
    );
  }

  getTroopImage(troopName: string) {
    return `troops/${troopName}.png`;
  }
}
