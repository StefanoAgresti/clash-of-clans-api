import { Component, Input, OnInit } from '@angular/core';
import { Troop } from '../../../../shared/models/player';

@Component({
  selector: 'app-bb-army',
  standalone: true,
  imports: [],
  templateUrl: './bb-army.component.html',
  styleUrl: './bb-army.component.css',
})
export class BbArmyComponent implements OnInit {
  @Input() sortedTroops: Troop[] = [];

  builderBaseArmy: Troop[] = [];

  ngOnInit(): void {
    this.builderBaseArmy = this.sortedTroops.filter(
      (troop) => troop.village === 'builderBase'
    );
    console.log('builder base army: ', this.builderBaseArmy);
  }

  getTroopImage(troopName: string) {
    return `troops/${troopName}.png`;
  }
}
