import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import BookAppointment from './BookAppointment';
import UpdatePersonalInformation from './UpdatePersonalInformation';

class Patient extends Component {
    constructor(props) {
        super(props);
        // Default 1
        this.state = {
            patient_id: 1,
            itemsForA: [],
            itemsForR: [],
            itemsForAT: []
        }
    }

    async componentDidMount(){
        const urlA = 'http://3.130.67.96:3000/allAppoitmentsPat?patient_id=' + this.state.patient_id;
        const responseA = await fetch(urlA);
        const dataA = await responseA.json();
        this.setState({itemsForA:dataA})

        const urlR = 'http://3.130.67.96:3000/getRecept?patient_id=' +this.state.patient_id;
        const responseR = await fetch(urlR);
        const dataR = await responseR.json();
        this.setState({itemsForR:dataR})

        const urlAT = 'http://3.130.67.96:3000/getAvailability?patient_id=' +this.state.patient_id;
        const responseAT = await fetch(urlAT);
        const dataAT = await responseAT.json();
        this.setState({itemsForAT:dataAT})
    }


    toDate(str) {
        let date = str
        let year = date.substring(0, 4)
        let month = date.substring(4,6)
        let day = date.substring(6,8)
        let time = date.substring(8)

        
        var monthInWord
        if (month == '01'){
             monthInWord = 'Jan'
        } else if (month == '02'){
            monthInWord = 'Feb'
        } else if (month == '03'){
            monthInWord = 'Mar'
        } else if (month == '04'){
           monthInWord = 'Apr'
        } else if (month == '05'){
            monthInWord = 'May'
        } else if (month == '06'){
            monthInWord = 'Jun'
        } else if (month == '07'){
            monthInWord = 'July'
        } else if (month == '08'){
            monthInWord = 'Aug'
        } else if (month == '09'){
            monthInWord = 'Sep'
        } else if (month == '10'){
            monthInWord = 'Oct'
        } else if (month == '11'){
            monthInWord = 'Nov'
        } else {
            monthInWord = 'Dec'
        } 

        return monthInWord+'/'+day+'/'+time+':00/'+year
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
                                                    {item.Dname} | {this.toDate(item.ATID)} | {item.RoomNumber}
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
                                                    {item.Rname} | {item.Rcontact}
                                            </li>
                                    ))}
                                </ul>
                        </div>
                        <div className="FormTitle"></div>
                        <div className="Receptionist_AppointmentsList">
                            <label className="FormField__LabelBigger">
                                 Your and doctor's available time</label>
                                <label className="FormField__Label">
                                -TO implement-</label>
                                <label className="FormField__Label">
                                -list of available times- </label>
                                <ul>
                                    {this.state.itemsForAT.map(item => (
                                        //plaerholder for now
                                            <li key={item.PID}>
                                                    {item.ATID} | {this.toDate(item.Tfrom)}
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