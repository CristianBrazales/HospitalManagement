import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpDoctor from './RegisterDoctor';
import SignUpPatient from './RegisterPatient';


class Receptionist extends Component {

    render() {
        return (
          <Router>
    
            <div className="App">
              <div className="App__Aside">
                <div className="FormTitle">
                <label className="PageSwitcher__Item" htmlFor="doctor_name">
                  Patients Upcoming Appointments
                </label>
                </div>
    
    
    
              </div>
              <div className="App__Form">
                {/* <div className="PageSwitcher">
                  <Link to="/RegisterDoctor" className="PageSwitcher__Item PageSwitcher__Item--Active">X</Link>
                  <Link to="/RegisterPatient" className="PageSwitcher__Item">Y</Link>
                </div> */}
                <div className="FormTitle">
                  <NavLink to="/RegisterDoctor" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                    Register Doctor
                </NavLink>
                  or
              <NavLink exact to="/RegisterPatient" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                    Register Patient
                </NavLink>
                </div>
    
    
                <Route exact path="/RegisterPatient" component={SignUpPatient}>
                </Route >
                <Route exact path="/RegisterDoctor" component={SignUpDoctor}>
                </Route>
    
              </div>
            </div>
    
          </Router>
        );
      }

}


export default Receptionist;