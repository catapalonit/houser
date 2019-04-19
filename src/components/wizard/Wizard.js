import React, { Component } from 'react';
// import Dashboard from '../dashboard/Dashboard';
import { Link } from 'react-router-dom'


export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    // handleSubmit(){

    // }

    render() {
        return (
            <div className="Wizard">
                <h1>Add New Listing</h1>

                <Link to="/dashboard"><button>Cancel</button></Link>
                <Dashboard />
                <form>
                    <label> Property Name<input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></label> <br />
                    <label> Address <input type="text" name="address" value={this.state.address} onChange={this.handleChange} /></label>
                    <br />
                    <label> City <input type="text" name="city" value={this.state.city} onChange={this.handleChange} /></label>
                    <label> State <input type="text" name="state" value={this.state.state} onChange={this.handleChange} /></label>
                    <label> Zip <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleChange} /></label>
                    <div>

                        <button onClick={this.handleSubmit}>Complete</button>
                    </div>
                </form>
            </div>
        );
    }
}