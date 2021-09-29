import React from 'react';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import './style/Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
           
                <div className="header_left">
                    <Link to="/"><h1>JOB</h1></Link>
                </div>
                <div className="header_right">
                    <div className="add_data">
                        <AddOutlinedIcon/>
                    </div>
                    <div className="guest_login">
                        <AccountCircleOutlinedIcon/>
                    </div>
                </div>
           
        </div>
    )
}

export default Header
