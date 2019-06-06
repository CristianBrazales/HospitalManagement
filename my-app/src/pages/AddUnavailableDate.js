import React, { Component } from 'react';

class AddUnavailableDate extends Component {

    constructor(props){
        super(props);
        this.state ={
            time_from:'',
            time_to: '',
            doctor_id: this.props.match.params.doctor_id,
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
    async handleSubmit(e){
        e.preventDefault();
        /* Left for back-end handling */
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        var data = {
            "time_from": this.state.time_from,
            "time_to": this.state.time_to,
         }
        const options = {
            method: 'POST',
            headers,
            body:JSON.stringify(data)
        };

        const request = new Request('http://3.130.67.96:3000/newUnDateDoc', options);
        const response = await fetch(request);
        const status = await response.status;
        // Do on success
        if (status === 200){
            // Reset input field
            this.setState({time_from:''});
            this.setState({time_to:''});
             // TODO: Call fetch to update Unavailable lists
        }
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
                        <button className="FormField__Button mr-20" onClick={this.handleSubmit}>Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddUnavailableDate;