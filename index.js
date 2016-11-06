'use es6';

import emoji from 'node-emoji';
import Team from './src/Team';

export default class TeamEmoji {
  static getEmojiFromAbbreviation(abbreviation) {

  }

  static getEmojiFromTeam(team) {
    if !(team instanceof Team) {
      throw new Error('team must be a Team instance');
    }

    return emoji.get(team.emoji);
  }
}
