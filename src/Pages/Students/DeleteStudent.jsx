import React from "react";

// stylesheet
import "./style/deleteStudent.css";
import "./style/student.css";

const DeleteStudent = ({page, setPage}) => {
  return (
    <div className="deleteStudent">
      <div className="deleteCard">
        <h2 className="studentdesc">Delete student</h2>
        <hr />
        <form className="studentform delete_form">
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
          <label>
            <div className="studentStyle">Enter Student's Matriculation Number:</div>
          </label>
          <div className="studentInputTab">
            <input
              className="studentInput"
              type="text"
              placeholder="Enter Student's Matriculation Number:"
              name="student-last-name"
            />
          </div>
          <button>Find Student</button>
        </form>
      </div>
      <div className="student_info">
          <h3>Student's First Name: <span>Njokuji </span></h3>
          <h3>Student's Middle Name: <span>M</span></h3>
          <h3>Student's Last Name: <span>Anyawu</span></h3>
          <h3>Mat No: <span>u2018/5570034</span></h3>
          <button>Delete Student</button>
        </div>
    </div>
  );
};

export default DeleteStudent;
