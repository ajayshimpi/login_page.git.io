import react, { Component } from 'react'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginComponent from './LoginComponent';
import Welcome from './Welcome';
class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginComponent}/>
        <Route  path="/Welcome/:Email" component={Welcome}/>
        <Route  path="/logout" component={LoginComponent}/>
      </Switch> 
      </BrowserRouter>
      );
  }
}
 export default App;