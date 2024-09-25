import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../shared/search.service';
import { PlayerRanking } from '../../../../shared/models/player-ranking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trophies',
  standalone: true,
  imports: [],
  templateUrl: './trophies.component.html',
  styles: [],
})
export class TrophiesComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router) {}

  location: string = 'global';
  playerRankings: PlayerRanking[] = [];

  ngOnInit(): void {
    this.searchService.getPlayerRankingsByLocation(this.location).subscribe({
      next: (data) => (this.playerRankings = data),
      error: (error) => console.log(error),
    });
  }

  redirectToPlayerPage(tag: string) {
    this.router.navigate(['/players', tag]);
  }
}
