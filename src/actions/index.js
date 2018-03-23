export const user = values => ({
  type: 'SEND_FORM',
  values
})

export const viewForm = status => ({
  type: 'TOGGLE_FORM',
  status
})

export const sustraerCalories = values => ({
  type: 'CALORIES_REST',
  values
})

export const addDaily = values => ({
  type: 'ADD_TODO',
  values
})