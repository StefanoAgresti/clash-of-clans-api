export interface Player {
  tag: string;
  name: string;
  townHallLevel: number;
  townHallWeaponLevel: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  warStars: number;
  attackWins: number;
  defenseWins: number;
  builderHallLevel: number;
  builderBaseTrophies: number;
  bestBuilderBaseTrophies: number;
  role: string;
  warPreference: string;
  donations: number;
  donationsReceived: number;
  clanCapitalContributions: number;
  clan?: Clan;
  league?: League;
  builderBaseLeague: BuilderBaseLeague;
  legendStatistics: LegendStatistic;
  achievements: Achievement[];
  labels: Label[];
  troops: Troop[];
  heroes: Hero[];
  heroEquipments: Equipment[];
  spells: Spell[];
}

export interface Clan {
  tag: string;
  name: string;
  clanLevel: number;
  badgeUrls: BadgeUrls;
}

export interface League {
  id: number;
  name: string;
  iconUrls: IconUrls;
}

export interface Achievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo?: string;
  village: string;
}

export interface Troop {
  name: string;
  level: number;
  maxLevel: number;
  village: string;
}

export interface Hero {
  name: string;
  level: number;
  maxLevel: number;
  equipment: Equipment[];
  village: string;
}

export interface Spell {
  name: string;
  level: number;
  maxLevel: number;
  village: string;
}

export interface BadgeUrls {
  small: string;
  large: string;
  medium: string;
}

export interface IconUrls {
  small: string;
  tiny: string;
  medium: string;
}

export interface Label {
  id: number;
  name: string;
  iconUrls: IconUrls;
}

export interface LegendStatistic {
  legendTrophies: number;
  previousSeason: Season;
  bestSeason: Season;
  previousBuilderBaseSeason: Season;
  bestBuilderBaseSeason: Season;
  currentSeason: Season;
}

export interface Season {
  id: string;
  rank: number;
  trophies: number;
}

export interface BuilderBaseLeague {
  id: number;
  name: string;
}

export interface Equipment {
  name: string;
  level: number;
  maxLevel: number;
  village: string;
}
