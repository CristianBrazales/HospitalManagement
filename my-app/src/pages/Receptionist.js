import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpDoctor from './RegisterDoctor';
import SignUpPatient from './RegisterPatient';


class Receptionist extends Component {

    constructor(props) {
        super(props);
        // Default 6000
        this.state = {
            receptionist_id: 6000,
        }
    }

    render() {
        return (
            <Router>

                <div className="App">
                    <div className="App__Aside">
                        <div className="Receptionist_AppointmentsList">
                            <label className="FormField__LabelBigger">
                                Patients Upcoming Appointments</label>
                                <label className="FormField__Label">
                                -TO implement-</label>
                                <label className="FormField__Label">
                                -list of patients appointments- </label>
                        </div>
                    </div>



                    <div className="App__Form">
                        <div className="FormTitle">
                            <NavLink to={"/Receptionist/RegisterDoctor/" + this.state.receptionist_id} activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Register Doctor</NavLink>or
                            <NavLink exact to={"/Receptionist/RegisterPatient/" + this.state.receptionist_id} activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Register Patient</NavLink>
                        </div>


                        <Route exact path="/Receptionist/RegisterPatient/:receptionist_id" component={SignUpPatient}>
                        </Route >
                        <Route exact path="/Receptionist/RegisterDoctor/:receptionist_id" component={SignUpDoctor}>
                        </Route>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Receptionist;