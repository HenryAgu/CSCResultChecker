import React, { useState } from "react";
import "./style/AdminRegister.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    password: "",
    passwordConfirm: "",
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
      try {
        axios
          .post("https://result-backend.onrender.com/admin", {
            firstName: formData.firstName,
            lastName: formData.lastName,
            middleName: formData.middleName,
            password: formData.password,
            email: formData.email,
            passwordConfirm: formData.passwordConfirm,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              toast.success("Admin successfully created", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              // set fields to empty
              setFormData({
                firstName: "",
                lastName: "",
                middleName: "",
                email: "",
                password: "",
                passwordConfirm: "",
              });
            } else {
              console.log("error occured");
            }
          })
          .catch((error) => {
            console.log(error.response.data.error);
            toast.error(error.response.data.error, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      // Form validation failed, update the 'errors' state
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    if (!formData.passwordConfirm) {
      errors.passwordConfirm = "Confirm Password is required";
    } else if (formData.password !== formData.passwordConfirm) {
      errors.passwordConfirm = "Passwords do not match";
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
                type="text"
                className="input-field"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label className="input-label">First Name</label>
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                className="input-field"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label className="input-label">Last Name</label>
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                className="input-field"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                required
              />
              <label className="input-label">Middle Name</label>
              {errors.middleName && (
                <span className="error">{errors.middleName}</span>
              )}
            </div>
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
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                required
              />
              <label className="input-label">Confirm Password</label>
            </div>
            {errors.passwordConfirm && (
              <span className="error-message">{errors.passwordConfirm}</span>
            )}
            <div className="action">
              {/* <NavLink to="/admin/register/login"> */}
              <button
                className="action-button"
                disabled={hasErrors()}
                type="submit"
              >
                Get started
              </button>
              {/* </NavLink> */}
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
      <ToastContainer />
    </div>
  );
};

export default AdminRegister;
