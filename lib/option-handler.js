import request from './request'
import FilterGroup from './filter-group'

class OptionHandler {
  constructor () {
    this.exec = () => Promise.resolve()
    this.filters = []
    this.filterGroup = new FilterGroup()
  }

  today () {
    return () => {
      this.exec = this._today
    }
  }

  all () {
    return () => this.filters.push(this.filterGroup.all.bind(this.filterGroup))
  }

  breakfast () {
    return () => this.filters.push(this.filterGroup.breakfast.bind(this.filterGroup))
  }

  lunch () {
    return () => this.filters.push(this.filterGroup.lunch.bind(this.filterGroup))
  }

  dinner () {
    return () => this.filters.push(this.filterGroup.dinner.bind(this.filterGroup))
  }

  snack () {
    return () => this.filters.push(this.filterGroup.snack.bind(this.filterGroup))
  }

  _today () {
    return request()
  }

  _yesterday () {
    const date = new Date()
    date.setDate(date.getDate() - 1)
    return request(date)
  }

  _specificDate (date) {
    return request.getMeal(date)
  }

  execute () {
    this.exec()
      .then((v) => {
        let result = ''
        this.filterGroup.data = v
        this.filters.forEach((v) => v())
        const computed = this.filterGroup.computed
        const f = v => (result += (computed[v].join(', ') || 'X') + '\n')
        Object.keys(computed).forEach((v) => {
          result += v + ' : '
          f(v)
        })
        console.log(result)
      })
      .catch((err) => console.error(err))
  }
}

export default new OptionHandler()
