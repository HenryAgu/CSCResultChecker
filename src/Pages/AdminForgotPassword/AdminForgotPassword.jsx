import React, { useState } from 'react';
import "./style/AdminForgotPassword.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic or validation here
    if (!email) {
      setErrorMessage('Please enter your email.');
    } else {
      // Your password reset logic goes here
      console.log('Password reset initiated');
      // Reset form field and error message
      setEmail('');
      setErrorMessage('');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card">
          <h1>Forgot Your Password?</h1>
          <form className="card-form" onSubmit={handleSubmit}>
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

            <div className="action">
            <NavLink to="/admin/register/login/forgotpass/passwordrest">
              <button type="submit" className="action-button">Reset Password</button>
              </NavLink>
            </div>

            <div className="card-form-p">
            <p>Don't have an account? <NavLink to="/admin/register">Register</NavLink></p>
            </div>

            
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPassword;