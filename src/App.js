import React, { Component } from 'react';
import FormUser from './containers/FormUser'
import DatosUser from './containers/DatosUserContainer'
import DailyLimit from './containers/DailyLimitContainer'
import { HashRouter as Router, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
class App extends Component {
  render() {
    return (<Router>
      <MuiThemeProvider > 
        <div className="themeCont" >
        <Route exact path="/" component={FormUser} />
        <Route exact path="/datosUser" component={DatosUser} />
        <Route exact path="/dailyLimit" component={DailyLimit} />
      </div>

      </MuiThemeProvider>
    </Router>
    );
  }
}

export default App;