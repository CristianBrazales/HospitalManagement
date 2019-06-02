import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpDoctor from './pages/SignUpDoctor';
import SignUpPatient from './pages/SignUpPatient';
import './App.css';


class App extends Component {
  render(){
    return(
      <Router>

      <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <Link to ="/sign-in-doctor"  className="PageSwitcher__Item PageSwitcher__Item--Active">X</Link>
            <Link to="/sign-in-patient" className="PageSwitcher__Item">Y</Link>
          </div>
          <div className="FormTitle">
            <NavLink to ="/sign-in-doctor" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
              Sign Up Doctor
            </NavLink>
            or
          <NavLink exact to="/sign-in-patient" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
              Sign Up Patient
            </NavLink>
          </div>


          <Route exact path="/sign-in-patient" component = {SignUpPatient}>            
          </Route >

          <Route exact path ="/sign-in-doctor"  component = {SignUpDoctor}>
          </Route>

        </div>
        <div className="App__Aside"></div>
      </div>

    </Router>
    );
  }
}


export default App;
