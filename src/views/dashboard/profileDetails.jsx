import React from 'react'
import { useState, useEffect } from 'react';
import { data } from './data.js';

const ProfileDetails = (props) => {
    const [getindex, setGetIndex] = useState(0)
    useEffect(() => {
        setGetIndex(1)
    }, [getindex])
    return (
        <div className="modal fade" id="profileDetails" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title font-weight-bold" id="exampleModalLabel">Profile Details</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <div className="photoWrap mb-4"><img src={data.approvals[getindex].image} alt='' /><span>Uploaded Photo here</span></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='font-weight-bold'>Name</td>
                                    <td>{data.approvals[getindex].name}</td>
                                </tr>
                                <tr>
                                    <td className='font-weight-bold'>Reason for Visit</td>
                                    <td>{data.approvals[getindex].reason}</td>
                                </tr>
                                <tr>
                                    <td className='font-weight-bold'>Whom to meet</td>
                                    <td>{data.approvals[getindex].whom}</td>
                                </tr>
                                <tr>
                                    <td className='font-weight-bold'>Id Proof</td>
                                    <td>{data.approvals[getindex].idproof}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                        {
                            props.manager &&
                            <>
                                <button type="button" className="btn btn-danger">Reject</button>
                                <button type="button" className="btn btn-success">Approve</button>
                            </>
                        }
                        {
                            !props.manager &&
                            <>
                                <button type="button" className="btn btn-primary">Print</button>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails