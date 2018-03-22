import { connect } from 'react-redux'
import { responseService } from '../actions'
import DatosUser from '../components/DatosUser'
import fetch from 'node-fetch';

const mapState = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    funtionEjec: () => fetch('https://api.github.com/users/github')
      .then(res => res.json())
      .then(json => dispatch(responseService(json))) 
  })
export default connect(
  mapState,
  mapDispatchToProps
)(DatosUser)