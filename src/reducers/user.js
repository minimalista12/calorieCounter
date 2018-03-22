const user = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_FORM':
      return {...state,
        edad: action.values.edad,
        nombre: action.values.nombre,
        apellido: action.values.apellido,
        calorias: calculoCalorias(action.values.sexo, action.values.edad, action.values.estatura, action.values.fa, action.values.peso)
      }
    default:
      return state
  }
}

function calculoCalorias(sexo, edad, estatura, fa, peso) {

  if (sexo === "F")
    return ((655 + (9.6 * peso)) + ((1.8 * estatura) - (4.7 * edad)) * fa);
  else
    return ((66 + (13.7 * peso)) + ((5 * estatura) - (6.8 * edad)) * fa);
}

export default user;