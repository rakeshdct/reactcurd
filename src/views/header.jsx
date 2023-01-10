import React from 'react'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const todayDate = new Date().toLocaleString('en-in',{day:'numeric',month:'short', year:'numeric'})
    const [open, setOpen] = useState(false);
    const catMenu = useRef(null)
    const closeOpenMenus = (e) => {
        if (catMenu.current && open && !catMenu.current.contains(e.target)) {
            setOpen(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus)
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <Link className="navbar-brand brand-logo" to="../dashboard-admin"><img src="images/logo.svg" alt="logo" /></Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item calendar">
                        <div className="justify-content-end d-flex">
                            <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                                <div className="btn btn-sm btn-light bg-white">
                                    <i className="fa fa-calendar"></i> Today ({todayDate})
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item nav-profile dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" onClick={() => setOpen(!open)} id="profileDropdown">
                            <img src="images/face28.jpg" alt="profile" />
                        </Link>
                        <div ref={catMenu} className={open ? "dropdown-menu dropdown-menu-right navbar-dropdown show" : "dropdown-menu dropdown-menu-right navbar-dropdown"} aria-labelledby="profileDropdown">
                            <Link to="./login" className="dropdown-item">
                                <i className="ti-power-off text-primary"></i>
                                Logout
                            </Link>
                        </div>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                    data-toggle="offcanvas">
                    <span className="icon-menu"></span>
                </button>
            </div>
        </nav >
    )
}

export default Header