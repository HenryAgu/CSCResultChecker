import React from 'react'

// stylesheet
import "./style/Register.css";

// Nav link
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <main className='register'>
      <div className="register_header">
        <h1>Register</h1>
      </div>
      <p>Create your account now!</p>
      <form className="register_form">
        <div className="inner_form">
          <label htmlFor="">Full Name</label>
          <input type="name" placeholder="Enter Full name" required />
        </div>
        <div className="inner_form">
          <label htmlFor="">Mat Number</label>
          <input type="name" placeholder="Enter Matriculation Number" required />
        </div>
        <div className="inner_form">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter School Email" required />
        </div>
        <div className="inner_form">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter Password" required />
        </div>
        <div className="inner_form">
          <label htmlFor="">Confirm Password</label>
          <input type="password" placeholder="Enter Password" required />
        </div>
        <button>Register</button>
      </form>
      <div className="register_section">
        <span>
          Already have an account?
          <NavLink
            to="/check_result"
            style={{ textDecoration: "none", color: "#1c2767" }}
          >
            {" "}Check your result
          </NavLink>
        </span>
      </div>
    </main>
  )
}

export default Register
