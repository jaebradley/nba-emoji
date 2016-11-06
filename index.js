'use es6';

import Team from './src/Team';

export default class NbaEmoji {
  static getEmoji(teamAbbreviation) {
    for (let team of Team.enumValues) {
      if (team.abbreviation == teamAbbreviation) {
        return team == NbaEmoji.getCurrentChampion() ?
          NbaEmoji.getCurrentChampionEmoji()
          : team.emoji;
      }
    }

    throw new Error('Unknown team abbreviation');
  }

  static getCurrentChampion() {
    return Team.CLEVELAND_CAVALIERS;
  }

  static getCurrentChampionEmoji() {
    return '🏆';
  }
}
