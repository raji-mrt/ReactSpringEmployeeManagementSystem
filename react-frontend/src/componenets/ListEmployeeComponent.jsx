import { Button } from 'bootstrap';
import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeCompnent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmoplyee = this.editEmoplyee.bind(this);
        this.deleteEmoplyee = this.deleteEmoplyee.bind(this);
        this.viewEmoplyee = this.viewEmoplyee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data})
        })
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add')
    }

    editEmoplyee(id){
        this.props.history.push(`/add-employee/${id}`)
    }

    viewEmoplyee(id){
        this.props.history.push(`/view-employee/${id}`)
    }

    deleteEmoplyee(id){
        EmployeeService.deleteEmployee(id).then((res) => {
            this.setState({employees : this.state.employees.filter(employee => employee.id !== id)})
        })
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div>
                    <button className= "btn btn-primary btn-lg" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <br />
                <div className="row">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Empmloyee Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button onClick = { () => this.editEmoplyee(employee.id)} className= "btn btn-primary">Update</button>
                                                <button style={{marginLeft:"10px"}} onClick = { () => this.deleteEmoplyee(employee.id)} className= "btn btn-danger">Delete</button>
                                                <button style={{marginLeft:"10px"}} onClick = { () => this.viewEmoplyee(employee.id)} className= "btn btn-info">View</button>
                                            </td>
                                        </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeCompnent;