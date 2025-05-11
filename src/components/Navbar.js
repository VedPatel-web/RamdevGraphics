import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>

        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              src={props.img}
              alt="Logo"
              className="navbar-brand"
              style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
            />
          </div>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Portfolio">Portfolio</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: "hi hi",
  about: "bapo bappo"
}