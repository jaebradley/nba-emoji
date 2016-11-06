'use es6';

import {expect} from 'chai';

import TeamEmoji from '../index';
import Team from '../src/Team';

describe('test team emoji client', function() {
  it('tests emoji from abbreviation', function() {
    expect(() => TeamEmoji.getEmojiFromAbbreviation('jae')).to.throw(Error);
    expect(TeamEmoji.getEmojiFromAbbreviation('BOS')).to.eql('🍀');
  });

  it('tests emoji from Team', function() {
    expect(() => TeamEmoji.getEmojiFromTeam('jae')).to.throw(Error);
    expect(TeamEmoji.getEmojiFromTeam(Team.BOSTON_CELTICS)).to.eql('🍀');
  });

  it('tests current champion', function() {
    expect(TeamEmoji.getCurrentChampion()).to.eql(Team.CLEVELAND_CAVALIERS);
    expect(TeamEmoji.getCurrentChampionEmoji()).to.eql('🏆');
  });
});
