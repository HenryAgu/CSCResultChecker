import { useState } from "react";
import "./style/manaulresult.css";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManualResult = ({ page, setPage }) => {
  const [formBody, setFormBody] = useState({
    matNo: '',
    gradeValue: '',
    academicYear: 0,
    code: ''
  });
  const [isError, setError] = useState('')
  const URL = "https://result-backend.onrender.com/results";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormBody((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formBody);

  const handleAddResult = async (event) => {
    event.preventDefault();
    setError('')
    const response = axios
          .post(URL, formBody)
          .then((res) => {
            console.log(res.data);
            setData(res.data)
            toast.success('Grades added successfully ', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
          .catch(error => {
            if (error.response.status === 404 || error.response.status === 409) {
              if(typeof error.response.data === 'string'){
                setError(error.response.data)
              }
            } else {
              setError('An error occured')
            }
            console.log(error)
          });
    
  }

  const inline = {
    color:"red",
    fontSize: '20px'
  }
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
        <form className="mainForm" onSubmit={handleAddResult}>
          <div className="label">
            <label>Matriculation Number:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter the student's matriculation Number"
              className="resultInput"
              name="matNo"
              onChange={handleInputChange}
            />
          </div>

          <div className="label">
            <label>Course Code:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter the course code"
              className="resultInput"
              name='code'
              onChange={handleInputChange}
            />
          </div>
          
          <div className="label">
            <label>Grade:</label>
          </div>
          <select
            id="gradeSelector"
            name="gradeValue"
            className="results-selector"
            onChange={handleInputChange}
          >
            <option value="default">Select Grade</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>

          <div className="label">
            <label>Academic Year:</label>
          </div>
          <select
            id="courseSelector"
            name="academicYear"
            className="results-selector"
            onChange={handleInputChange}
          >
            <option value="default">Academic Year</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
          
          <div>
          {isError ? <div style={inline}> {isError} </div> : null}
            <button type="submit" className="result-button">
              Add
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ManualResult;
