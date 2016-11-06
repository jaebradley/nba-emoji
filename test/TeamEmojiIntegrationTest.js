'use es6';

import {expect} from 'chai';
import emoji from 'node-emoji';

import NbaEmoji from '../index';
import Team from '../src/Team';

describe('test team emoji integration test', function() {
  it('tests emojis', function() {
    expect(NbaEmoji.getEmoji(Team.ATLANTA_HAWKS.abbreviation)).to.eql('🐦');
  });
})
