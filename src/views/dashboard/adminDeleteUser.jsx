import React from 'react'

const AdminDeleteUser = () => {
    return (
        <div className="modal fade" id="deleteUser" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title font-weight-bold" id="exampleModalLabel">Delete</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this user?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-bs-dismiss="modal">No</button>
                        <button type="button" className="btn btn-primary">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDeleteUser