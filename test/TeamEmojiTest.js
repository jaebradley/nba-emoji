'use es6';

import {expect} from 'chai';

import NbaEmoji from '../src/index';
import Team from '../src/Team';

describe('test team emoji client', function() {
  it('tests emoji from abbreviation', function() {
    expect(() => NbaEmoji.getEmoji('jae')).to.throw(Error);
    expect(NbaEmoji.getEmoji('BOS')).to.eql('🍀');
  });

  it('tests current champion', function() {
    expect(NbaEmoji.getCurrentChampion()).to.eql(Team.CLEVELAND_CAVALIERS);
    expect(NbaEmoji.getCurrentChampionEmoji()).to.eql('🏆');
  });
});
