const responseService = (state = {}, action) => {
  switch (action.type) {
    case 'RESPONSE_SERVICE':
      return {...state,
        login: action.values.login,
        id: action.values.id,
        avatar_url: action.values.avatar_url
      }
    default:
      return state
  }
}

export default responseService;