import { useState } from "react";
import "./style/student.css";
// React toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const UpdateStudent = ({ page, setPage }) => {
  const [formBody, setFormBody] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    matNo: "",
    studentEmail: "",
    enrollmentYear: 0,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormBody({ ...formBody, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form validation passed, submit the form
      console.log("Form submitted");
      try {
        axios
          .put("https://result-backend.onrender.com/students", {
            firstName: formBody.firstName,
            lastName: formBody.lastName,
            middleName: formBody.middleName,
            matNo: formBody.matNo,
            studentEmail: formBody.studentEmail,
            enrollmentYear: formBody.enrollmentYear,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              toast.success("Student updated", {
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
              setFormBody({
                firstName: 0,
                lastName: 0,
                middleName: 0,
                studentEmail: "",
                matNo: "",
                enrollmentYear: 0,
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
    if (!formBody.firstName) {
      errors.firstName = "first name is required";
    }

    if (!formBody.lastName) {
      errors.lastName = "last name is required";
    }

    if (!formBody.middleName) {
      errors.middleName = "middle name is required";
    }

    if (!formBody.studentEmail || !formBody.studentEmail.includes("@uniport.edu.ng")) {
      errors.studentEmail = "Enter valid email address with @uniport.edu.ng";
    }
    if (!formBody.matNo) {
      errors.matNo = "course title is required";
    }
    if (!formBody.enrollmentYear) {
      errors.enrollmentYear = "Enter valld year";
    }
    return errors;
  };

  const hasErrors = () => {
    return Object.keys(errors).length !== 0;
  };

  return (
    <div className="studentMain">
      <div className="studentCard">
        <div
          style={{
            padding: "7px 15px",
            backgroundColor: "gray",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "max-content",
            display: "flex",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          <p>Back</p>
        </div>
        <h2 className="studentdesc">Update a student</h2>
        <hr />
        <form className="studentform" onSubmit={handleSubmit}>
          <label>
            <div className="studentStyle">First Name:</div>
          </label>
          <div className="studentInputTab">
            <input
              className="studentInput"
              type="text"
              name="firstName"
              placeholder="Enter Full name"
              id="firstName"
              value={formBody.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <label>
            <div className="studentStyle">Last Name:</div>
          </label>
          <div className="studentInputTab">
            <input
              className="studentInput"
              type="text"
              name="lastName"
              placeholder="Enter Full name"
              id="lastName"
              value={formBody.lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          <label>
            <div className="studentStyle">Middle Name:</div>
          </label>
          <div className="studentInputTab">
            <input
              className="studentInput"
              type="text"
              name="middleName"
              placeholder="Enter Full name"
              id="middleName"
              value={formBody.middleName}
              onChange={handleInputChange}
              required
            />
          </div>

          <label>
            <div className="studentStyle">Matriculation Number:</div>
          </label>
          <div className="studentInputTab">
            <input
              className="studentInput"
              type="text"
              name="matNo"
              placeholder="Enter Matriculation Number"
              id="matNumber"
              value={formBody.matNo}
              onChange={handleInputChange}
              required
            />
          </div>

          <label className="levelLabel">
            <div className="studentStyle">Input email:</div>
          </label>
          <div className="studentInputTab">
            <input
              className="studentInput"
              type="text"
              name="studentEmail"
              placeholder="Enter School Email"
              id="email"
              value={formBody.studentEmail}
              onChange={handleInputChange}
              required
            />
          </div>
          <label htmlFor="">Year Of Enrollment</label>
          <div className="studentInputTab">
            <select
              id="Drop-Down"
              className="courseLevel"
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

          <button className="btn" type="submit">
            Update Student
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateStudent;
