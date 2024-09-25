import { Component, Input, OnInit } from '@angular/core';
import { Troop } from '../../../../shared/models/player';

@Component({
  selector: 'app-player-army',
  standalone: true,
  imports: [],
  templateUrl: './player-army.component.html',
  styleUrl: './player-army.component.css',
})
export class PlayerArmyComponent implements OnInit {
  @Input() sortedTroops: Troop[] = [];

  homeArmy: Troop[] = [];

  troops: Troop[] = [];
  superTroops: Troop[] = [];
  siegeMachines: Troop[] = [];
  pets: Troop[] = [];

  ngOnInit(): void {
    this.homeArmy = this.sortedTroops.filter(
      (troop) => troop.village === 'home'
    );
    console.log('home army: ', this.homeArmy);

    this.troops = this.homeArmy.slice(0, 28);
    console.log('troops', this.troops);

    this.superTroops = this.homeArmy.slice(28, 44);
    console.log('super troops', this.superTroops);

    this.siegeMachines = this.homeArmy.slice(44, 52);
    console.log('siege machines', this.siegeMachines);

    this.pets = this.homeArmy.slice(52);
    console.log('pets', this.pets);
  }

  getTroopImage(troopName: string) {
    return `troops/${troopName}.png`;
  }
}
