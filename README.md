# node-dimibob
[![CircleCI](https://img.shields.io/circleci/project/github/dimigoin/node-dimibob.svg?style=flat-square)](https://circleci.com/gh/dimigoin/node-dimibob)
![npm version](https://img.shields.io/npm/v/dimibob.svg?style=flat-square)
![npm license](https://img.shields.io/npm/l/dimibob.svg?style=flat-square)
![npm downloads](https://img.shields.io/npm/dt/dimibob.svg?style=flat-square)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)

한국디지털미디어고등학교 급식 조회 프로그램<br>
Lookup meals information of [Korea Digital Media Highschool](https://dimigo.hs.kr/).

## Install
```bash
$ npm i dimibob
$ yarn add dimibob
```

## Usage
```js
import dimibob from 'dimibob'
dimibob.daily().then(console.log)
```

```js
{ breakfast: '우거지해장국/쌀밥/생선커틀렛/비엔나볶음/참나물무침/포기김치/그레놀라씨리얼/우유',
  lunch: '참치마요덮밥/들깨무채국/야채떡볶이/찰순대/깍두기/요구르트',
  dinner: '바베큐장각구이/볶음밥/가츠오장국/샐러드우동/영콘맛살볶음/무말랭이/포기김치/오렌지/매실쥬스',
  snack: '생크림모카번/덴마크요구르트',
  date: '2018-04-05' }
```

### CLI
```bash
# install
$ npm i dimibob -g
$ yarn global add dimibob

# show daily meal
$ dimibob
```

## Why not [calcium](https://npmjs.com/package/calcium)?
Short answer: *You can't*.

KDMHS *does not* upload its meal information to NEIS server but to [its official homepage](https://dimigo.hs.kr/index.php?mid=school_cafeteria). This module uses [another source](https://dimigo.in) that constantly provides machine-readable meal data by using [dimibob-py](https://github.com/ChalkPE/dimibob-py).

## API

### `dimibob()`
Fetches meal data of specific day.
```js
import dimibob from 'dimibob'

async function example () {
  const { dinner } = await dimibob(new Date(2018, 3, 1))
  console.log(`Special dinner for April Fools' day is ${dinner}`)
}
```

#### Syntax
```js
function dimibob(date: Date?, endpoint: String?): Promise<Meal>
```

#### Parameters
##### date (optional)
The [date] on which you want to fetch meal data. Defaults to `new Date()`.

##### endpoint (optional)
URL of Meal API endpoint. Trailing slash is required. Defaults to [`endpoint.dev`](lib/endpoint.js).

#### Return value
[Meal object] containing the meal data.

### `dimibob.daily()`
Just an alias of `dimibob()`.

### `dimibob.monthly()`
Fetches meal list of every days of specific month.

```js
import { monthly } from 'dimibob'

async function example () {
  const list = await monthly(new Date(2018, 2, 17)) // day is irrelevant
  console.log(`March 14th: White day, and macaroons! ${list[13].lunch}`)
}
```

#### Syntax
```js
function monthly(date: Date?, endpoint: String?): Promise<Meal[]>
```

#### Parameters
See [`dimibob()`](#parameters)

#### Return value
An array of [meal object] containing *monthly* meal data.

[date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[meal object]: https://api.dimigo.in/#!/dimibobs/get_dimibob_today_resource

## License
[MIT License](LICENSE)
