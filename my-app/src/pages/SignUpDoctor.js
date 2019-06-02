import React, { Component } from 'react';
import{Link} from 'react-router-dom';


class SignUpDoctor extends Component {
    constructor(){
        super();

        this.state ={
            doctor_name:'',

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(e){
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name] : value
        });
    }

    handleSubmit(e){
        e.preventDefault();

    }

    render() {
        return (
            <div className="FormCenter">
              <form className="FormFields" >

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_name">           Doctor Name</label>
                  <input type="text" id="doctor_name" className="FormField__Input" placeholder="Enter full name" name="doctor_name" value={this.state.name} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_specialization">           Doctor Specialization</label>
                  <input type="text" id="doctor_specialization" className="FormField__Input" placeholder="Enter specialization" name="doctor_specialization" />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_yrsOfExperience">           Years of Experience</label>
                  <input type="number" id="doctor_yrsOfExperience" className="FormField__Input" placeholder="Enter specialization" name="doctor_yrsOfExperience" />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_address">          Address</label>
                  <input type="text" id="doctor_address" className="FormField__Input" placeholder="Enter full address" name="doctor_address" />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_phonenumber">          Phone Number</label>
                  <input type="number" id="doctor_phonenumber" className="FormField__Input" placeholder="Enter phone number" name="doctor_phonenumber" />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_birthdate">          Bithdate</label>
                  <input type="date" id="doctor_birthdate" className="FormField__Input" placeholder="Enter birthdate" name="doctor_birthdate" />
                </div>

                

                <div className="FormField">
                  <button className="FormField__Button mr-20">Submit</button>

                </div>


              </form>
            </div>

        );
    }
}

export default SignUpDoctor;