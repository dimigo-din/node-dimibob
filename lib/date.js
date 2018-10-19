const day = (d, v) => new Date(d.getFullYear(), d.getMonth(), v)
const lenMonth = d => new Date(d.getFullYear(), 1 + d.getMonth(), 0).getDate()
const daysInMonth = d => Array.from(Array(lenMonth(d)), (_, i) => day(d, 1 + i))

module.exports = {
  day,
  lenMonth,
  daysInMonth
}
