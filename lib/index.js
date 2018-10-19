const r2 = require('r2')
const { dev: url } = require('./endpoint')
const { date: fmt } = require('./fmt')
const { daysInMonth } = require('./date')

const dimibob = (date = new Date(), endpoint = url) =>
  r2.get(endpoint + fmt(date)).json

const monthly = (date = new Date(), endpoint) =>
  Promise.all(daysInMonth(date).map(d => dimibob(d, endpoint)))

module.exports = Object.assign(dimibob, { daily: dimibob, monthly })
