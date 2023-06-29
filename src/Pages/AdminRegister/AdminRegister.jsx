import React, { useState } from "react";
import "./style/AdminRegister.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form validation passed, submit the form
      console.log("Form submitted");
    } else {
      // Form validation failed, update the 'errors' state
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const hasErrors = () => {
    return Object.keys(errors).length !== 0;
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card">
          <h1>Register Account</h1>
          <form className="card-form" onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="email"
                className="input-field"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="input-label">Email</label>
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="input">
              <input
                type="password"
                className="input-field"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label className="input-label">Password</label>
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="input">
              <input
                type="password"
                className="input-field"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <label className="input-label">Confirm Password</label>
            </div>
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            <div className="action">
              <NavLink to="/admin/register/login">
                <button
                  className="action-button"
                  disabled={hasErrors()}
                  type="submit"
                >
                  Get started
                </button>
              </NavLink>
            </div>
            <div className="card-form-p">
              <p>
                have an account?{" "}
                <NavLink to="/admin/register/login">Login</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
