#!/usr/bin/env node
const dimibob = require('../lib')
const { dateKR: dt, string: fmt } = require('../lib/fmt')

async function bob (date = new Date()) {
  const { breakfast, lunch, dinner, snack } = await dimibob(date)

  console.log(`
  오늘도 맛있는 아라코 ^^
  ${dt(date)}

  아침: ${fmt(breakfast)}
  점심: ${fmt(lunch)}
  저녁: ${fmt(dinner)}
  간식: ${fmt(snack)}
  `)
}

bob().catch(err => console.error(err) || process.exit(1))
