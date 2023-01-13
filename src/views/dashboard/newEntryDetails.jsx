import React, { useState, useEffect } from 'react'
import WebcamCapture from './webcamCapture'
import { useSelector, useDispatch } from 'react-redux';
import { editCurrentProfiledata, approvalDataSelector } from "./approvalTable-dux";


const NewEntryDetails = () => {
    const dispatch = useDispatch();
    const { approvalData, editCurrentProfile } = useSelector(approvalDataSelector);
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
    const [whom, setWhom] = useState('');
    const [idProof, setIdproof] = useState('Id Proof');
    const [image, setImage] = useState(null);
    const [status, setStatus] = useState('');
    const [errMsg, setErrMsg] = useState('');
    useEffect(() => {
        if (editCurrentProfile !== "") {
            setName(approvalData[editCurrentProfile].name)
            setReason(approvalData[editCurrentProfile].reason)
            setWhom(approvalData[editCurrentProfile].whom)
            setIdproof(approvalData[editCurrentProfile].idproof)
            setStatus(approvalData[editCurrentProfile].status)
            setImage(approvalData[editCurrentProfile].image)
        }
        setErrMsg('');
    }, [name, reason, whom, idProof, image, status, approvalData, editCurrentProfile])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') return setErrMsg('Enter Name')
        else if (reason === '') return setErrMsg('Enter Reason for Visit')
        else if (whom === '') return setErrMsg('Enter Whom to meet')
        else if (idProof === 'Id Proof') return setErrMsg('Select Id Proof')
        else { alert('submited') }
    }
    const clearFields = () => {
        setName('')
        setReason('')
        setWhom('')
        setIdproof('Id Proof')
        setErrMsg('')
        setImage(null)
        dispatch(editCurrentProfiledata(""))
    }
    return (
        <div className="modal fade" id="defaultModal" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-weight-bold" id="exampleModalLabel">{editCurrentProfile === '' ? 'New Entry' : 'Edit Entry'}</h5>
                            <button type="button" onClick={clearFields} className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <WebcamCapture image={image} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                    placeholder="Reason for Visit" onChange={(e) => setReason(e.target.value)} value={reason} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="Whom to meet" placeholder="Whom to meet" onChange={(e) => setWhom(e.target.value)} value={whom} />
                            </div>
                            <div className="form-group">
                                <select className="form-control" onChange={(e) => setIdproof(e.target.value)} value={idProof}>
                                    <option>Id Proof</option>
                                    <option>Aadhar</option>
                                    <option>PAN</option>
                                    <option>Voters ID</option>
                                    <option>Passport</option>
                                    <option>Driving Licence</option>
                                </select>
                                {errMsg && <div className="alert alert-danger">
                                    <strong>Error!</strong> {errMsg}
                                </div>
                                }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={clearFields} className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            {editCurrentProfile === '' ? <button type="submit" className="btn btn-primary">Submit</button> : <button type="submit" className="btn btn-primary">Update</button>}
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default NewEntryDetails