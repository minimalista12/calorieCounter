const dailyLimitReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: action.values.value,
        label: action.values.label
      }]
    default:
      return state
  }
}

export default dailyLimitReducer;