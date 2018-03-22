const viewCalories = (state = { status: true }, action) => {
  switch (action.type) {
    case 'TOGGLE_CALORIES':
      return {...state,
        status: action.status
      }
    default:
      return state;
  }
}

export default viewCalories;