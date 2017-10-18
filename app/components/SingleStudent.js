import React, { Redirect, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleStudent extends Component {

    constructor() {
        super();
        this.state = {
            oneStudent: [],
            oneCampus: []
        };
      this.confirmDelete = this.confirmDelete.bind(this)
    }

    componentDidMount() {
        const studentId = this.props.match.params.studentid;
        axios.get(`/api/students/${studentId}`)
            .then(res => res.data)
            .then(oneStudent => this.setState({ oneStudent }))
            .then(() => {
                return axios.get(`/api/campus/${this.state.oneStudent.campusId}`)
            })
            .then(res => res.data)
            .then(data => { 
                return data
            })
            .then(oneCampus => this.setState({ oneCampus }))
            .catch(err => console.error (err));
    }

    confirmDelete(evt) {
        if(confirm('Delete the item?')) {
            console.log('this',this.state.oneStudent.id)
            axios.delete(`/api/students/${this.state.oneStudent.id}`)
            .then(res =>{
                this.props.history.push('/students') // got to go somewhere after student is deleted.
                return res.data})
            .catch(err => console.error (err));
        };;
    }

    render() {

        const student = this.state.oneStudent;
        const campus = this.state.oneCampus;
        return (

            <div className="col-xs-3 tile" key={student.id}>
                <div className="thumbnail" to={`/campus/${student.campusid}`}>
                    <div className="caption">
                        <h5>
                            <span>{student.name}</span>
                        </h5>
                        <ul>
                            <li> email: {student.email} </li>
                            <li> campus: {campus.name}</li>
                            <li> student id: {student.id}</li>
                        </ul>
                        <button type="button" className="btn btn-default btn-group-sm">Update Student</button>    
                        <button onClick={this.confirmDelete} type="button" className="btn btn-danger btn-group-sm">Delete Student</button>
                    </div>
                </div >
            </div >
        );
    };
}