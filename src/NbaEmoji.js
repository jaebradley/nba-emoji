'use es6';

import Team from './Team';

export default class NbaEmoji {

  static getEmoji(teamAbbreviation) {
    for (let team of Team.enumValues) {
      if (team.abbreviation == teamAbbreviation) {
        return team.emoji;
      }
    }

    throw new Error('Unknown team abbreviation');
  }
}
