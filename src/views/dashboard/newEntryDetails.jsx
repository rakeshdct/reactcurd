import React, { useState, useEffect } from 'react'
import WebcamCapture from './webcamCapture'


const NewEntryDetails = () => {
    const [name, setName] = useState('');
    const [reason, setreason] = useState('');
    const [whom, setwhom] = useState('');
    const [idProof, setidProof] = useState('Id Proof');
    const [errMsg, setErrMsg] = useState('');
    useEffect(() => {
        setErrMsg('');
    }, [name, reason, whom, idProof])
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
        setreason('')
        setwhom('')
        setidProof('Id Proof')
        setErrMsg('')
    }
    return (
        <div className="modal fade" id="defaultModal" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-weight-bold" id="exampleModalLabel">New Entry</h5>
                            <button type="button" onClick={clearFields} className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <WebcamCapture />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                    placeholder="Reason for Visit" onChange={(e) => setreason(e.target.value)} value={reason} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="Whom to meet" placeholder="Whom to meet" onChange={(e) => setwhom(e.target.value)} value={whom} />
                            </div>
                            <div className="form-group">
                                <select className="form-control" onChange={(e) => setidProof(e.target.value)} value={idProof}>
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
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default NewEntryDetails