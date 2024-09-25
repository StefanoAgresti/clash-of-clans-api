import { PlayerBbRanking } from './player-bb-ranking';

export interface PlayerBbRankingList {
  items: PlayerBbRanking[];
  paging: Paging;
}

export interface Paging {
  cursors: Cursors;
}

export interface Cursors {
  before?: string;
  after?: string;
}
