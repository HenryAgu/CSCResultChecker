// import React from 'react'

// Nav link
import { NavLink } from "react-router-dom";

// stylesheet
import "./style/Navbar.css";

// image
import NavLogo from "./img/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="inner_nav">
      <NavLink to="/"><img src={NavLogo} alt="Uniport Logo" /></NavLink>
        <h2>Csc Result Checker</h2>
      <NavLink to="/admin/register"><button>ADMIN</button></NavLink>
      </div>
    </nav>
  )
}

export default Navbar
