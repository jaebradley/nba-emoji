import {
  TEAM,
  TEAM_NAME_TO_TEAM,
  TEAM_ABBREVIATION_TO_TEAM,
  TEAM_EMOJI,
  CHAMPION,
  CHAMPION_EMOJI,
  SEASON,
} from './constants';

const get = ({ team, season = SEASON.CURRENT }) => {
  let teamData = team;

  if (!!teamData && typeof teamData === 'string') {
    teamData = TEAM_NAME_TO_TEAM[team.toUpperCase()]
      || TEAM_ABBREVIATION_TO_TEAM[team.toUpperCase()];
  }

  if (!teamData) {
    throw new Error(`Unable to identify team: ${team}`);
  }

  const champion = CHAMPION[season];

  if (champion === undefined) {
    throw new Error(`Unknown season: ${season}`);
  }

  if (champion === teamData) {
    return CHAMPION_EMOJI;
  }

  return TEAM_EMOJI[teamData.name];
};

const getAll = (season = SEASON.CURRENT) => {
  const champion = CHAMPION[season];

  if (champion) {
    return {
      ...TEAM_EMOJI,
      ...{ [champion.name]: CHAMPION_EMOJI },
    };
  } else if (season === SEASON.CURRENT) {
    return TEAM_EMOJI;
  }

  throw new Error(`Unable to identify champion for season: ${season}`);
};

export {
  get,
  getAll,
  TEAM,
  SEASON,
};
