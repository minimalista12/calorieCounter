import { connect } from 'react-redux'
import DailyLimit from '../components/DailyLimit'

const mapState = (state) => ({
  user: state.user, elementos:state.dailyLimitReducer
})

export default connect(
  mapState
)(DailyLimit)