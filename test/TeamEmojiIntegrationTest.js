'use es6';

import {expect} from 'chai';

import NbaEmoji from '../src/index';
import Team from '../src/Team';

describe('test team emoji integration test', function() {
  it('tests emojis', function() {
    expect(NbaEmoji.getEmoji('ATL')).to.eql('🐦');
    expect(NbaEmoji.getEmoji('BOS')).to.eql('🍀');
    expect(NbaEmoji.getEmoji('BKN')).to.eql('🌆');
    expect(NbaEmoji.getEmoji('CLE')).to.eql(NbaEmoji.getCurrentChampionEmoji());
    expect(NbaEmoji.getEmoji('CHA')).to.eql('🐝');
    expect(NbaEmoji.getEmoji('CHI')).to.eql('🐮');
    expect(NbaEmoji.getEmoji('DAL')).to.eql('🐴');
    expect(NbaEmoji.getEmoji('DEN')).to.eql('🔨');
    expect(NbaEmoji.getEmoji('DET')).to.eql('🔧');
    expect(NbaEmoji.getEmoji('GSW')).to.eql('👌');
    expect(NbaEmoji.getEmoji('HOU')).to.eql('🚀');
    expect(NbaEmoji.getEmoji('IND')).to.eql('🏁');
    expect(NbaEmoji.getEmoji('LAC')).to.eql('🚢');
    expect(NbaEmoji.getEmoji('LAL')).to.eql('🎥');
    expect(NbaEmoji.getEmoji('MEM')).to.eql('🐻');
    expect(NbaEmoji.getEmoji('MIA')).to.eql('🔥');
    expect(NbaEmoji.getEmoji('MIL')).to.eql('🍻');
    expect(NbaEmoji.getEmoji('MIN')).to.eql('🐺');
    expect(NbaEmoji.getEmoji('NOP')).to.eql('⚜');
    expect(NbaEmoji.getEmoji('NYK')).to.eql('🗽');
    expect(NbaEmoji.getEmoji('OKC')).to.eql('💥');
    expect(NbaEmoji.getEmoji('ORL')).to.eql('🔮');
    expect(NbaEmoji.getEmoji('PHI')).to.eql('🔔');
    expect(NbaEmoji.getEmoji('PHX')).to.eql('🔆');
    expect(NbaEmoji.getEmoji('POR')).to.eql('💧');
    expect(NbaEmoji.getEmoji('SAC')).to.eql('👑');
    expect(NbaEmoji.getEmoji('SAS')).to.eql('🌵');
    expect(NbaEmoji.getEmoji('TOR')).to.eql('🍁');
    expect(NbaEmoji.getEmoji('UTA')).to.eql('🎷');
    expect(NbaEmoji.getEmoji('WAS')).to.eql('💫');
  });
})
