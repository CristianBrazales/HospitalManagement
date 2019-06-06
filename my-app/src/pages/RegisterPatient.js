import React, { Component } from 'react';



class RegisterPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      receptionist_id: this.props.match.params.receptionist_id,
      patient_name: '',
      patient_address: '',
      patient_phonenumber: '',
      patient_birthdate: '',      
      patient_insurancenumber: '',
      patient_insurancecover: '',
      guardian_name: '',
      guardian_address: '',
      guardian_number: '',
      guardian_birthdate: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    /* Left for back-end handling */
    const headers = new Headers();
    headers.append('Content-type', 'application/json');

    var data = {
      'receptionist_id': this.state.receptionist_id,
      'patient_name': this.state.patient_name,
      'patient_address': this.state.patient_address,
      'patient_phonenumber': this.state.patient_phonenumber,
      'patient_birthdate': this.state.patient_birthdate,            
      'patient_insurancenumber': this.state.patient_insurancenumber,
      'patient_insurancecover': this.state.patient_insurancecover,
      'guardian_name': this.state.guardian_name,
      'guardian_address': this.state.guardian_address,
      'guardian_number': this.guardian_number,
      'guardian_birthdate': this.guardian_birthdate,
    }


    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    };

    const request = new Request('http://3.130.67.96:3000/newPatient', options);
    const response = await fetch(request);
    const status = await response.status;

    if (status === 200) {
      // Reset input field
      this.setState({ patient_name: '' });
      this.setState({ patient_address: '' });
      this.setState({ patient_phonenumber: '' });
      this.setState({ patient_birthdate: '' });
      this.setState({ guardian_name: '' });
      this.setState({ guardian_address: '' });
      this.setState({ guardian_number: '' });
      this.setState({ guardian_birthdate: '' });
      // TODO: Call fetch to update lists
    }
  }


  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" >

          <div className="FormField">
            <label className="FormField__Label" htmlFor="patient_name">           Patient Name</label>
            <input type="text" className="FormField__Input" placeholder="Enter full name" name="patient_name" value={this.state.patient_name} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="patient_address">          Address</label>
            <input type="text" className="FormField__Input" placeholder="Enter full address" name="patient_address" value={this.state.patient_address} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="patient_phonenumber">          Phone Number</label>
            <input type="number" id="patient_phonenumber" className="FormField__Input" placeholder="Enter phone number" name="patient_phonenumber" value={this.state.patient_phonenumber} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="patient_birthdate">          Bithdate</label>
            <input type="date" className="FormField__Input" placeholder="Enter birthdate" name="patient_birthdate" value={this.state.patient_birthdate} onChange={this.handleChange} />
          </div>
          
          <div className="FormField">
            <label className="FormField__Label">
              Provide Insurance Information
                </label>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="patient_insurancenumber">          Insurance Number</label>
            <input type="number" id="patient_phonenumber" className="FormField__Input" placeholder="Enter insurance number" name="patient_insurancenumber" value={this.state.patient_insurancenumber} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="patient_insurancecover">          Insurance Cover</label>
            <input type="number" id="patient_phonenumber" className="FormField__Input" placeholder="Enter insurance cover" name="patient_insurancecover" value={this.state.patient_insurancover} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label">
              (If the patient is under 19 years old include guardian information)
                </label>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="guardian_name">           Guardian Name</label>
            <input type="text" className="FormField__Input" placeholder="Enter full name" name="guardian_name" value={this.state.guardian_name} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="guardian_address">          Guardian Work Address</label>
            <input type="text" className="FormField__Input" placeholder="Enter full address" name="guardian_address" value={this.state.guardian_address} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="guardian_phonenumber">          Guardian Phone Number</label>
            <input type="number" id="guardian_phonenumber" className="FormField__Input" placeholder="Enter phone number" name="guardian_number" value={this.state.guardian_number} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="guardian_birthdate">          Guardian Bithdate</label>
            <input type="date" className="FormField__Input" placeholder="Enter birthdate" name="guardian_birthdate" value={this.state.guardian_birthdate} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20" onClick={this.handleSubmit}>Submit</button>
          </div>


        </form>
      </div>

    );
  }
}

export default RegisterPatient;