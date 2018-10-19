const dimibob = require('../lib')
const { string: fmt } = require('../lib/fmt')

const show = ({ date, breakfast, lunch, dinner, snack }) =>
  `[${date}]\n아침: ${fmt(breakfast)}\n점심: ${fmt(lunch)}\n저녁: ${fmt(dinner)}\n간식: ${fmt(snack)}\n`

async function test (now = new Date()) {
  console.log('----- dimibob.daily -----\n' + show(await dimibob.daily(now)))
  console.log('----- dimibob.monthly -----\n' + (await dimibob.monthly(now)).map(show).join('\n'))
}

test()
  .then(() => console.log('Done.') || process.exit(0))
  .catch(err => console.error(err) || process.exit(1))
