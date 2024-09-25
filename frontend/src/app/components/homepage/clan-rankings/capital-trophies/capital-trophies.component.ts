import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../shared/search.service';
import { Router } from '@angular/router';
import { CapitalRanking } from '../../../../shared/models/capital-ranking';

@Component({
  selector: 'app-capital-trophies',
  standalone: true,
  imports: [],
  templateUrl: './capital-trophies.component.html',
  styles: [],
})
export class CapitalTrophiesComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router) {}

  location: string = 'global';
  capitalRankings: CapitalRanking[] = [];

  ngOnInit(): void {
    this.searchService.getCapitalRankingsByLocation(this.location).subscribe({
      next: (data) => {
        this.capitalRankings = data;
      },
      error: (error) => console.log(error),
    });
  }

  redirectToClanPage(tag: string) {
    this.router.navigate(['/clans', tag]);
  }
}
