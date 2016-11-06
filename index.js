'use es6';

import emoji from 'node-emoji';
import Team from './src/Team';


export default class TeamEmoji {
  static getEmojiFromAbbreviation(abbreviation) {
    for (let team of Team.enumValues) {
      if (team.abbreviation == abbreviation) {
        return TeamEmoji.getEmojiFromTeam(team);
      }
    }

    throw new Error('Unknown team abbrevation');
  }

  static getEmojiFromTeam(team) {
    if !(team instanceof Team) {
      throw new Error('team must be a Team instance');
    }

    if (team == TeamEmoji.getCurrentChampion()) {
      return emoji.get(TeamEmoji.getCurrentChampionEmojiValue());
    }

    return emoji.get(team.emoji);
  }

  static getCurrentChampion() {
    return Team.CLEVELAND_CAVALIERS;
  }

  static getCurrentChampionEmojiValue() {
    return 'trophy';
  }
}
