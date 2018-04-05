const dimibob = require('../lib')

;(async () => {
  const fmt = str => (str || 'X').split('\n').join(', ')
  const show = ({breakfast, lunch, dinner, snack}) => `아침: ${fmt(breakfast)}\n점심: ${fmt(lunch)}\n저녁: ${fmt(dinner)}\n간식: ${fmt(snack)}\n`
  const now = new Date()

  console.log('Daily Meal:\n' + show(await dimibob.daily(now)))
  console.log('Monthly Meals:\n' + (await dimibob.monthly(now)).map(show).join('\n'))
})()
