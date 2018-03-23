const calcCalories = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_CALORIES':
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

export default calcCalories;