'use es6';

import Team from './src/Team';


export default class TeamEmoji {
  static getEmojiFromAbbreviation(abbreviation) {
    for (let team of Team.enumValues) {
      if (team.abbreviation == abbreviation) {
        return TeamEmoji.getEmojiFromTeam(team);
      }
    }

    throw new Error('Unknown team abbreviation');
  }

  static getEmojiFromTeam(team) {
    if (!(team instanceof Team)) {
      throw new Error('team must be a Team instance');
    }

    if (team == TeamEmoji.getCurrentChampion()) {
      return TeamEmoji.getCurrentChampionEmojiValue();
    }

    return team.emoji;
  }

  static getCurrentChampion() {
    return Team.CLEVELAND_CAVALIERS;
  }

  static getCurrentChampionEmojiValue() {
    return '🏆';
  }
}
