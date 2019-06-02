import React, { Component } from 'react';



class RegisterPatient extends Component {
    constructor(){
        super();

        this.state ={
            patient_name:'',
            patient_address:'',
            patient_phonenumber:'',
            patient_birthdate:'',
            guardian_name:'',
            guardian_address:'',
            guardian_number:'',
            guardian_birthdate:'',
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
                  <label className="FormField__Label" htmlFor="patient_name">           Patient Name</label>
                  <input type="text" className="FormField__Input" placeholder="Enter full name" name="patient_name" value={this.state.patient_name} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="patient_address">          Address</label>
                  <input type="text" className="FormField__Input" placeholder="Enter full address" name="patient_address" value={this.state.patient_address} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="patient_phonenumber">          Phone Number</label>
                  <input type="number" id="patient_phonenumber" className="FormField__Input" placeholder="Enter phone number" name="patient_phonenumber" value={this.state.patient_phonenumber} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="patient_birthdate">          Bithdate</label>
                  <input type="date" className="FormField__Input" placeholder="Enter birthdate" name="patient_birthdate" value={this.state.patient_birthdate} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label">
                    (If the patient is under 19 years old include guardian information)
                </label>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="guardian_name">           Guardian Name</label>
                  <input type="text" className="FormField__Input" placeholder="Enter full name" name="guardian_name" value={this.state.guardian_name} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="guardian_address">          Guardian Work Address</label>
                  <input type="text" className="FormField__Input" placeholder="Enter full address" name="guardian_address" value={this.state.guardian_address} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="guardian_phonenumber">          Guardian Phone Number</label>
                  <input type="number" id="guardian_phonenumber" className="FormField__Input" placeholder="Enter phone number" name="guardian_number" value={this.state.guardian_number} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="guardian_birthdate">          Guardian Bithdate</label>
                  <input type="date" className="FormField__Input" placeholder="Enter birthdate" name="guardian_birthdate" value={this.state.patient_birthdate} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <button className="FormField__Button mr-20">Submit</button>

                </div>


              </form>
            </div>

        );
    }
}

export default RegisterPatient;