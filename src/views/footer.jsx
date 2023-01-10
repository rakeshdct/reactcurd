import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="d-sm-flex justify-content-center ">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2023. <Link
                    href="https://www.company.com/" target="_blank">company </Link> from Dashvoard .
                    All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer