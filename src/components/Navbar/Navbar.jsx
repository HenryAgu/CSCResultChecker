// import React from 'react'

// stylesheet
import "./style/Navbar.css";

// image
import NavLogo from "./img/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="inner_nav">
        <img src={NavLogo} alt="Logo" />
        <h2>Csc Result Checker</h2>
      </div>
    </nav>
  )
}

export default Navbar
