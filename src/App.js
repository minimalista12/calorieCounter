import React, { Component } from 'react';
import FormUser from './containers/FormUser';
import DatosUser from './containers/DatosUserContainer';
import { HashRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
class App extends Component {
  render() {
    return (<Router>
      <MuiThemeProvider > 
       <div className="container-fluid col-sm-4" >       
        <Route exact path="/" component={FormUser} />
        <Route exact path="/datosUser" component={DatosUser} />
      </div>
      </MuiThemeProvider>
    </Router>
    );
  }
}

export default App;