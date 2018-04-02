const dimibob = require('./dimibob')

/**
 * @typedef {Object} Meal
 * @property {?string} breakfast
 * @property {?string} lunch
 * @property {?string} dinner
 * @property {?string} snack
 */

/**
 * @async
 * @param {Date} [date=new Date()]
 * @returns {Meal}
 */
const daily = async (date = new Date()) => {
  const res = await dimibob(date)
  const meal = k => (res[k] || '').split('/').join('\n') || null
  return {
    breakfast: meal('breakfast'),
    lunch: meal('lunch'),
    dinner: meal('dinner'),
    snack: meal('snack')
  }
}

/**
 * @async
 * @param {Date} [date=new Date()]
 * @returns {Array.<Meal>}
 */
const monthly = async (date = new Date()) => {
  const meals = []
  const month = date.getMonth()
  date.setDate(1)
  for (let i = 1; month === date.getMonth(); i += 1) {
    date.setDate(i)
    meals.push(await daily(date))
  }
  return meals
}

module.exports = Object.assign(daily, {
  daily,
  monthly
})
