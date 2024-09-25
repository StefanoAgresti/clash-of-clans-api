import { Component } from '@angular/core';
import { Clan } from '../../shared/models/clan';
import { SearchService } from '../../shared/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clan',
  standalone: true,
  imports: [],
  templateUrl: './clan.component.html',
  styles: [],
})
export class ClanComponent {
  clanTag: string = '';
  clan!: Clan;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.clanTag = params.get('tag') || '';
      if (this.clanTag && this.clanTag.includes('#')) {
        this.clanTag = this.clanTag.replace('#', '');
      }
    });
    this.searchService.getClanByTag(this.clanTag).subscribe({
      next: (data) => {
        this.clan = data;
      },
    });
  }
}
