import { useState } from "react";
import "./style/manaulresult.css";

const ManualResult = ({ page, setPage }) => {
  return (
    <div className="mainFormBody">
      <div className="mainFormCard">
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
        <h2 className="mainFormDesc"> Add Results</h2>
        <hr />
        <form className="mainForm">
          <div className="label">
            <label>Level:</label>
          </div>
          <select
            id="resultResultSelector"
            name="result-Level"
            className="results-selector"
          >
            <option value="default">Select Level</option>
            <option value="option 1">Level 1</option>
            <option value="option 2">Level 2</option>
            <option value="option 3">Level 3</option>
            <option value="option 4">Level 4</option>
          </select>
          <div className="label">
            <label>Matriculation Number:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter the student's matriculation Number"
              className="resultInput"
            />
          </div>
          <div className="label">
            <label>Courses:</label>
          </div>
          <select
            id="courseSelector"
            name="result-course"
            className="results-selector"
          >
            <option value="default">Select Course</option>
            <option value="option 1">Chem 360</option>
            <option value="option 2">CSC 400</option>
            <option value="option 3">CSC 481</option>
            <option value="option 4">CSC 410</option>
          </select>
          <div className="label">
            <label>Grade:</label>
          </div>
          <select
            id="gradeSelector"
            name="result-grade"
            className="results-selector"
          >
            <option value="default">Select Grade</option>
            <option value="option 1">A</option>
            <option value="option 2">B</option>
            <option value="option 3">C</option>
            <option value="option 4">D</option>
            <option value="option 5">E</option>
            <option value="option 6">F</option>
          </select>
          <div>
            <button type="submit" className="result-button">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManualResult;
