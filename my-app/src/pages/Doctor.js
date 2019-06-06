import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AddUnavailableDate from './AddUnavailableDate';
import RemoveUnavailableDate from './RemoveUnavailableDate';

class Doctor extends Component {

    constructor(props) {
        super(props);
        // Default doctor_id 4000
        this.state = {
            doctor_id: 4000,
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App__Aside">
                        <div className="Receptionist_AppointmentsList">
                            <label className="FormField__LabelBigger">
                                Upcoming Appointments</label>
                                <label className="FormField__Label">
                                -TO implement-</label>
                                <label className="FormField__Label">
                                -list of Appointments- </label>
                        </div>
                        <div className="FormTitle"></div>
                        <div className="Receptionist_AppointmentsList">
                            <label className="FormField__LabelBigger">
                                My Unavailable Dates</label>
                                <label className="FormField__Label">
                                -TO implement-</label>
                                <label className="FormField__Label">
                                -list of Unavailable Dates- </label>
                        </div>
                    </div>

                    <div className="App__Form">
                        <div className="FormTitle">
                            <NavLink to={"/Doctor/AddUnavailableDate/" + this.state.doctor_id} activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Add Unavailable Date</NavLink>or
                            <NavLink exact to={"/Doctor/RemoveUnavailableDate/"+ this.state.doctor_id} activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Remove Unavailable Date</NavLink>
                        </div>
                        <Route exact path="/Doctor/AddUnavailableDate/:doctor_id" component={AddUnavailableDate}>
                        </Route >
                        <Route exact path="/Doctor/RemoveUnavailableDate/:doctor_id" component={RemoveUnavailableDate}>
                        </Route>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Doctor;