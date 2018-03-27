const r2 = require('r2')
const uri = 'https://api.dimigo.in/dimibobs/'
const fmt = d => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`

module.exports = (date = new Date()) => r2.get(uri + fmt(date)).json
