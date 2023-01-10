import React, { useEffect } from 'react'

const NotFound = () => {
    useEffect(() => {
        document.title = "404 - This page could not be found."
    }, []);
    return (
        <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
                <div className="col-lg-4 mx-auto">
                    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                        <div className="brand-logo">
                            <img src="images/logo.svg" alt="logo" />
                        </div>
                        <h4>404</h4>
                        <h6 className="font-weight-light">This page could not be found.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound