import React from 'react'
import { viewCalories } from '../actions'
import DatosUser from '../containers/DatosUserContainer'

const dailyLimit = ({ user, dispatch }) => (
  <div className="container-fluid">
    <DatosUser/>


{/*     <button onClick={()=>dispatch(viewForm(true))}>Atras</button>  
 */}  </div>
  
)

export default dailyLimit;