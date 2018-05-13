import {
  get,
  getAll,
  TEAM,
  SEASON,
} from './';

describe('NBA emojis', () => {
  describe('get', () => {
    it('tests getting emojis for a team', () => {
      expect(get({ team: TEAM.BOSTON_CELTICS })).toBe('🍀');
    });

    it('tests getting emojis for a team name', () => {
      expect(get({ team: TEAM.BOSTON_CELTICS.name })).toBe('🍀');
    });

    it('tests getting emojis for a team abbreviation', () => {
      expect(get({ team: TEAM.BOSTON_CELTICS.abbreviation })).toBe('🍀');
    });

    it('tests getting emojis for a lower-case team name', () => {
      expect(get({ team: TEAM.BOSTON_CELTICS.name.toLowerCase() })).toBe('🍀');
    });

    it('tests getting emojis for a lower-case team abbreviation', () => {
      expect(get({ team: TEAM.BOSTON_CELTICS.abbreviation.toLowerCase() })).toBe('🍀');
    });

    it('tests getting emojis for a team and season', () => {
      expect(get({ team: TEAM.BOSTON_CELTICS, season: SEASON.SEASON_2016_2017 })).toBe('🍀');
    });

    it('tests getting emojis for a championship team season', () => {
      expect(get({ team: TEAM.GOLDEN_STATE_WARRIORS, season: SEASON.SEASON_2016_2017 })).toBe('🏆');
    });

    it('throws for unknown team', () => {
      expect(() => get({ team: 'foobar' })).toThrow(/^Unable to identify team: foobar$/);
    });

    it('throws for an unknown season', () => {
      expect(() => get({ team: TEAM.GOLDEN_STATE_WARRIORS, season: 'foobar' })).toThrow(/^Unknown season: foobar$/);
    });
  });

  describe('getAll', () => {
    it('tests getting all team emojis for 2017 season', () => {
      const expected = {
        [TEAM.ATLANTA_HAWKS.name]: '🦅',
        [TEAM.BOSTON_CELTICS.name]: '🍀',
        [TEAM.BROOKLYN_NETS.name]: '🌆',
        [TEAM.CHARLOTTE_HORNETS.name]: '🐝',
        [TEAM.CHICAGO_BULLS.name]: '🐮',
        [TEAM.CLEVELAND_CAVALIERS.name]: '⚔️',
        [TEAM.DALLAS_MAVERICKS.name]: '🐴',
        [TEAM.DENVER_NUGGETS.name]: '⚒️',
        [TEAM.DETROIT_PISTONS.name]: '🔧',
        [TEAM.GOLDEN_STATE_WARRIORS.name]: '🏆',
        [TEAM.HOUSTON_ROCKETS.name]: '🚀',
        [TEAM.INDIANA_PACERS.name]: '🏎️',
        [TEAM.LOS_ANGELES_CLIPPERS.name]: '⛵',
        [TEAM.LOS_ANGELES_LAKERS.name]: '🎥',
        [TEAM.MEMPHIS_GRIZZLIES.name]: '🐻',
        [TEAM.MIAMI_HEAT.name]: '🔥',
        [TEAM.MILWAUKEE_BUCKS.name]: '🦌',
        [TEAM.MINNESOTA_TIMBERWOLVES.name]: '🐺',
        [TEAM.NEW_ORLEANS_PELICANS.name]: '⚜️',
        [TEAM.NEW_YORK_KNICKS.name]: '🗽',
        [TEAM.OKLAHOMA_CITY_THUNDER.name]: '💥',
        [TEAM.ORLANDO_MAGIC.name]: '🔮',
        [TEAM.PHILADELPHIA_76ERS.name]: '🔔',
        [TEAM.PHOENIX_SUNS.name]: '☀️',
        [TEAM.PORTLAND_TRAIL_BLAZERS.name]: '🌲',
        [TEAM.SACRAMENTO_KINGS.name]: '👑',
        [TEAM.SAN_ANTONIO_SPURS.name]: '🌵',
        [TEAM.TORONTO_RAPTORS.name]: '🍁',
        [TEAM.UTAH_JAZZ.name]: '🎷',
        [TEAM.WASHINGTON_WIZARDS.name]: '💫',
      };
      expect(getAll(SEASON.SEASON_2016_2017)).toEqual(expected);
    });

    it('tests getting all team emojis for current season', () => {
      const expected = {
        [TEAM.ATLANTA_HAWKS.name]: '🦅',
        [TEAM.BOSTON_CELTICS.name]: '🍀',
        [TEAM.BROOKLYN_NETS.name]: '🌆',
        [TEAM.CHARLOTTE_HORNETS.name]: '🐝',
        [TEAM.CHICAGO_BULLS.name]: '🐮',
        [TEAM.CLEVELAND_CAVALIERS.name]: '⚔️',
        [TEAM.DALLAS_MAVERICKS.name]: '🐴',
        [TEAM.DENVER_NUGGETS.name]: '⚒️',
        [TEAM.DETROIT_PISTONS.name]: '🔧',
        [TEAM.GOLDEN_STATE_WARRIORS.name]: '👌',
        [TEAM.HOUSTON_ROCKETS.name]: '🚀',
        [TEAM.INDIANA_PACERS.name]: '🏎️',
        [TEAM.LOS_ANGELES_CLIPPERS.name]: '⛵',
        [TEAM.LOS_ANGELES_LAKERS.name]: '🎥',
        [TEAM.MEMPHIS_GRIZZLIES.name]: '🐻',
        [TEAM.MIAMI_HEAT.name]: '🔥',
        [TEAM.MILWAUKEE_BUCKS.name]: '🦌',
        [TEAM.MINNESOTA_TIMBERWOLVES.name]: '🐺',
        [TEAM.NEW_ORLEANS_PELICANS.name]: '⚜️',
        [TEAM.NEW_YORK_KNICKS.name]: '🗽',
        [TEAM.OKLAHOMA_CITY_THUNDER.name]: '💥',
        [TEAM.ORLANDO_MAGIC.name]: '🔮',
        [TEAM.PHILADELPHIA_76ERS.name]: '🔔',
        [TEAM.PHOENIX_SUNS.name]: '☀️',
        [TEAM.PORTLAND_TRAIL_BLAZERS.name]: '🌲',
        [TEAM.SACRAMENTO_KINGS.name]: '👑',
        [TEAM.SAN_ANTONIO_SPURS.name]: '🌵',
        [TEAM.TORONTO_RAPTORS.name]: '🍁',
        [TEAM.UTAH_JAZZ.name]: '🎷',
        [TEAM.WASHINGTON_WIZARDS.name]: '💫',
      };
      expect(getAll()).toEqual(expected);
    });

    it('throws for an unknown season', () => {
      expect(() => getAll('foobar')).toThrow(/^Unable to identify champion for season: foobar$/);
    });
  });
});
