const r2 = require('r2')
const { date: fmt } = require('./fmt')

const uri = 'https://api.dimigo.in/dimibobs/'
const dimibob = (date = new Date()) => r2.get(uri + fmt(date)).json

const day = (d, i) => new Date(d.getFullYear(), d.getMonth(), 1 + i)
const lenMonth = d => new Date(d.getFullYear(), 1 + d.getMonth(), 0).getDate()
const daysInMonth = d => [...Array(lenMonth(d))].map((_, i) => day(d, i))

module.exports = Object.assign(dimibob, {
  daily: dimibob,
  monthly: (date = new Date()) => Promise.all(daysInMonth(date).map(dimibob))
})
