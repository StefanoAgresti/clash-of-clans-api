export interface PlayerBbRanking {
  tag: string;
  name: string;
  expLevel: number;
  rank: number;
  previousRank: number;
  builderBaseTrophies: number;
  clan: Clan;
  builderBaseLeague: BuilderBaseLeague;
  versusBattleWins: number;
}

export interface Clan {
  tag: string;
  name: string;
  badgeUrls: BadgeUrls;
}

export interface BadgeUrls {
  small: string;
  large: string;
  medium: string;
}

export interface BuilderBaseLeague {
  name: string;
  id: number;
}
