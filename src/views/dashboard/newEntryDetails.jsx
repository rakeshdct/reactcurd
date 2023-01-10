import React from 'react'

const NewEntryDetails = () => {
    return (
        <div className="modal fade" id="defaultModal" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title font-weight-bold" id="exampleModalLabel">New Entry</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <form className="forms-sample">
                            <div>
                                <div className="photoWrap mb-4"><img src="images/photo.png" alt='' /><span>Upload Photo here</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    placeholder="Reason for Visit" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="Whom to meet" placeholder="Whom to meet" />
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Id Proof</option>
                                    <option>Aadhar</option>
                                    <option>PAN</option>
                                    <option>Voters ID</option>
                                    <option>Passport</option>
                                    <option>Driving Licence</option>
                                </select>
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

export default NewEntryDetails