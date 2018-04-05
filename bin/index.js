#!/usr/bin/env node
const dimibob = require('../lib')
const { string: fmt } = require('../lib/fmt')

async function bob (date = new Date()) {
  const { breakfast, lunch, dinner, snack } = await dimibob(date)
  const [y, m, d] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

  console.log(`
  오늘도 맛있는 아라코 ^^
  ${y}년 ${m}월 ${d}일 ${'일월화수목금토'[date.getDay()]}요일

  아침: ${fmt(breakfast)}
  점심: ${fmt(lunch)}
  저녁: ${fmt(dinner)}
  간식: ${fmt(snack)}
  `)
}

bob().catch(err => console.error(err) || process.exit(1))
