import React, { Component } from 'react';

class RemoveUnavailableDate extends Component {

    constructor(){
        super();
        this.state ={
            time_id:'',
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
                <form className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="time_id">Time ID</label>
                        <input type="number" className="FormField__Input" placeholder="Enter the id for the desired time to remove" name="time_id"  value={this.state.time_id} onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Remove</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RemoveUnavailableDate;