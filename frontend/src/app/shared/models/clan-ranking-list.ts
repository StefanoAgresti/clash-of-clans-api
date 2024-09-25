import { ClanRanking } from './clan.ranking';

export interface ClanRankingList {
  items: ClanRanking[];
  paging: Paging;
}

export interface Paging {
  cursors: Cursors;
}

export interface Cursors {
  before?: string;
  after?: string;
}
