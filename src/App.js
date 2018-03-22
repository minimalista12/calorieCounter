import React, { Component } from 'react';
import logo from './logo.svg';
/* import FormExample from './containers/DailyCalories/index'
 */import ContainerComponent from './components/ContainerComponent'
 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* import MyAwesomeReactComponent from './MyAwesomeReactComponent'; */
import './App.css';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      {/* <MyAwesomeReactComponent /> */}
      <div className = "container-fluid col-sm-4">
      <ContainerComponent/>
      </div>
    </MuiThemeProvider>
   
    );
  }
}

export default App;