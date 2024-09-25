import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../shared/search.service';
import { Router } from '@angular/router';
import { PlayerBbRanking } from '../../../../shared/models/player-bb-ranking';

@Component({
  selector: 'app-builder-base-trophies',
  standalone: true,
  imports: [],
  templateUrl: './builder-base-trophies.component.html',
  styles: [],
})
export class BuilderBaseTrophiesComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router) {}

  location: string = 'global';
  playerBbRankings: PlayerBbRanking[] = [];

  ngOnInit(): void {
    this.searchService.getPlayerBbRankingsByLocation(this.location).subscribe({
      next: (data) => (this.playerBbRankings = data),
      error: (error) => console.log(error),
    });
  }

  redirectToPlayerPage(tag: string) {
    this.router.navigate(['/players', tag]);
  }
}
