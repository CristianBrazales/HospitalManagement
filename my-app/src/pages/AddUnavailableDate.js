import React, { Component } from 'react';

class AddUnavailableDate extends Component {

    constructor(){
        super();
        this.state ={
            time_from:'',
            time_to: '',
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
        /* Left for back-end handling */
    }


    render() {
        return (
            <div className="FormCenter">
                <form className="FormFields" >

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="time_from">Time From</label>
                        <input type="datetime-local" className="FormField__Input" placeholder="Enter date and time" name="time_from"  value={this.state.time_from} onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="time_to">Time To</label>
                        <input type="datetime-local" className="FormField__Input" placeholder="Enter date and time" name="time_to"  value={this.state.time_to} onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddUnavailableDate;