import React from 'react'
import ApprovalTable from './approvalTable'

const ApprovalStatus = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <p className="card-title">Approvals</p>
                        <ApprovalTable role={props.role} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalStatus