'use es6';

import {expect} from 'chai';
import emoji from 'node-emoji';

import TeamEmoji from '../index';
import Team from '../src/Team';

describe('test team emoji integration test', function() {
  it('tests emojis', function() {
    expect(TeamEmoji.getEmojiFromTeam(Team.ATLANTA_HAWKS)).to.eql('🐦');
  });
})
