# NBA Emojis (As A NodeJS Service)

[![Build Status](https://travis-ci.org/jaebradley/nba-emoji.svg?branch=master)](https://travis-ci.org/jaebradley/nba-emoji)
[![codecov](https://codecov.io/gh/jaebradley/nba-emoji/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/nba-emoji)
[![nba-emoji](https://img.shields.io/npm/v/nba-emoji.svg)](nba-emoji)
[![npm](https://img.shields.io/npm/dt/nba-emoji.svg)](nba-emoji)

## Usage

```javascript
import {
  get,
  getAll,
  TEAM,
  SEASON,
} from 'nba-emoji';

// Get Boston Celtics Emoji for Current Season 🍀
console.log(get({ team: TEAM.BOSTON_CELTICS }));

// Get Boston Celtics Emoji for 2016-2017 Season 🍀
console.log(get({ team: TEAM.BOSTON_CELTICS, season: SEASON_2016_2017 }));

// Get Boston Celtics Emoji for 2016-2017 Season 🍀
console.log(get({ team: 'Boston Celtics', season: SEASON_2016_2017 }));

// Get Boston Celtics Emoji for 2016-2017 Season 🍀
console.log(get({ team: 'BOS', season: SEASON_2016_2017 }));

// Get Gold State Warriors Emoji for 2016-2017 Season 🏆
console.log(get({ team: TEAM.GOLDEN_STATE_WARRIORS, season: SEASON_2016_2017 }));

// Gets all emojis for Current Season
console.log(getAll());

// Gets all emojis for 2016-2017 Season
console.log(getAll(SEASON_2016_2017));
```

**ONlY SEASONS FROM 2014 ARE CURRENTLY SUPPORTED**

## Teams

* Atlanta Hawks
  * `abbreviation`: `ATL`
  * `emoji`: 🦅
* Boston Celtics
  * `abbreviation`: `BOS`
  * `emoji`: 🍀
* Brooklyn Nets
  * `abbreviation`: `BKN`
  * `emoji`: 🌆
* Charlotte Hornets
  * `abbreviation`: `CHA`
  * `emoji`: 🐝:
* Chicago Bulls
  * `abbreviation`: `CHI`
  * `emoji`: 🐮
* Cleveland Cavaliers
  * `abbreviation`: `CLE`
  * `emoji`: ⚔️
* Dallas Mavericks
  * `abbreviation`: `DAL`
  * `emoji`: 🐴
* Denver Nuggets
  * `abbreviation`: `DEN`
  * `emoji`: ⚒️'
* Detroit Pistons
  * `abbreviation`: `DET`
  * `emoji`: 🔧
* Golden State Warriors
  * `abbreviation`: `GSW`
  * `emoji`: 👌
* Houston Rockets
  * `abbreviation`: `HOU`
  * `emoji`: 🚀
* Indiana Pacers
  * `abbreviation`: `IND`
  * `emoji`: 🏎️'
* Los Angeles Clippers
  * `abbreviation`: `LAC`
  * `emoji`: ⛵
* Los Angeles Lakers
  * `abbreviation`: `LAL`
  * `emoji`: 🎥
* Memphis Grizzles
  * `abbreviation`: `MEM`
  * `emoji`: 🐻
* Miami Heat
  * `abbreviation`: `MIA`
  * `emoji`: 🔥
* Milwaukee Bucks
  * `abbreviation`: `MIL`
  * `emoji`: 🦌
* Minnesota Timberwolves
  * `abbreviation`: `MIN`
  * `emoji`: 🐺
* New Orleans Pelicans
  * `abbreviation`: `NOP`
  * `emoji`: ⚜️
* New York Knicks
  * `abbreviation`: `NYK`
  * `emoji`: 🗽
* Oklahoma City Thunder
  * `abbreviation`: `OKC`
  * `emoji`: 💥
* Orlando Magic
  * `abbreviation`: `ORL`
  * `emoji`: 🔮
* Philadelphia 76ers
  * `abbreviation`: `PHI`
  * `emoji`: 🔔
* Phoenix Suns
  * `abbreviation`: `PHX`
  * `emoji`: ☀️
* Portland Trail Blazers
  * `abbreviation`: `POR`
  * `emoji`: 🌲
* Sacramento Kings
  * `abbreviation`: `SAC`
  * `emoji`: 👑
* San Antonio Spurs
  * `abbreviation`: `SAS`
  * `emoji`: 🌵
* Toronto Raptors
  * `abbreviation`: `TOR`
  * `emoji`: 🍁
* Utah Jazz
  * `abbreviation`: `UTA`
  * `emoji`: 🎷
* Washington Wizards
  * `abbreviation`: `WAS`
  * `emoji`: 💫
