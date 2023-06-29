import React, { useState } from "react";
import "./style/AdminPasswordReset.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

const AdminPasswordReset = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form validation passed, submit the form
      console.log("Form submitted");
      // Reset form fields
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      // Form validation failed, update the 'errors' state
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!oldPassword) {
      validationErrors.oldPassword = "Old Password is required";
    }
    if (!newPassword) {
      validationErrors.newPassword = "New Password is required";
    }
    if (!confirmPassword) {
      validationErrors.confirmPassword = "Confirm New Password is required";
    } else if (newPassword !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    return validationErrors;
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          <h1>Reset Password</h1>
          <form className="card-form" onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="password"
                className="input-field"
                required
                minLength="8"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <label className="input-label">Old Password</label>
              {errors.oldPassword && <span className="error">{errors.oldPassword}</span>}
            </div>
            <div className="input">
              <input
                type="password"
                className="input-field"
                required
                minLength="8"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label className="input-label">New Password</label>
              {errors.newPassword && <span className="error">{errors.newPassword}</span>}
            </div>
            <div className="input">
              <input
                type="password"
                className="input-field"
                required
                minLength="8"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label className="input-label">Confirm New Password</label>
            </div>
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            <div className="action">
              {/* <NavLink to="/admin/register/login/"> */}
                <button className="action-button" type="submit">
                  Reset Password
                </button>
              {/* </NavLink> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPasswordReset;
