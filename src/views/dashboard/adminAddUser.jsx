import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editCurrentUserdata, adminListUserSelector } from "./adminListUser-dux";

const AdminAddUser = () => {
    const dispatch = useDispatch();
    const { adminListUserData, editCurrentUser } = useSelector(adminListUserSelector);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Select Role');
    const [pwd, setpwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    useEffect(() => {
        if (editCurrentUser !== "") {
            setName(adminListUserData[editCurrentUser].name)
            setEmail(adminListUserData[editCurrentUser].mailid)
            setRole(adminListUserData[editCurrentUser].role)
            setpwd(adminListUserData[editCurrentUser].password)
        }
        setErrMsg('');
    }, [name, email, role, pwd, editCurrentUser, adminListUserData])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') return setErrMsg('Enter Name')
        else if (email === '') return setErrMsg('Enter Email')
        else if (emailRegex.test(email) === false) return setErrMsg('Enter valid Email address')
        else if (role === 'Select Role') return setErrMsg('Select Role')
        else if (pwd === '') return setErrMsg('Enter Password')
        else { alert('submited') }
    }
    const clearFields = () => {
        setName('')
        setEmail('')
        setRole('Select Role')
        setpwd('')
        setErrMsg('')
        dispatch(editCurrentUserdata(""))
    }
    return (
        <div className="modal fade" id="addUser" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-weight-bold" id="exampleModalLabel">{editCurrentUser === "" ? "Add" : "Edit User"}</h5>
                            <button onClick={clearFields} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="form-group">
                                <select className="form-control" onChange={(e) => setRole(e.target.value)} value={role} >
                                    <option>Select Role</option>
                                    <option>HR</option>
                                    <option>Manager</option>
                                    <option>Security</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="" placeholder="Password" onChange={(e) => setpwd(e.target.value)} value={pwd} />
                                {errMsg && <div className="alert alert-danger">
                                    <strong>Error!</strong> {errMsg}
                                </div>
                                }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={clearFields} className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            {editCurrentUser === "" ? <button type="submit" className="btn btn-primary">Submit</button> : <button type="submit" className="btn btn-primary">Update</button>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminAddUser