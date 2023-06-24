import React from 'react'

// stylesheet
import "./style/Home.css";

// Nav link
import { NavLink } from "react-router-dom";

// images
import HomeLogo from "./image/Logo.jpg";

const Home = () => {
  return (
    <main className='home'>
      <div className="inner_home">
        <div className="inner_home_top">
          <img src={HomeLogo} alt="Uniport Logo" />
        </div>
        <div className="inner_home_bottom">
          <h3>Welcome To The Official Computer Science Student Result Checker</h3>
          <div className="bottom_buttons">
            <NavLink to="/check_result"><button>Check Result</button></NavLink>
            <NavLink to="/register"><button>Register</button></NavLink>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
