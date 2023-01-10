import React from 'react'

const AdminAddUser = () => {
    return (
        <div className="modal fade" id="addUser" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title font-weight-bold" id="exampleModalLabel">Add / Edit User</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="forms-sample">
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Role</option>
                                    <option>HR</option>
                                    <option>Manager</option>
                                    <option>Security</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="" placeholder="Password" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddUser