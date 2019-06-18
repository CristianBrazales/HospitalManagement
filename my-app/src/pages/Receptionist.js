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
            items : [],
            itemsC : []
        }
    }

    async componentDidMount(){
        const url = 'http://3.130.67.96:3000/allAppointmentsRecept?receptionist_id='+this.state.receptionist_id;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({items:data})

        const urlC = 'http://3.130.67.96:3000/getDoctorsPatients';
        const responseC = await fetch(urlC);
        const dataC = await responseC.json();
        this.setState({itemsC:dataC})
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
                                Patients Upcoming Appointments</label>
                                <label className="FormField__Label">
                                -list of patients appointments- </label>
                                <ul>
                                    {this.state.items.map(item => (
                                        //plaerholder for now
                                            <li key={item.PID}>
                                                    Patient: {item.Pname} | Room: {item.RoomNumber} | Date: {this.toDate(item.ATID)} | Doctor: {item.Dname}
                                            </li>
                                    ))}
                                </ul>
                        </div>
                        <div className="FormTitle"></div>
                        <div className="Receptionist_AppointmentsList">
                            <label className="FormField__LabelBigger">
                                Doctor and number of patients</label>
                                <label className="FormField__Label">
                                -list doctors and count- </label>
                                <ul>
                                    {this.state.itemsC.map(item => (
                                        //plaerholder for now
                                            <li key={item.DID}>
                                                    Doctor ID: {item.DID} | Name: {item.Dname} | Specialization: {item.Dspec} | Number of patients: {item.NumPatients}
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