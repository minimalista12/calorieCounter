import React from 'react'
import PropTypes from 'prop-types'
import { viewForm } from '../actions'

const DatosUser = ({ user, dispatch }) => (
  <div>
    <div className="btnBack">
      <button onClick={() => dispatch(viewForm(true))}>Atrás</button>
    </div>
    <div className="thirdPage">
      <h2>Ingesta diaria de calorías</h2>
      <div className="calculatedCalories">
        <label > {user !== undefined && user.calorias !== undefined ? user.calorias : null}</label>
      </div>
      <h3>recomendadas para ti</h3>
    </div>
    <div className="btnNext">
      <button /*onClick={() => dispatch(viewForm(true))}*/>Agregar alimentos</button>
    </div>
  </div>

)

export default DatosUser;