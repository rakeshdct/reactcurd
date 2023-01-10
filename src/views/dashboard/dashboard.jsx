import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AdminAddUser from './adminAddUser'
import AdminDeleteUser from './adminDeleteUser'
import AdminGenerateReport from './adminGenerateReport'
import AdminListUser from './adminListUser'
import ProfileDetails from './profileDetails'
import '../../styles/custom.css'
import ApprovalStatus from './approvalStatus'
import NewEntryDetails from './newEntryDetails'

const Dashboard = () => {
  const [adminPage, setAdminPage] = useState(false)
  const [managerPage, setmanagerPage] = useState(false)
  const [securityPage, setsecurityPage] = useState(false)
  const location = useLocation();
  const locationPath = location.pathname;
  useEffect(() => {
    switch (locationPath) {
      case '/dashboard-admin':
        setAdminPage(true)
        setmanagerPage(false)
        setsecurityPage(false)
        document.title = "Dashboard Admin"
        break;
      case '/dashboard-manager':
        setmanagerPage(true)
        setAdminPage(false)
        setsecurityPage(false)
        document.title = "Dashboard Manager"
        break;
      case '/dashboard-hr':
        setmanagerPage(true)
        setAdminPage(false)
        setsecurityPage(false)        
        document.title = "Dashboard Hr"
        break;
      case '/dashboard-security':
        setsecurityPage(true)
        setmanagerPage(false)
        setAdminPage(false)        
        document.title = "Dashboard Security"
        break;
      default:
        break;
    }
  }, [locationPath]);


  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="row">
            <div className="col-12 col-md-8 col-xl-8 mb-4 mb-xl-0">
              <h3 className="font-weight-bold">Welcome User!</h3>
              <h6 className="font-weight-normal mb-0">All systems are running smoothly! </h6>
            </div>
            <div className="col-12 col-md-4  col-xl-4  d-flex justify-content-end  align-items-center">
              <div className="flex-grow-1 flex-md-grow-0 flex-xl-grow-0">
                {adminPage && <>
                  <button type="button" data-bs-toggle="modal" data-bs-target="#addUser"
                    className="btn btn-primary btn-sm">Add User</button>
                  <button type="button" data-bs-toggle="modal" data-bs-target="#generateReport"
                    className="btn btn-primary btn-sm ml-1">Generate Report</button>
                </>
                }
                {securityPage && <>
                  <button data-bs-toggle="modal" data-bs-target="#defaultModal" type="button" className="btn btn-primary  btn-sm">New Entry</button>
                </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      {adminPage && <><AdminListUser /><AdminAddUser /><AdminGenerateReport /> <AdminDeleteUser /></>}
      {managerPage && <><ApprovalStatus role="manager" /><ProfileDetails manager={true} /></>}
      {securityPage && <><ApprovalStatus role="security" /><ProfileDetails manager={false} /><NewEntryDetails /></>}
    </div>
  )
}

export default Dashboard