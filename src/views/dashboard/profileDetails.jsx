import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editCurrentProfiledata,approvalDataSelector } from "./approvalTable-dux";

const ProfileDetails = (props) => {
    const dispatch = useDispatch();
    const { approvalData, editCurrentProfile } = useSelector(approvalDataSelector);
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
    const [whom, setWhom] = useState('');
    const [idproof, setIdproof] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');
    useEffect(() => {
        if (editCurrentProfile !== "") {
            setName(approvalData[editCurrentProfile].name)
            setReason(approvalData[editCurrentProfile].reason)
            setWhom(approvalData[editCurrentProfile].whom)
            setIdproof(approvalData[editCurrentProfile].idproof)
            setImage(approvalData[editCurrentProfile].image)
            setStatus(approvalData[editCurrentProfile].status)
        }
    }, [editCurrentProfile, approvalData])
    const clearFields = () => {
        dispatch(editCurrentProfiledata(""))
    }
    return (
        <div className="modal fade" id="profileDetails" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title font-weight-bold" id="exampleModalLabel">Profile Details</h5>
                        <button type="button" onClick={clearFields} className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <div className="photoWrap mb-4"><img src={image} alt='' /></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='font-weight-bold'>Name</td>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <td className='font-weight-bold'>Reason for Visit</td>
                                    <td>{reason}</td>
                                </tr>
                                <tr>
                                    <td className='font-weight-bold'>Whom to meet</td>
                                    <td>{whom}</td>
                                </tr>
                                <tr>
                                    <td className='font-weight-bold'>Id Proof</td>
                                    <td>{idproof}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button onClick={clearFields} type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                        {
                            props.manager &&
                            <>
                                {
                                    status === 'Pending' &&
                                    <>
                                        <button onClick={clearFields} type="button" className="btn btn-danger">Reject</button>
                                        <button onClick={clearFields} type="button" className="btn btn-success">Approve</button>
                                    </>
                                }
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