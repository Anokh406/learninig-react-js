import React from 'react'
import PropTypes from 'prop-types';
import {NavLink } from 'react-router-dom';

export default function navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.Mode}  navbar-${props.Mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">WHITE DEVIL</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">{props.aboutText}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/textForm">Text form</NavLink>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
                <div className={`form-check form-switch mx-5 text-${props.Mode==='light'? 'dark':'light'}`}>
                      <input className="form-check-input" type="checkbox"onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Mode==='light'? 'Enable Dark Mode':'Enable Light Mode'}</label>
                 </div>
          </div>
        </div>
     </nav>
    </>
  )
}


navbar.propTypes = {title: PropTypes.string, aboutText: PropTypes.string}