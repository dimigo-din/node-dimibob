#!/usr/bin/env node
const dimibob = require('./lib/dimibob')

async function bob (date = new Date()) {
  const res = await dimibob(date)
  const meal = k => k in res ? res[k].split('/').join(', ') : 'X'
  const [y, m, d] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

  console.log(`
  오늘도 맛있는 아라코 ^^
  ${y}년 ${m}월 ${d}일 ${'일월화수목금토'[date.getDay()]}요일

  아침: ${meal('breakfast')}
  점심: ${meal('lunch')}
  저녁: ${meal('dinner')}
  간식: ${meal('snack')}`)
}

bob().catch(err => console.error(err) || process.exit(1))
