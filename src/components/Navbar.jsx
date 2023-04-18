import React from 'react';
import pic1 from '../images/Mediamodifier-Design-Template.png';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        <div>
        <nav className="navbar  navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand">
        <img className='logo' src={pic1} alt="Bootstrap"></img>
      </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/HomePage">EXHIBITORY</Link>
              </li>
             
              <li className="nav-item">
              <Link className='nav-link' to="/Contests">Contests</Link>
              </li>
              <li className="nav-item">
              <Link className='nav-link' to="/Charity">Charity</Link>
              </li>
              <li className="nav-item">
              <Link className='nav-link' to="/Profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Navbar;