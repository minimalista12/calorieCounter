import React from 'react'
import PropTypes from 'prop-types'

const DatosUser = ({ user, funtionEjec }) => (
  <div className="container-fluid">
    <label > { user !==undefined && user.calorias!==undefined ? user.calorias : 'No calorias'}</label>
    <button type="button" className="btn btn-primary" onClick={funtionEjec} >  click me</button>
  </div>
  
)

export default DatosUser;