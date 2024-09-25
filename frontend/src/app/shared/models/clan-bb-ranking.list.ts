import { ClanBbRanking } from './clan-bb-ranking';

export interface ClanBbRankingList {
  items: ClanBbRanking[];
  paging: Paging;
}

export interface Paging {
  cursors: Cursors;
}

export interface Cursors {
  before?: string;
  after?: string;
}
