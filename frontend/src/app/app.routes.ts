import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlayerComponent } from './components/player/player.component';
import { ClanComponent } from './components/clan/clan.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'players/:tag',
    component: PlayerComponent,
  },
  {
    path: 'clans/:tag',
    component: ClanComponent,
  },
  { path: '**', redirectTo: '' },
];
