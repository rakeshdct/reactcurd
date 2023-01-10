import React from 'react'
import { Link } from 'react-router-dom'
import { data } from './data.js';

const AdminListUser = () => {
    const routeUser = (role) => {
        switch (role) {
            case 'Manager':
                return '../dashboard-manager'
            case 'HR':
                return '../dashboard-hr'
            case 'Security':
                return '../dashboard-security'

            default:
                break;
        }

    }
    return (
        <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <p className="card-title">List Users</p>
                        <div className="table-responsive">
                            <table className="table table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Mail id</th>
                                        <th>Role</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.users.map((user, i) => (
                                            <tr key={i}>
                                                <td>{user.name}</td>
                                                <td>{user.mailid}</td>
                                                <td><Link to={routeUser(user.role)}>{user.role}</Link></td>
                                                <td><i data-bs-toggle="modal" data-bs-target="#addUser"
                                                    className="fa fa-edit display-5 text-primary"></i></td>
                                                <td><i data-bs-toggle="modal" data-bs-target="#deleteUser"
                                                    className="fa fa-trash-o display-5 text-danger"></i></td>
                                            </tr>
                                        ))
                                    }
                                    {/* <tr>
                                        <td>Aarav Reva</td>
                                        <td>Aarav@mail.com</td>
                                        <td><Link to="../dashboard-manager">Manager</Link></td>
                                        <td><i data-bs-toggle="modal" data-bs-target="#addUser"
                                            className="fa fa-edit display-5 text-primary"></i></td>
                                        <td><i data-bs-toggle="modal" data-bs-target="#deleteUser"
                                            className="fa fa-trash-o display-5 text-danger"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Arun Mahinder</td>
                                        <td>Arun@mail.com</td>
                                        <td><Link to="../dashboard-hr">HR</Link></td>
                                        <td><i data-bs-toggle="modal" data-bs-target="#addUser"
                                            className="fa fa-edit display-5 text-primary"></i></td>
                                        <td><i data-bs-toggle="modal" data-bs-target="#deleteUser"
                                            className="fa fa-trash-o display-5 text-danger"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Amrit Jai</td>
                                        <td>Amrit@mail.com</td>
                                        <td><Link to="../dashboard-security">Security</Link></td>
                                        <td><i data-bs-toggle="modal" data-bs-target="#addUser"
                                            className="fa fa-edit display-5 text-primary"></i></td>
                                        <td><i data-bs-toggle="modal" data-bs-target="#deleteUser"
                                            className="fa fa-trash-o display-5 text-danger"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Amithi Reena</td>
                                        <td>Amithi@mail.com</td>
                                        <td><Link to="../dashboard-manager">HR</Link></td>
                                        <td><i data-bs-toggle="modal" data-bs-target="#addUser"
                                            className="fa fa-edit display-5 text-primary"></i></td>
                                        <td><i data-bs-toggle="modal" data-bs-target="#deleteUser"
                                            className="fa fa-trash-o display-5 text-danger"></i></td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminListUser