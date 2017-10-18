import React, { Redirect, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class StudentForm extends Component { 


    
    // exporting the constructor function (dumb component).
    // what is the parameter coming in here?
        constructor(props) {
            super(props);
            // this.handleChange = this.handleChange.bind(this)
            // this.handleSubmit = this.handleSubmit.bind(this)
        }
    
        handleCampusChange(event) {
            this.props.xxxxxxxxxx(event.target.value)
        }

        handleSubmit(event) {
            this.props.xxxxxxxxxx(event.target.value)
        }
    
    
        render() {
            console.log(this.props)
            let campuses = this.props.campuses
            return (
                <form onSubmit={this.handleSubmit}>
                <label>Student's Name: </label>
                <input type="text"/>
                <label>Student's Email: </label>
                <input type="text"/>
                    <select type="select" onChange={this.handleCampusChange}>
                        <label>Select a Campus: </label>
                        {campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
                    </select>
                    <input type="submit" value="Submit" />
                </form>
            )
        };
    }
    