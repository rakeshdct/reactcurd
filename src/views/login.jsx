import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [user, setuser] = useState('');
    const [pwd, setpwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === '') return setErrMsg('Enter Username')
        else if (pwd === '') return setErrMsg('Enter Password')
        else if (pwd !== 'password') return setErrMsg('Invalid Credentails')
        else { navigate('../dashboard-admin'); }
    }
    return (
        <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                            <div className="brand-logo">
                                <img src="images/logo.svg" alt="logo" />
                            </div>
                            <h4>Hello! let's get started</h4>
                            <h6 className="font-weight-light">Sign in to continue.</h6>
                            <form className="pt-3" onSubmit={handleSubmit} >
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1"
                                        placeholder="Username" onChange={(e) => setuser(e.target.value)} value={user} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1"
                                        placeholder="Password" onChange={(e) => setpwd(e.target.value)} value={pwd} />
                                    {errMsg && <div className="alert alert-danger">
                                        <strong>Error!</strong> {errMsg}
                                    </div>
                                    }
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type='submit'>SIGN IN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login