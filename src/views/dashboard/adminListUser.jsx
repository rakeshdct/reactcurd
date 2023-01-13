import { React, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { editCurrentUserdata, fetchadminListUserData, adminListUserSelector } from "./adminListUser-dux";

const AdminListUser = () => {
    const dispatch = useDispatch();
    const { adminListUserData, loading } = useSelector(adminListUserSelector);
    useEffect(() => {
        dispatch(fetchadminListUserData());
    }, [dispatch]);

    const editCurentuser = (i) => {
        dispatch(editCurrentUserdata(i))
    }
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
                            {loading ? "loading..." :
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
                                            adminListUserData.map((user, i) => (
                                                <tr key={i}>
                                                    <td>{user.name}</td>
                                                    <td>{user.mailid}</td>
                                                    <td><Link to={routeUser(user.role)}>{user.role}</Link></td>
                                                    <td><i onClick={() => editCurentuser(i)} data-bs-toggle="modal" data-bs-target="#addUser"
                                                        className="fa fa-edit display-5 text-primary"></i></td>
                                                    <td><i onClick={() => editCurentuser(i)} data-bs-toggle="modal" data-bs-target="#deleteUser"
                                                        className="fa fa-trash-o display-5 text-danger"></i></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminListUser