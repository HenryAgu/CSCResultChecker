import React, { useState } from "react";
import "./Style/AdminLogin.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

// Authentication hook
import useAuth from "../../hooks/useAuth";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setAuth } = useAuth();

  //these are needed to control the forward navigation
  //basically take the user to where he is comming from when before he got redirected to the login page because he was not logged in
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   console.log("clicked");
  //   e.preventDefault();

  //   // Perform form submission logic or validation here
  //   if (!email || !password) {
  //     setErrorMessage("Please fill in all fields.");
  //   } else {
  //     // Simulating server-side validation and error handling
  //     if (email === "admin@example.com" && password === "password") {
  //       // Successful login
  //       console.log("Login successful");
  //       setAuth({
  //         username: "Grace",
  //         accessToken: 2468,
  //       });
  //       // navigates to dashboard
  //       navigate(from, { replace: true });
  //       // Reset form fields and error message
  //       setEmail("");
  //       setPassword("");
  //       setErrorMessage("");
  //     } else {
  //       // Login failed - incorrect email or password
  //       setErrorMessage("Invalid email or password.");
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    console.log("clicked");
    e.preventDefault();

    // Perform form submission logic or validation here
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
    } else {
      // Simulating server-side validation and error handling
      if (email === "admin@example.com" && password === "password") {
        // Successful login
        console.log("Login successful");
        setAuth({
          username: "Grace",
          accessToken: 2468,
        });
        // navigates to dashboard
        navigate(from, { replace: true });
        // Reset form fields and error message
        setEmail("");
        setPassword("");
        setErrorMessage("");
      } else {
        // Login failed - incorrect email or password
        setErrorMessage("Invalid email or password.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card">
          <h1>Login Account</h1>
          <form className="card-form">
            <div className="input">
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input
                type="password"
                className="input-field"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <label className="input-label">Password</label>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="forgot">
              <NavLink to="/admin/register/login/forgotpass">
                {" "}
                Forgot Password?
              </NavLink>
            </div>
            <div className="action">
              <NavLink to="/admin">
                {" "}
                {/* <button className="action-button">
                  LOGIN
                </button> */}
              </NavLink>
            </div>
          </form>
          <button className="action-button"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            LOGIN
          </button>
          <div className="card-form-p">
              <p>
                Don't have an account?{" "}
                <NavLink to="/admin/register">Register</NavLink>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
