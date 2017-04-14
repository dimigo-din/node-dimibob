import request from 'request'

const uri = 'http://dimigo.in/pages/dimibob_getdata.php?d='

const pad = (str, length, filler = '0') => filler.repeat(length).concat(str).slice(-length)

export default (date = new Date()) => {
  return new Promise((resolve, reject) => {
    request.get(uri + date.getFullYear() + pad(date.getMonth() + 1, 2) + pad(date.getDate(), 2), (err, data) => err ? reject(err) : resolve(JSON.parse(data.body)))
  })
}
