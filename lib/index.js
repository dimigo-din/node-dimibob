const dimibob = require('./dimibob')

const daily = async (date = new Date()) => {
  const res = await dimibob(date)
  const meal = k => k in res ? res[k].split('/').join('\n') : null
  return {
    breakfast: meal('breakfast'),
    lunch: meal('lunch'),
    dinner: meal('dinner'),
    snack: meal('snack')
  }
};

const monthly = async (date = new Date) => {
  const meals = [];
  const month = date.getMonth();
  for (let i = 1; month === date.getMonth(); i += 1) {
    date.setDate(i);
    meals.push(await daily(date));
  }
  return meals
};

module.exports = Object.assign(daily, {
  daily,
  monthly
})
