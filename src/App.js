import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__Aside"></div>
      <div className="App__Form">
        <div className="PageSwitcher">
          <a href="#" className="PageSwitcher__Item">Doctor</a>
          <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Patient</a>
        </div>
        <div className="FormTitle">
          <a href="#" className="FormTitle__Link">
            Sign Up Doctor
            </a>
          or
          <a href="#" className="FormTitle__Link FormTitle__Link--Active">
            Sign Up Patient
            </a>
        </div>

        <div className="FormCenter">
          <form className="FormFields" >

            <div className="FormField">
              <label className="FormField__Label" htmlFor="patient_name">           Patient Name</label>
              <input type="text" id="patient_name" className= "FormField__Input" placeholder="Enter full name" name="name"/>
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="patient_address">          Address</label>
              <input type="text" id="patient_address" className= "FormField__Input" placeholder="Enter full address" name="address"/>
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="patient_phonenumber">          Phone Number</label>
              <input type="number" id="patient_phonenumber" className= "FormField__Input" placeholder="Enter phone number" name="phone number"/>
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="patient_birthdate">          Bithdate</label>
              <input type="date" id="patient_birthdate" className= "FormField__Input" placeholder="Enter birthdate" name="birthdate"/>
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="patient_birthdate">
                (If the patient is under 19 years old include guardian information)
                </label>
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="guardian_name">           Guardian Name</label>
              <input type="text" id="guardian_name" className= "FormField__Input" placeholder="Enter full name" name="guardian_name"/>
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="guardian_address">          Guardian Work Address</label>
              <input type="text" id="guardian_address" className= "FormField__Input" placeholder="Enter full address" name="guardian_address"/>
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="guardian_phonenumber">          Guardian Phone Number</label>
              <input type="number" id="guardian_phonenumber" className= "FormField__Input" placeholder="Enter phone number" name="guardian_number"/>
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="guardian_birthdate">          Guardian Bithdate</label>
              <input type="date" id="guardian_birthdate" className= "FormField__Input" placeholder="Enter birthdate" name="guardian_birthdate"/>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
