const pad = (value, len = 2) => value.toString().padStart(len, '0')

module.exports = {
  string: str => (str || 'X').split('/').join(', '),
  date: d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}
