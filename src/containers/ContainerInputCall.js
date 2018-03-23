import { connect } from 'react-redux'
import InputCallConbtainer from '../components/InputCall'

const mapState = (state) => ({
  user: state.user,
  elementos: state.dailyLimitReducer
})

export default connect(
  mapState
)(InputCallConbtainer)