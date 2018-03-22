const user = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_FORM':
      return {...state,
        genero: action.values.gender,
        edad: action.values.edad,
        estatura: action.values.estatura,
        peso: action.values.peso,
        actividad: action.values.activity,
        calorias: calculoCalorias(parseFloat(action.values.gender), parseFloat(action.values.edad), parseFloat(action.values.estatura), parseFloat(action.values.activity), parseFloat(action.values.peso))
      }
    default:
      return state
  }
}

function calculoCalorias(genero, edad, estatura, actividad, peso) {

  if (genero === "female")
    return Math.round(((655 + (9.6 * peso)) + ((1.8 * estatura) - (4.7 * edad)) * actividad));
  else
    return Math.round(((66 + (13.7 * peso)) + ((5 * estatura) - (6.8 * edad)) * actividad));
}

export default user;