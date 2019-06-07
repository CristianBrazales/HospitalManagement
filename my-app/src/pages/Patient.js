import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import BookAppointment from './BookAppointment';
import UpdatePersonalInformation from './UpdatePersonalInformation';

class Patient extends Component {
    constructor(props) {
        super(props);
        // Default 6000
        this.state = {
            patient_id: 78000,
            itemsForA: [],
            itemsForR: []
        }
    }

    async componentDidMount(){
        const urlA = 'http://3.130.67.96:3000/allAppoitmentsPat';
        const responseA = await fetch(urlA);
        const dataA = await responseA.json();
        this.setState({itemsForA:dataA})

        const urlR = 'http://3.130.67.96:3000/getRecept';
        const responseR = await fetch(urlR);
        const dataR = await responseR.json();
        this.setState({itemsForR:dataR})
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App__Aside">
                        <div className="Receptionist_AppointmentsList">
                            <label className="FormField__LabelBigger">
                                My Appointments</label>
                                <label className="FormField__Label">
                                -TO implement-</label>
                                <label className="FormField__Label">
                                -list of Appointments- </label>
                                <ul>
                                    {this.state.itemsForA.map(item => (
                                        //plaerholder for now
                                            <li key={item.PID}>
                                                    {item.Pname} | {item.PContact}
                                            </li>
                                    ))}
                                </ul>
                        </div>
                        <div className="FormTitle"></div>
                        <div className="Receptionist_AppointmentsList">
                            <label className="FormField__LabelBigger">
                                Contact Us</label>
                                <label className="FormField__Label">
                                -TO implement-</label>
                                <label className="FormField__Label">
                                -Receptionist phone numbers- </label>
                                <ul>
                                    {this.state.itemsForR.map(item => (
                                        //plaerholder for now
                                            <li key={item.PID}>
                                                    {item.Pname} | {item.PContact}
                                            </li>
                                    ))}
                                </ul>
                        </div>
                    </div>

                    <div className="App__Form">
                        <div className="FormTitle">
                            <NavLink to={"/Patient/BookAppointment/" + this.state.patient_id} activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Book a New Appointment</NavLink>or
                            <NavLink exact to={"/Patient/UpdatePersonalInformation/" + this.state.patient_id} activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Update Personal Information</NavLink>
                        </div>
                        <Route exact path="/Patient/BookAppointment/:patient_id" component={BookAppointment}>
                        </Route >
                        <Route exact path="/Patient/UpdatePersonalInformation/:patient_id" component={UpdatePersonalInformation}>
                        </Route>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Patient;