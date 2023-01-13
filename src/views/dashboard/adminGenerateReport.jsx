import React from 'react'
import { useState } from 'react'
import ApprovalTable from './approvalTable'

const AdminGenerateReport = () => {
    const [showReport, setShowReport] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const handleClick = () => {
        let fromDate = document.getElementById("fromDate").value
        let toDate = document.getElementById("toDate").value
        if (fromDate === '') return setErrMsg('Please select from Date')
        else if (toDate === '') return setErrMsg('Please select to Date')
        else if (fromDate > toDate) {
            setShowReport(false)
            setErrMsg('From Date should be lesser than To Date')
        }
        else {
            setShowReport(true)
            setErrMsg('')
        }
    }
    const clearFields = () => {
        document.getElementById("fromDate").value = ""
        document.getElementById("toDate").value = ""
        setShowReport(false)
        setErrMsg('')
    }
    const today = new Date();
    let todayDate = today.toLocaleString('en-ZA', { year: 'numeric', day: 'numeric', month: 'numeric' }).replace(/\//g, "-");
    return (
        <div className="modal fade" id="generateReport" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title font-weight-bold" id="exampleModalLabel">Generate Report</h5>
                        <button type="button" className="close" onClick={clearFields} data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-lg-4 mb-3 ">
                                    <div id="datepicker-popup" className="input-group date datepicker">
                                        <input type="date" id="fromDate" className="form-control" placeholder="From" max={todayDate} />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3 ">
                                    <div id="datepicker-popup" className="input-group date datepicker">
                                        <input type="date" id="toDate" className="form-control" placeholder="To" max={todayDate} />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3 ">
                                    <button type="button" onClick={handleClick} className="btn btn-primary">Generate</button>
                                </div>
                                {errMsg &&
                                    <div className="col-lg-8 ">
                                        <div className="alert alert-danger">
                                            <strong>Error!</strong> {errMsg}
                                        </div>
                                    </div>
                                }

                            </div>
                            {showReport && <ApprovalTable role="admin" />}
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={clearFields} className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                        {showReport && <button type="button" className="btn btn-primary">Download Excel</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminGenerateReport