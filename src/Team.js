'use es6';

import {Enum} from 'enumify';

export default class Team extends Enum {};

Team.initEnum({
  ATLANTA_HAWKS: {
    abbreviation: 'ATL',
    emoji: '🐦',
  },
  BOSTON_CELTICS: {
    abbreviation: 'BOS',
    emoji: '🍀',
  },
  BROOKLYN_NETS: {
    abbreviation: 'BKN',
    emoji: '🌆',
  },
  CLEVELAND_CAVALIERS: {
    abbreviation: 'CLE',
    emoji: '⚔',
  },
  CHARLOTTE_HORNETS: {
    abbreviation: 'CHA',
    emoji: '🐝',
  },
  CHICAGO_BULLS: {
    abbreviation: 'CHI',
    emoji: '🐮',
  },
  DALLAS_MAVERICKS: {
    abbreviation: 'DAL',
    emoji: '🐴',
  },
  DENVER_NUGGETS: {
    abbreviation: 'DEN',
    emoji: '🔨',
  },
  DETROIT_PISTONS: {
    abbreviation: 'DET',
    emoji: '🔧',
  },
  GOLDEN_STATE_WARRIORS: {
    abbreviation: 'GSW',
    emoji: '👌',
  },
  HOUSTON_ROCKETS: {
    abbreviation: 'HOU',
    emoji: '🚀',
  },
  INDIANA_PACERS: {
    abbreviation: 'IND',
    emoji: '🏁',
  },
  LOS_ANGELES_CLIPPERS: {
    abbreviation: 'LAC',
    emoji: '🚢',
  },
  LOS_ANGELES_LAKERS: {
    abbreviation: 'LAL',
    emoji: '🎥',
  },
  MEMPHIS_GRIZZLIES: {
    abbreviation: 'MEM',
    emoji: '🐻',
  },
  MIAMI_HEAT: {
    abbreviation: 'MIA',
    emoji: '🔥',
  },
  MILWAUKEE_BUCKS: {
    abbreviation: 'MIL',
    emoji: '🍻',
  },
  MINNESOTA_TIMBERWOLVES: {
    abbreviation: 'MIN',
    emoji: '🐺',
  },
  NEW_ORLEANS_PELICANS: {
    abbreviation: 'NOP',
    emoji: '⚜',
  },
  NEW_YORK_KNICKS: {
    abbreviation: 'NYK',
    emoji: '🗽',
  },
  OKLAHOMA_CITY_THUNDER: {
    abbreviation: 'OKC',
    emoji: '💥',
  },
  ORLANDO_MAGIC: {
    abbreviation: 'ORL',
    emoji: '🔮',
  },
  PHILADELPHIA_76ERS: {
    abbreviation: 'PHI',
    emoji: '🔔',
  },
  PHOENIX_SUNS: {
    abbreviation: 'PHX',
    emoji: '🔆',
  },
  PORTLAND_TRAIL_BLAZERS: {
    abbreviation: 'POR',
    emoji: '💧',
  },
  SACRAMENTO_KINGS: {
    abbreviation: 'SAC',
    emoji: '👑',
  },
  SAN_ANTONIO_SPURS: {
    abbreviation: 'SAS',
    emoji: '🌵',
  },
  TORONTO_RAPTORS: {
    abbreviation: 'TOR',
    emoji: '🍁',
  },
  UTAH_JAZZ: {
    abbreviation: 'UTA',
    emoji: '🎷',
  },
  WASHINGTON_WIZARDS: {
    abbreviation: 'WAS',
    emoji: '💫',
  },
});
