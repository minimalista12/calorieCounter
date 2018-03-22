import { connect } from 'react-redux'
import Prueba2 from '../components/Prueba2'
import DatosUser from '../components/DatosUser'

const mapState = (state) => ({
  user: state.user
})

export default connect(
  mapState
)(Prueba2)