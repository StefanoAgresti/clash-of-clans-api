import { PlayerRanking } from './player-ranking';

export interface PlayerRankingList {
  items: PlayerRanking[];
  paging: Paging;
}

export interface Paging {
  cursors: Cursors;
}

export interface Cursors {
  before?: string;
  after?: string;
}
