const CalcCalories = (state = {}, action) => {
  switch (action.type) {
    case 'CALORIES_REST':
      return {...state,
        calories: dailyCalories,
        food: foodCalories,
        resta: calcResta(dailyCalories, foodCalories)
      }
    default:
      return state
  }
}

function calculoCalorias(dailyCalories, foodCalories) {
  return (dailyCalories - foodCalories);

}

export default CalcCalories;