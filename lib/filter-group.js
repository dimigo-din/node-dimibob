import * as types from './types'

class FilterGroup {
  constructor () {
    this.data = {}
    this.computed = {}
  }

  all () {
    this.breakfast()
    this.lunch()
    this.dinner()
    this.snack()
  }

  breakfast () {
    this.computed[types.BREAKFAST] = this.canonicalize(this.data.breakfast)
  }

  lunch () {
    this.computed[types.LUNCH] = this.canonicalize(this.data.lunch)
  }

  dinner () {
    this.computed[types.DINNER] = this.canonicalize(this.data.dinner)
  }

  snack () {
    this.computed[types.SNACK] = this.canonicalize(this.data.snack)
  }

  canonicalize (v) {
    return v.split('/')
  }
}

export default FilterGroup
