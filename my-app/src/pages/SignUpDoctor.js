import React, { Component } from 'react';



class SignUpDoctor extends Component {
    render() {
        return (
            <div className="FormCenter">
              <form className="FormFields" >

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_name">           Doctor Name</label>
                  <input type="text" id="doctor_name" className="FormField__Input" placeholder="Enter full name" name="name" />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_specialization">           Doctor Specialization</label>
                  <input type="text" id="doctor_specialization" className="FormField__Input" placeholder="Enter specialization" name="specialization" />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_yrsOfExperience">           Years of Experience</label>
                  <input type="number" id="doctor_yrsOfExperience" className="FormField__Input" placeholder="Enter specialization" name="yearsOfexperience" />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_address">          Address</label>
                  <input type="text" id="doctor_address" className="FormField__Input" placeholder="Enter full address" name="address" />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_phonenumber">          Phone Number</label>
                  <input type="number" id="doctor_phonenumber" className="FormField__Input" placeholder="Enter phone number" name="phone number" />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="doctor_birthdate">          Bithdate</label>
                  <input type="date" id="doctor_birthdate" className="FormField__Input" placeholder="Enter birthdate" name="birthdate" />
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