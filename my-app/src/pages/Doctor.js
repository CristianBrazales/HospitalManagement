import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AddUnavailableDate from './AddUnavailableDate';
import RemoveUnavailableDate from './RemoveUnavailableDate';

class Doctor extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App__Aside">
                        <div className="Receptionist_AppointmentsList">
                            <label className="FormTitle__Link--ListPatients ">
                                Upcoming Appointments</label>
                        </div>
                    </div>

                    <div className="App__Form">
                        <div className="FormTitle">
                            <NavLink to="/Doctor/AddUnavailableDate" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Add Unavailable Date</NavLink>or
                            <NavLink exact to="/Doctor/RemoveUnavailableDate" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Remove Unavailable Date</NavLink>
                        </div>
                        <Route exact path="/Doctor/AddUnavailableDate" component={AddUnavailableDate}>
                        </Route >
                        <Route exact path="/Doctor/RemoveUnavailableDate" component={RemoveUnavailableDate}>
                        </Route>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Doctor;