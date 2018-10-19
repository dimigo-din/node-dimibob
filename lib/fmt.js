const Y = d => d.getFullYear()
const M = d => d.getMonth() + 1
const D = d => d.getDate()
const E = d => '일월화수목금토'[d.getDay()]

const tokenize = str => str.split(/[*&/]/)
const pad = (value, len = 2) => value.toString(10).padStart(len, '0')

module.exports = {
  date: d => Y(d) + pad(M(d)) + pad(D(d)),
  dateKR: d => `${Y(d)}년 ${M(d)}월 ${D(d)}일 ${E(d)}요일`,
  string: str => tokenize(str || 'X').map(v => v.trim()).join(', ')
}
