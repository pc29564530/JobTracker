import React from 'react';
import './style/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
           
               <Link to="/fulltime">FullTime</Link>
               <Link to="/intern">Internship</Link>
                <Link to="/applied"className="job_applied">Applied</Link>
                
        </div>
    )
}

export default Navbar;
