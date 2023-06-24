import React from "react";

// stylesheet
import "./style/Check.css";

// React icons
import { BiSearchAlt } from "react-icons/bi";

// Nav link
import { NavLink } from "react-router-dom";

const Check = () => {
  return (
    <main className="check">
      <div className="check_header">
        <h1>Result Checker</h1>
      </div>
      <form action="" className="check_form">
        <div className="inner_form inner_check_form">
          <label htmlFor="">Enter Your Mat Number:</label>
          <input type="name" placeholder="Matriculation Number" required />
        </div>
        <div className="inner_form inner_check_form">
          <label htmlFor="">Enter Your School Email:</label>
          <input type="email" placeholder="Valid School Email" required />
        </div>
        <div className="check_button">
          <button>Check <BiSearchAlt style={{fontSize: "20px"}}/></button>
        </div>
      </form>
      <div className="register_section">
        <span>
          Don't have an account?{" "}
          <NavLink
            to="/register"
            style={{ textDecoration: "none", color: "#1c2767" }}
          >
            Register
          </NavLink>
        </span>
      </div>
    </main>
  );
};

export default Check;
