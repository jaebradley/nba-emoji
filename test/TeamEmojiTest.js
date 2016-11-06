'use es6';

import TeamEmoji from '../index';
import Team from '../src/Team';

expect(() -> TeamEmoji.getEmojiFromTeam('jae')).to.throw(Error);
expect(TeamEmoji.getEmojiFromTeam(Team.BOSTON_CELTICS)).to.eql();
