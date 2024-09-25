import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from './models/player';
import { Clan } from './models/clan';
import { PlayerRanking } from './models/player-ranking';
import { PlayerBbRanking } from './models/player-bb-ranking';
import { CapitalRanking } from './models/capital-ranking';
import { ClanBbRanking } from './models/clan-bb-ranking';
import { ClanRanking } from './models/clan.ranking';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}
  private apiURL = 'https://clash-of-clans-api.onrender.com';

  getPlayerByTag(tag: string) {
    return this.httpClient.get<Player>(`${this.apiURL}/players/${tag}`);
  }

  getClanByTag(tag: string) {
    return this.httpClient.get<Clan>(`${this.apiURL}/clans/${tag}`);
  }

  getPlayerRankingsByLocation(location: string) {
    return this.httpClient.get<PlayerRanking[]>(
      `${this.apiURL}/locations/${location}/rankings/players`
    );
  }

  getPlayerBbRankingsByLocation(location: string) {
    return this.httpClient.get<PlayerBbRanking[]>(
      `${this.apiURL}/locations/${location}/rankings/players-builder-base`
    );
  }

  getCapitalRankingsByLocation(location: string) {
    return this.httpClient.get<CapitalRanking[]>(
      `${this.apiURL}/locations/${location}/rankings/capitals`
    );
  }

  getClanRankingsByLocation(location: string) {
    return this.httpClient.get<ClanRanking[]>(
      `${this.apiURL}/locations/${location}/rankings/clans`
    );
  }

  getClanBbRankingsByLocation(location: string) {
    return this.httpClient.get<ClanBbRanking[]>(
      `${this.apiURL}/locations/${location}/rankings/clans-builder-base`
    );
  }
}
