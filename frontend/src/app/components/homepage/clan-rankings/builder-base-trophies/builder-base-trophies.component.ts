import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../shared/search.service';
import { Router } from '@angular/router';
import { ClanBbRanking } from '../../../../shared/models/clan-bb-ranking';

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
  clanBbRankings: ClanBbRanking[] = [];

  ngOnInit(): void {
    this.searchService.getClanBbRankingsByLocation(this.location).subscribe({
      next: (data) => {
        this.clanBbRankings = data;
      },
      error: (error) => console.log(error),
    });
  }

  redirectToClanPage(tag: string) {
    this.router.navigate(['/clans', tag]);
  }
}
