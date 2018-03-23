const CalcCalories = (state = {}, action) => {
  switch (action.type) {
    case 'CALORIES_REST':
      return {...state,

        calories: action.values.dailyCalories,
        suma: sumarCalorias(state.suma, action.values.foodCalories),
        resta: calculoCalorias(action.values.dailyCalories, action.values.foodCalories)
      }
    default:
      return state
  }
}

function calculoCalorias(dailyCalories, foodCalories) {
  return (dailyCalories - foodCalories);
}

function sumarCalorias(dailyCalories, foodCalories) {
  return (dailyCalories + foodCalories);
}

export default CalcCalories;