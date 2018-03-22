export const user = values => ({
  type: 'SEND_FORM',
  values
})

export const responseService = values => ({
  type: 'RESPONSE_SERVICE',
  values
})

export const viewForm = status => ({
  type: 'TOGLE_FORM',
  status
})