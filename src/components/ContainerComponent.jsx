import React from 'react'
import { connect } from 'react-redux'
import FormUser from '../containers/FormUser'
import DatosUser from '../containers/DatosUserConteiner'
import Prueba2 from '../containers/Prueba'

const ContainerComponent = ({state}) => (
  <div className="container-fluid">
   {state.status == true ?<FormUser/>:null}
   <DatosUser/>  
   <Prueba2/>
   </div>
  
)

const mapState = (state) => ({
  state: state.viewForm
})
export default connect(mapState)(ContainerComponent);