#!/usr/bin/env node
const dimibob = require('./lib/dimibob')

async function bob () {
  const req = new Proxy(await dimibob() || {}, {
    get (target, name) {
      return name in target
        ? target[name].split('/').join(', ')
        : 'X'
    }
  })
  console.log('오늘도 맛있는 아라코 ^^')
  console.log(`
  ${new Date().toDateString()}

  아침 : ${req.breakfast}
  점심 : ${req.lunch}
  저녁 : ${req.dinner}
  간식 : ${req.snack}
  `)
}

try { bob() } catch (err) { console.error(err) }
