export interface PlayerRanking {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  rank: number;
  clan: Clan;
  league: League;
  attackWins: number;
  defenseWins: number;
  previousRank: number;
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

export interface League {
  id: number;
  name: string;
  iconUrls: IconUrls;
}

export interface IconUrls {
  small: string;
  tiny: string;
  medium: string;
}
