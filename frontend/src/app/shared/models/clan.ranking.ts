export interface ClanRanking {
  tag: string;
  name: string;
  location: Location;
  badgeUrls: BadgeUrls;
  clanLevel: number;
  members: number;
  rank: number;
  previousRank: number;
  clanPoints: number;
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
