import React, { Component } from 'react';


class RegisterDoctor extends Component {
    constructor(){
        super();
        this.state ={
            doctor_name:'',
            doctor_specialization: '',
            doctor_yrsOfExperience:'',
            doctor_address:'',
            doctor_phonenumber:'',
            doctor_birthdate:'',
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
        /* Left for background handling */
    }

    render() {
        return (
            <div className="FormCenter">
              <form className="FormFields" >

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_name">           Doctor Name</label>
                  <input type="text" className="FormField__Input" placeholder="Enter full name" name="doctor_name" value={this.state.doctor_name} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_specialization">           Doctor Specialization</label>
                  <input type="text"  className="FormField__Input" placeholder="Enter specialization" name="doctor_specialization" value={this.state.doctor_specialization} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_yrsOfExperience">           Years of Experience</label>
                  <input type="number" className="FormField__Input" placeholder="Enter years of experience" name="doctor_yrsOfExperience" value={this.state.doctor_yrsOfExperience} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_address">          Address</label>
                  <input type="text" className="FormField__Input" placeholder="Enter full address" name="doctor_address" value={this.state.doctor_address} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_phonenumber">          Phone Number</label>
                  <input type="number" id="doctor_phonenumber" className="FormField__Input" placeholder="Enter phone number" name="doctor_phonenumber" value={this.state.doctor_phonenumber} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_birthdate">          Bithdate</label>
                  <input type="date" className="FormField__Input" placeholder="Enter birthdate" name="doctor_birthdate" value={this.state.doctor_birthdate} onChange={this.handleChange}/>
                </div>

                

                <div className="FormField">
                  <button className="FormField__Button mr-20">Submit</button>

                </div>


              </form>
            </div>

        );
    }
}

export default RegisterDoctor;