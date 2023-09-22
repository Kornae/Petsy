import React from "react";
import ShortTextIcon from '@mui/icons-material/ShortText';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand me-auto icon" href="#"><ShortTextIcon /></span>
                <span className="navbar-brand mx-auto brand" href="#">petsy.</span>
                <span className="navbar-brand ms-auto login" href="#">Login</span>
            </div>
        </nav>
    )
}