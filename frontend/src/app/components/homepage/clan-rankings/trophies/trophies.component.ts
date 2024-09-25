import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../shared/search.service';
import { Router } from '@angular/router';
import { ClanRanking } from '../../../../shared/models/clan.ranking';

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
  clanRankings: ClanRanking[] = [];

  ngOnInit(): void {
    this.searchService.getClanRankingsByLocation(this.location).subscribe({
      next: (data) => {
        this.clanRankings = data;
      },
      error: (error) => console.log(error),
    });
  }

  redirectToClanPage(tag: string) {
    this.router.navigate(['/clans', tag]);
  }
}
