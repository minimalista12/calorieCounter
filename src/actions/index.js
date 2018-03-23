export const user = values => ({
  type: 'SEND_FORM',
  values
})

export const viewForm = status => ({
  type: 'TOGGLE_FORM',
  status
})

export const CalcCalories = values => ({
  type: 'SEND_CALORIES',
  values
})

export const viewCalories = status => ({
  type: 'TOGGLE_CALORIES',
  status
})