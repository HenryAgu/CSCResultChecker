import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// stylesheet
import "./style/deleteStudent.css";
import "./style/student.css";

const DeleteStudent = ({ page, setPage }) => {
  const [studentData, setStudentData] = useState([]);
  const [studentMat, setStudentMat] = useState("");
  // get particxular student with matNo
  const fetchStudent = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://result-backend.onrender.com/students/getStudent",

        {
          matNo: studentMat,
        }
      );
      console.log(res);
      setStudentData(res.data.students);
      if (res.status === 200) {
        toast.success("Student info found", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.log("err");
      }
    } catch (e) {
      console.log(e);
      toast.error("Student not found", {
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

  // handle delete
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        "https://result-backend.onrender.com/students",
        {
          data: {
            matNo: id,
          },
        }
      );
      if (res.status === 200) {
        toast.success("Student record deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setStudentData([]);
      } else {
        console.log("err");
      }
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.error, {
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
  //  console.log(studentData)
  return (
    <div className="deleteStudent">
      <div className="deleteCard">
        <h2 className="studentdesc">Delete student</h2>
        <hr />
        <form className="studentform delete_form" onSubmit={fetchStudent}>
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
            <div className="studentStyle">
              Enter Student's Matriculation Number:
            </div>
          </label>
          <div className="studentInputTab">
            <input
              className="studentInput"
              type="text"
              placeholder="Enter Student's Matriculation Number:"
              name="student-last-name"
              value={studentMat}
              onChange={(e) => setStudentMat(e.target.value)}
            />
          </div>
          <button>Find Student</button>
        </form>
      </div>
      {/* return student info */}
      {studentData.length !== 0 ? (
        <div className="student_info">
          <h3>
            Student's First Name: <span>{studentData.firstName}</span>
          </h3>
          <h3>
            Student's Middle Name: <span>{studentData.middleName}</span>
          </h3>
          <h3>
            Student's Last Name: <span>{studentData.lastName}</span>
          </h3>
          <h3>
            Mat No: <span>{studentData.matNo}</span>
          </h3>
          <button onClick={() => handleDelete(studentData.matNo)}>
            Delete Student
          </button>
        </div>
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default DeleteStudent;
