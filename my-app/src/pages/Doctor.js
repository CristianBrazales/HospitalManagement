import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AddUnavailableDate from './AddUnavailableDate';
import RemoveUnavailableDate from './RemoveUnavailableDate';

class Doctor extends Component {

    constructor(props) {
        super(props);
        // Default doctor_id 1
        this.state = {
            refresh: false,
            doctor_id: 1,
            itemsForUA: [],
            itemsForUD: [],
            itemsForAT: []
        }
    }

    async componentDidMount(){
        const urlUA = 'http://3.130.67.96:3000/upcomingAppointmentsDoc?doctor_id='+this.state.doctor_id;
        const responseUA = await fetch(urlUA);
        const dataUA = await responseUA.json();
        this.setState({itemsForUA:dataUA})

        const urlUD = 'http://3.130.67.96:3000/AllUnTimesDoc?doctor_id='+this.state.doctor_id;
        const responseUD = await fetch(urlUD);
        const dataUD = await responseUD.json();
        this.setState({itemsForUD:dataUD})

        const urlAT = 'http://3.130.67.96:3000/AllTimesDoc?doctor_id='+this.state.doctor_id;
        const responseAT = await fetch(urlAT);
        const dataAT = await responseAT.json();
        this.setState({itemsForAT:dataAT})
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
                                <ul>
                                    {this.state.itemsForUA.map(item => (
                                        //plaerholder for now
                                            <li key={item.Pname}>
                                                    {item.Pname} | {item.RoomNumber} | {item.ATID}
                                            </li>
                                    ))}
                                </ul>
                        </div>
                        <div className="FormTitle"></div>
                        <div className="Receptionist_AppointmentsList">
                            <label className="FormField__LabelBigger">
                                My Unavailable Dates</label>
                                <label className="FormField__Label">
                                -TO implement-</label>
                                <label className="FormField__Label">
                                -list of Unavailable Dates- </label>
                                <ul>
                                    {this.state.itemsForUD.map(item => (
                                        //plaerholder for now
                                            <li key={item.UID}>
                                                    {item.UID} | {item.ATID}
                                            </li>
                                    ))}
                                </ul>
                        </div>
                        <div className="FormTitle"></div>
                        <div className="Receptionist_AppointmentsList">
                            <label className="FormField__LabelBigger">
                                Add vacation</label>
                                <label className="FormField__Label">
                                -TO implement-</label>
                                <label className="FormField__Label">
                                -list of available Dates to go on vacation- </label>
                                <ul>
                                    {this.state.itemsForAT.map(item => (
                                        //plaerholder for now
                                            <li key={item.ATID}>
                                                    {item.ATID} | {item.Tfrom}
                                            </li>
                                    ))}
                                </ul>
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