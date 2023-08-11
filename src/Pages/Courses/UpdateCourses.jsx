import { useState } from "react";
import "./style/courses.css";
// React toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const AddCourses = ({ page, setPage }) => {
  const [formData, setFormData] = useState({
    levelNumber: 0,
    semesterNumber: 0,
    subjectNumber: 0,
    name: "",
    code: "",
    creditUnits: 0,
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
          .put("https://result-backend.onrender.com/course", {
            levelNumber: formData.levelNumber,
            semesterNumber: formData.semesterNumber,
            subjectNumber: formData.subjectNumber,
            name: formData.name,
            code: formData.code,
            creditUnits: formData.creditUnits,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              toast.success("Course successfully updated", {
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
                levelNumber: 0,
                semesterNumber: 0,
                subjectNumber: 0,
                code: "",
                name: "",
                creditUnits: 0,
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
    if (!formData.levelNumber) {
      errors.levelNumber = "level number is required";
    }
    if (formData.levelNumber <= 0) {
      errors.levelNumber = "level is invalid";
    }

    if (!formData.semesterNumber) {
      errors.semesterNumber = "Semester number is required";
    }

    if(formData.semesterNumber === 0){
      errors.semesterNumber = "Please select a semester";
    }

    if (!formData.subjectNumber || formData.subjectNumber <= 0) {
      errors.subjectNumber = "Subject number is invalid";
    }

    if (!formData.code || formData.code.length === 0) {
      errors.code = "course code is required";
    }
    if (!formData.name) {
      errors.name = "course title is required";
    }
    if (!formData.creditUnits) {
      errors.creditUnits = "Enter valld credit units";
    }
    if (formData.creditUnits < 1 || formData.creditUnits > 3) {
      errors.creditUnits = "credit units must be between 1 and 3";
    }
    return errors;
  };

  const hasErrors = () => {
    return Object.keys(errors).length !== 0;
  };
  const [selected, setSelected] = useState("");

  const selectedOption = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className="courseMain">
      <div className="courseCard">
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
        <h2 className="description">Update a Course</h2>
        <hr />
        <form className="courseform" onSubmit={handleSubmit}>
          <label className="levelLabel">
            <div className="courseStyle">Select level:</div>
          </label>
          {errors.levelNumber && (
            <span className="error">{errors.levelNumber}</span>
          )}
          <div className="courseInputTab">
            <select
              id="Drop-Down"
              value={formData.levelNumber}
              className="courseLevel"
              name="levelNumber"
              onChange={handleChange}
            >
              <option value="default">Choose a Level</option>
              <option value={1}>Level 1</option>
              <option value={2}>Level 2</option>
              <option value={3}>Level 3</option>
              <option value={4}>Level 4</option>
            </select>
          </div>
          <label className="levelLabel">
            <div className="courseStyle">Select Semester</div>
          </label>
          {errors.semesterNumber && (
            <span className="error">{errors.semesterNumber}</span>
          )}
          <div className="courseInputTab">
            <select
              id="Drop-Down"
              value={formData.semesterNumber}
              className="courseLevel"
              name="semesterNumber"
              onChange={handleChange}
            >
              <option value={0}>Choose a semester</option>
              <option value={1}>First semester</option>
              <option value={2}>Second semester</option>
            </select>
          </div>
          <label className="levelLabel">
            <div className="courseStyle">Enter Course number e.g 180.1</div>
          </label>
          {errors.subjectNumber && (
            <span className="error">{errors.subjectNumber}</span>
          )}
          <div className="courseInputTab">
            <input
              className="courseInput"
              type="number"
              placeholder="180.1"
              name="subjectNumber"
              value={formData.subjectNumber}
              onChange={handleChange}
            />
          </div>

          <label>
            <div className="courseStyle">Course title:</div>
          </label>
          {errors.name && <span className="error">{errors.name}</span>}
          <div className="courseInputTab">
            <input
              className="courseInput"
              type="text"
              placeholder="Enter course name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <label>
            <div className="courseStyle">Course code:</div>
          </label>
          {errors.code && <span className="error">{errors.code}</span>}
          <div className="courseInputTab">
            <input
              className="courseInput"
              type="text"
              placeholder="csc 480.1"
              name="code"
              value={formData.code}
              onChange={handleChange}
            />
          </div>
          <label>
            <div className="courseStyle">Credit units:</div>
          </label>
          {errors.creditUnits && (
            <span className="error">{errors.creditUnits}</span>
          )}
          <div className="courseInputTab">
            <input
              className="courseInput"
              type="number"
              placeholder="3"
              name="creditUnits"
              value={formData.creditUnits}
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit">
            Update Course
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AddCourses;
