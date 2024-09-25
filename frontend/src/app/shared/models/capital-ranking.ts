export interface CapitalRanking {
  tag: string;
  name: string;
  location: Location;
  badgeUrls: BadgeUrls;
  clanLevel: string;
  members: string;
  rank: number;
  previousRank: number;
  clanCapitalPoints: number;
}

export interface Location {
  id: number;
  name: string;
  isCountry: boolean;
  countryCode: string;
}

export interface BadgeUrls {
  small: string;
  large: string;
  medium: string;
}
