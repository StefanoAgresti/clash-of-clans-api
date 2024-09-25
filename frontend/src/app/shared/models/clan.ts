import { BadgeUrls, IconUrls, League } from './player';

export interface Clan {
  badgeUrls: BadgeUrls;
  capitalLeague: CapitalLeague;
  chatLanguage: ChatLanguage;
  clanBuilderBasePoints: number;
  clanCapital: ClanCapital;
  clanCapitalPoints: number;
  clanLevel: number;
  clanPoints: number;
  description: string;
  isFamilyFriendly: boolean;
  isWarLogPublic: boolean;
  labels: Label[];
  location: Location;
  memberList: ClanMember[];
  members: number;
  name: string;
  requiredBuilderBaseTrophies: number;
  requiredTownHallLevel: number;
  requiredTrophies: number;
  tag: string;
  type: string;
  warFrequency: string;
  warLeague: WarLeague;
  warWinStreak: number;
  warWins: number;
}

export interface Location {
  id: number;
  name: string;
  isCountry: boolean;
  countryCode: string;
}

export interface WarLeague {
  id: number;
  name: string;
}

export interface ClanMember {
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  league: League;
  trophies: number;
  versusTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
}

export interface Label {
  id: number;
  name: string;
  iconUrls: IconUrls;
}

export interface CapitalLeague {
  id: number;
  name: string;
}

export interface ChatLanguage {
  id: number;
  languageCode: string;
  name: string;
}

export interface ClanCapital {
  capitalHallLevel: number;
  districts: District[];
}

export interface District {
  districtHallLevel: number;
  id: number;
  name: string;
}
