import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './search-bar.component.html',
  styles: [],
})
export class SearchBarComponent {
  tag: string = '';
  playerMode: boolean = true;
  searchType: 'players' | 'clans' = 'players';

  private router = inject(Router);

  onSearch() {
    if (this.tag) {
      if (this.searchType === 'players') {
        this.router.navigate(['/players', this.tag]);
      } else if ((this.searchType = 'clans')) {
        this.router.navigate(['/clans', this.tag]);
      }
    }
  }
}
