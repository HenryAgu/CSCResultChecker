import React from "react";

// stylesheet
import "./style/Register.css";

// Nav link
import { NavLink } from "react-router-dom";

// React toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [matNumber, setMatNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [yearOfEnrollment, setEnrollment] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setError] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [responseBody, setResBody] = useState("");
  const [formBody, setFormBody] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    matNo: "",
    studentEmail: "",
    enrollmentYear: 0,
  });

  const URL = "https://result-backend.onrender.com/students";
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === "enrollMentYear" ? parseInt(value) : value;
    setFormBody((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    // Email validation for school email
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(newEmail.includes("uniport.edu.ng"));
  };

  console.log(formBody);

  // const handleYearInput = (event) =>{
  //   event.preventDefault()
  //   const year = event.target.value
  //   setEnrollment(parseInt(year))
  // }

  // const data = {
  //   firstName,
  //   lastName,
  //   middleName,
  //   matNo: matNumber,
  //   studentEmail: Email,
  //   enrollmentYear: yearOfEnrollment
  // }
  // console.log(data);

  // register form submit function
  const handleRegister = async (event) => {
    event.preventDefault();
    console.log(isValid);
    if (isValid) {
      try {
        const response = axios
          .post(URL, formBody)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => error.response.data);
        console.log(response.data);

        if (isValid) {
          toast.success("Successful! OTP sent to mail", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log("sent");
          setFormBody({
            firstName: "",
            lastName: "",
            middleName: "",
            matNo: "",
            studentEmail: "",
            enrollmentYear: 0,
          });
        } else {
          console.log("check err log");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Invalid Email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <main className="register">
      <div className="register_header">
        <h1>Register</h1>
      </div>
      <p>Create your account now!</p>
      <form className="register_form" onSubmit={handleRegister}>
        <div className="inner_form">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter Full name"
            id="firstName"
            value={formBody.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="inner_form">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Full name"
            id="lastName"
            value={formBody.lastName}
            onChange={handleInputChange}
            required
          />
          <div className="inner_form">
            <label htmlFor="">Middle Name</label>
            <input
              type="text"
              name="middleName"
              placeholder="Enter Full name"
              id="middleName"
              value={formBody.middleName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="inner_form">
          <label htmlFor="">Mat Number</label>
          <input
            type="text"
            name="matNo"
            placeholder="Enter Matriculation Number"
            id="matNumber"
            value={formBody.matNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="inner_form">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="studentEmail"
            placeholder="Enter School Email"
            id="email"
            value={formBody.studentEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="email_verification">
          {!isValid && <span>Email must include "uniport.edu.ng"</span>}
        </span>
        <div className="inner_form">
          <label htmlFor="">Year Of Enrollment</label>
          <select
            id="my-dropdown"
            name="enrollmentYear"
            defaultValue={formBody.enrollmentYear}
            onChange={handleInputChange}
            required
          >
            <option value="default">----Select A Year----</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <button type="submit">Register</button>
        <div>
          {isError ? <div className="reg_error"> {errorMessage}</div> : null}
        </div>
      </form>
      <div className="register_section">
        <span>
          Already have an account?
          <NavLink
            to="/check_result"
            style={{ textDecoration: "none", color: "#1c2767" }}
          >
            {" "}
            Check your result
          </NavLink>
        </span>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Register;
