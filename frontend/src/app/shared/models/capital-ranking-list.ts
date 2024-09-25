import { CapitalRanking } from './capital-ranking';

export interface CapitalRankingList {
  items: CapitalRanking[];
  paging: Paging;
}

export interface Paging {
  cursors: Cursors;
}

export interface Cursors {
  before?: string;
  after?: string;
}
