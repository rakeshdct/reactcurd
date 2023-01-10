import React from 'react';
import { Link } from 'react-router-dom';
import { data } from './data.js';

const ApprovalTable = (props) => {
    const approvalStaus = (status) => {
        switch (status) {
            case 'Approved':
                return 'badge badge-success'
            case 'Pending':
                return 'badge badge-warning'
            case 'Rejected':
                return 'badge badge-danger'
            default:
                break;
        }
    }
    const passIndex = (element) => {
        document.getElementById('profileDetails').setAttribute('data-index',element)
    }

    return (
        <div className="table-responsive">
            <table className="table table-striped table-borderless">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reason for visit</th>
                        <th>Whom to meet</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.approvals.map((approval, i) => (
                            <tr key={i}>
                                <td> {props.role === "admin" ? approval.name : <Link data-index={i} onClick={(e)=>passIndex(e.target.attributes.getNamedItem('data-index').value)} data-bs-toggle="modal" data-bs-target={approval.status === 'Pending' ? props.role === "manager" ? "#profileDetails" : "#defaultModal" : "#profileDetails"} to="#">{approval.name}</Link>}</td>
                                <td>{approval.reason}</td>
                                <td>{approval.whom}</td>
                                <td className="font-weight-medium">
                                    <div className={approvalStaus(approval.status)}>{approval.status}</div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default ApprovalTable