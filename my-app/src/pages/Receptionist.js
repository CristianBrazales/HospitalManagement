import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpDoctor from './RegisterDoctor';
import SignUpPatient from './RegisterPatient';
import SignUpPatientYoung from './RegisterPatientYoung'


class Receptionist extends Component {

    constructor(props) {
        super(props);
        // Default 1
        this.state = {
            receptionist_id: 1,
            items : []
        }
    }

    async componentDidMount(){
        const url = 'http://3.130.67.96:3000/allAppointmentsRecept?receptionist_id='+this.state.receptionist_id;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({items:data})
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
                                <ul>
                                    {this.state.items.map(item => (
                                        //plaerholder for now
                                            <li key={item.PID}>
                                                    {item.Pname} | {item.RoomNumber} | {item.ATID} | {item.Dname}
                                            </li>
                                    ))}
                                </ul>
                        </div>
                    </div>



                    <div className="App__Form">
                        <div className="FormTitle">
                            <NavLink to={"/Receptionist/RegisterDoctor/" + this.state.receptionist_id} activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Register Doctor</NavLink>or
                            <NavLink exact to={"/Receptionist/RegisterPatient/" + this.state.receptionist_id} activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Register Patient 19 older</NavLink>or
                            <NavLink exact to={"/Receptionist/RegisterPatientYoung/" + this.state.receptionist_id} activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                                Register Patient 19 younder</NavLink>
                        </div>


                        <Route exact path="/Receptionist/RegisterPatient/:receptionist_id" component={SignUpPatient}>
                        </Route >
                        <Route exact path="/Receptionist/RegisterPatientYoung/:receptionist_id" component={SignUpPatientYoung}>
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