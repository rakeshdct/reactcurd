import { React, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { editCurrentProfiledata, fetchapprovalData, approvalDataSelector } from "./approvalTable-dux";
// import { data } from './data.js';

const ApprovalTable = (props) => {
    const dispatch = useDispatch();
    const { approvalData, loading } = useSelector(approvalDataSelector);
    useEffect(() => {
        dispatch(fetchapprovalData());
    }, [dispatch]);

    const editCurentProfile = (i) => {
        dispatch(editCurrentProfiledata(i))
    }
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
    return (
        <div className="table-responsive">
            {loading ? "loading..." :
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
                            approvalData.map((approval, i) => (
                                <tr key={i}>
                                    <td> {props.role === "admin" ? approval.name : <Link data-index={i} onClick={() => editCurentProfile(i)} data-bs-toggle="modal" data-bs-target={approval.status === 'Pending' ? props.role === "manager" ? "#profileDetails" : "#defaultModal" : "#profileDetails"} to="#">{approval.name}</Link>}</td>
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
            }
        </div >
    )
}

export default ApprovalTable