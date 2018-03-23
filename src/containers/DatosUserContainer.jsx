import { connect } from 'react-redux'
import DatosUser from '../components/DatosUser'

const mapState = (state) => ({
  user: state.user
})

export default connect(
  mapState
)(DatosUser)