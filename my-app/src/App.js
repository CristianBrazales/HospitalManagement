import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
            <Link to ="/sign-in-doctor" className="PageSwitcher__Item PageSwitcher__Item--Active">Doctor</Link>
            <Link to="/sign-in-patient" className="PageSwitcher__Item">Patient</Link>
          </div>
          <div className="FormTitle">
            <Link to ="/sign-in-doctor" className="FormTitle__Link FormTitle__Link--Active">
              Sign Up Doctor
            </Link>
            or
          <Link to="/sign-in-patient" className="FormTitle__Link">
              Sign Up Patient
            </Link>
          </div>


          <Route exact path="/sign-in-patient" component = {SignUpPatient}>            
          </Route >

          <Route exact path ="/sign-in-doctor"  component = {SignUpDoctor}>
          </Route>

        </div>
      </div>

    </Router>
    );
  }
}


export default App;
