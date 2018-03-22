import React from 'react'
import { connect } from 'react-redux'
import FormUser from '../containers/FormUser'
import DatosUser from '../containers/DatosUserConteiner'

const ContainerComponent = ({state}) => (
  <div className="container-fluid">
   {state.status == true ?<FormUser/>:null}
   <DatosUser/>  
   </div>
  
)

const mapState = (state) => ({
  state: state.viewForm
})
export default connect(mapState)(ContainerComponent);