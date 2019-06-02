import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AddUnavailableDate from './AddUnavailableDate';
import RemoveUnavailableDate from './RemoveUnavailableDate';
import SignUpDoctor from './RegisterDoctor';
import SignUpPatient from './RegisterPatient';

class Doctor extends Component {

    render() {
        return (
            <div className="App">
                <div className="App__Aside">
                    <div className="Receptionist_AppointmentsList">
                        <label className="FormTitle__Link--ListPatients ">
                            Upcoming Appointments</label>
                    </div>
                </div>

                <div className="App__Form">
                        <div className="FormTitle">
                            <NavLink to="/Doctor/RegisterDoctor" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Register Doctor</NavLink>or
                            <NavLink exact to="/Doctor/RegisterPatient" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Register Patient</NavLink>
                        </div>


                        <Route exact path="/Doctor/RegisterPatient" component={SignUpPatient}>
                        </Route >
                        <Route exact path="/Doctor/RegisterDoctor" component={SignUpDoctor}>
                        </Route>
                    </div>

            </div>

        );
    }
}

export default Doctor;