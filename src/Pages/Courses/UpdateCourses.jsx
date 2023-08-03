import { useState } from "react";
import "./style/courses.css";

const UpdateCourses = ({ page, setPage }) => {
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
            marginBottom: "20px"
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
        <h2 className="description">Update Course</h2>
        <hr />
        <form className="courseform">
          <label className="levelLabel">
            <div className="courseStyle">Select level:</div>
          </label>
          <select
            id="Drop-Down"
            value={selected}
            className="courseLevel"
            name="course-level"
            onChange={selectedOption}
          >
            <option value="default">Choose a Level</option>
            <option value="option1">Level 1</option>
            <option value="option2">Level 2</option>
            <option value="option3">Level 3</option>
            <option value="option4">Level 4</option>
          </select>

          <label>
            <div className="courseStyle">Course:</div>
          </label>
          <div className="courseInputTab">
            <input
              className="courseInput"
              type="text"
              placeholder="Enter course name"
              name="course-input"
            />
          </div>
          <button className="btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourses;
