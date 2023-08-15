import { useState } from "react";

// stylesheet
import "./style/Check.css";
import "./style/Result.css";

// React icons
import { BiSearchAlt } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

// Nav link
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Check = () => {
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  const [isError, setError] = useState('');
  const [matNum, setNum] = useState('');
  const [results, setResults] = useState([])
  
  const [formBody, setFormBody] = useState({
    matNo: "",
    secretValue: ""
  });

  const URL = "https://result-backend.onrender.com/studentLogin";
  const handleInputChange = (event) => {
    
    const { name, value } = event.target;
    setFormBody((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formBody);
  const resultChecker = async (event) => {
    event.preventDefault();
    setError('')
    const response = axios
          .post(URL, formBody)
          .then((res) => {
            console.log(res.data.message);
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            const matVal = formBody.matNo.toUpperCase()
            setNum(matVal)
            const gradeData = axios.post('https://result-backend.onrender.com/Grade',{matNo: matVal})
            .then((res) => {
              console.log(res.data.data)
              setResults(res.data.data)
            })
            setShow(false);
            setHide(true);
          })
          .catch(error => {
            if (error.response.status === 400){
              if(typeof error.response.data === 'string'){
                setError(error.response.data)
              } else if (typeof error.response.data === 'object' && error.response.data.message){
                setError(error.response.data.message)
              }
            } else {
              setError('An error occured')
            }
            console.log(error)
          });
    
  }
  console.log(results)
//  Result data

  // year one first semester
  const yearOneFirst = [
    { id: 1, course: "csc 180.1", score: 95, grade: "F" },
    { id: 2, course: "ges 100.1", score: 30, grade: "f" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 4, course: "ges 102.1", score: 35, grade: "A" },
    { id: 5, course: "ges 102.1", score: 35, grade: "A" },
    { id: 6, course: "ges 102.1", score: 35, grade: "A" },
    { id: 7, course: "ges 102.1", score: 35, grade: "A" },
    { id: 8, course: "ges 102.1", score: 35, grade: "A" },
    { id: 9, course: "ges 102.1", score: 35, grade: "A" },
  ];

  // year one second semester
  const yearOneSecond = [
    { id: 1, course: "csc 180.1", score: 95, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
    { id: 3, course: "ges 103.1", score: 35, grade: "A" },
    { id: 4, course: "ges 102.1", score: 35, grade: "A" },
    { id: 5, course: "ges 102.1", score: 35, grade: "A" },
    { id: 6, course: "ges 102.1", score: 35, grade: "A" },
    { id: 7, course: "ges 102.1", score: 35, grade: "A" },
    { id: 8, course: "ges 102.1", score: 35, grade: "A" },
    { id: 9, course: "ges 102.1", score: 35, grade: "A" },
  ];

  // year two first semester
  const yearTwoFirst = [
    { id: 1, course: "csc 180.1", score: 25, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 4, course: "ges 102.1", score: 35, grade: "A" },
    { id: 5, course: "ges 102.1", score: 35, grade: "A" },
    { id: 6, course: "ges 102.1", score: 35, grade: "A" },
    { id: 7, course: "ges 102.1", score: 35, grade: "A" },
    { id: 8, course: "ges 102.1", score: 35, grade: "A" },
    { id: 9, course: "ges 102.1", score: 35, grade: "A" },
  ];

  // year two second semester
  const yearTwoSecond = [
    { id: 1, course: "csc 180.1", score: 25, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 4, course: "ges 102.1", score: 35, grade: "A" },
    { id: 5, course: "ges 102.1", score: 35, grade: "A" },
    { id: 6, course: "ges 102.1", score: 35, grade: "A" },
    { id: 7, course: "ges 102.1", score: 35, grade: "A" },
    { id: 8, course: "ges 102.1", score: 35, grade: "A" },
    { id: 9, course: "ges 102.1", score: 35, grade: "A" },
  ];

  // Year Three first semester
  const yearThreeFirst = [
    { id: 1, course: "csc 180.1", score: 75, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 4, course: "ges 102.1", score: 35, grade: "A" },
    { id: 5, course: "ges 102.1", score: 35, grade: "A" },
    { id: 6, course: "ges 102.1", score: 35, grade: "A" },
    { id: 7, course: "ges 102.1", score: 35, grade: "A" },
    { id: 8, course: "ges 102.1", score: 35, grade: "A" },
    { id: 9, course: "ges 102.1", score: 35, grade: "A" },
  ];

  // Year Three second semester
  const yearThreeSecond = [
    { id: 1, course: "csc 180.1", score: 75, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 4, course: "ges 102.1", score: 35, grade: "A" },
    { id: 5, course: "ges 102.1", score: 35, grade: "A" },
    { id: 6, course: "ges 102.1", score: 35, grade: "A" },
    { id: 7, course: "ges 102.1", score: 35, grade: "A" },
    { id: 8, course: "ges 102.1", score: 35, grade: "A" },
    { id: 9, course: "ges 102.1", score: 35, grade: "A" },
  ];

  // year four first semester
  const yearFourFirst = [
    { id: 1, course: "csc 180.1", score: 25, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 4, course: "ges 102.1", score: 35, grade: "A" },
    { id: 5, course: "ges 102.1", score: 35, grade: "A" },
    { id: 6, course: "ges 102.1", score: 35, grade: "A" },
    { id: 7, course: "ges 102.1", score: 35, grade: "A" },
    { id: 8, course: "ges 102.1", score: 35, grade: "A" },
    { id: 9, course: "ges 102.1", score: 35, grade: "A" },
  ];

  // year four second semester
  const yearFourSecond =[
    { id: 1, course: "csc 180.1", score: 25, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 4, course: "ges 102.1", score: 35, grade: "A" },
    { id: 5, course: "ges 102.1", score: 35, grade: "A" },
    { id: 6, course: "ges 102.1", score: 35, grade: "A" },
    { id: 7, course: "ges 102.1", score: 35, grade: "A" },
    { id: 8, course: "ges 102.1", score: 35, grade: "A" },
    { id: 9, course: "ges 102.1", score: 35, grade: "A" },
  ];

  // result checker function
  // const resultChecker = (event) => {
  //   event.preventDefault();
   
  // };

  // hide result container
  const hideResult = () => {
    setShow(true);
    setHide(false);
  };

  const inline = {
    color:"red",
    fontSize: '20px'
  }

  return (
    <main className="check">
      <div className="check_header">
        <h1>Result Checker</h1>
      </div>
      {show ? (
        <div>
          <form action="" className="check_form" onSubmit={resultChecker}>
            <div className="inner_form inner_check_form">
              <label htmlFor="">Enter Your Mat Number:</label>
              <input type="name" name="matNo" placeholder="Matriculation Number" onChange={handleInputChange} required/>
            </div>
            <div className="inner_form inner_check_form">
              <label htmlFor="">Enter Secret Key:</label>
              <input type="text" name="secretValue" placeholder="Enter secret key sent to mail" onChange={handleInputChange}required />
            </div>
            {isError ? <div style={inline}> {isError} </div> : null}
            <div className="check_button">
              <button>
                Check <BiSearchAlt style={{ fontSize: "20px" }} />
              </button>
            </div>
          </form>
          <div className="register_section check_section">
            <span>
              Don't have an account?{" "}
              <NavLink
                to="/register"
                style={{ textDecoration: "none", color: "#1c2767" }}
              >
                Register
              </NavLink>
            </span>
          </div>
        </div>
      ) : (
        false
      )}
      {hide ? (
        <div className="result_table">
          <h3>Your Result:</h3>
          <table className="user_info">
            <tbody>
              <tr>
                <td>MAT NUMBER:</td>
                <td>{matNum}</td>
              </tr>
              <tr>
                <td>NAME:</td>
                <td>ABASIAYAYA ISREAL AMADI</td>
              </tr>
            </tbody>
          </table>

          {/* Year 1 First semester result */}
          <h3>Year 1 (First Semester)</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>Course description</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(results) && results.map((item) => (
                ((item.levelNumber === 1 && item.semesterNumber === 1)) && (<tr key={item.id}>
                  <td>{item.courseCode}</td>
                  <td>{item.courseName}</td>
                  <td style={{color: item.gradeValue === "F" || item.gradeValue === "f" ? "red": "black"}}>{item.gradeValue}</td>
                </tr>
              )))}
            </tbody>
          </table>
          <div className="gpa">
            <h5>GPA: 3.8</h5>
          </div>

          {/* Year 1 second semester result */}
          <h3>Year 1 (Second Semester)</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>Course description</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(results) && results.map((item) => (
                ((item.levelNumber === 1 && item.semesterNumber === 2)) && (<tr key={item.id}>
                  <td>{item.courseCode}</td>
                  <td>{item.courseName}</td>
                  <td>{item.gradeValue}</td>
                </tr>
              )))}
            </tbody>
          </table>
          <div className="gpa">
            <h5>GPA: 3.8</h5>
          </div>

          {/* Year 2 First semester result */}
          <h3>Year 2 (First Semester)</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>Course description</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(results) && results.map((item) => (
                ((item.levelNumber === 2 && item.semesterNumber === 1)) && (<tr key={item.id}>
                  <td>{item.courseCode}</td>
                  <td>{item.coursename}</td>
                  <td>{item.gradeValue}</td>
                </tr>
              )))}
            </tbody>
          </table>
          <div className="gpa">
            <h5>GPA: 3.8</h5>
          </div>

          {/* Year 2 second semester result */}
          <h3>Year 2 (Second Semester)</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>Course descript</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(results) && results.map((item) => (
                ((item.levelNumber === 2 && item.semesterNumber === 2)) && (<tr key={item.id}>
                  <td>{item.courseCode}</td>
                  <td>{item.courseName}</td>
                  <td>{item.gradeValue}</td>
                </tr>
              )))}
            </tbody>
          </table>
          <div className="gpa">
            <h5>GPA: 3.8</h5>
          </div>

          {/* Year 3 first semester result */}
          <h3>Year 3 (First Semester)</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>Course descript</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(results) && results.map((item) => (
                ((item.levelNumber === 3 && item.semesterNumber === 1)) && (<tr key={item.id}>
                  <td>{item.courseCode}</td>
                  <td>{item.courseName}</td>
                  <td>{item.gradeValue}</td>
                </tr>
              )))}
            </tbody>
          </table>
          <div className="gpa">
            <h5>GPA: 3.8</h5>
          </div>

          {/* Year 3 second semester result */}
          <h3>Year 3 (Second Semester)</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>Course description</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(results) && results.map((item) => (
                ((item.levelNumber === 3 && item.semesterNumber === 2)) && (<tr key={item.id}>
                  <td>{item.courseCode}</td>
                  <td>{item.courseName}</td>
                  <td>{item.gradeValue}</td>
                </tr>
              )))}
            </tbody>
          </table>
          <div className="gpa">
            <h5>GPA: 3.8</h5>
          </div>

          {/* Year 4 first semester result */}
          <h3>Year 4 (First Semester)</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>Course description</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(results) && results.map((item) => (
                ((item.levelNumber === 4 && item.semesterNumber === 1)) && (<tr key={item.id}>
                  <td>{item.courseCode}</td>
                  <td>{item.courseName}</td>
                  <td>{item.gradeValue}</td>
                </tr>
              )))}
            </tbody>
          </table>
          <div className="gpa">
            <h5>GPA: 3.8</h5>
          </div>

          {/* Year 4 second semester result */}
          <h3>Year 4 (Second Semester)</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>Course description</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(results) && results.map((item) => (
                ((item.levelNumber === 4 && item.semesterNumber === 2)) && (<tr key={item.id}>
                  <td>{item.courseCode}</td>
                  <td>{item.courseName}</td>
                  <td>{item.gradeValue}</td>
                </tr>
              )))}
            </tbody>
          </table>
          <div className="gpa">
            <h5>GPA: 3.8</h5>
          </div>

          {/* Total CGPA */}
          <div className="gpa">
            <h4>Your CGPA is 4.2</h4>
          </div>
          <div className="result_buttons">
            <button onClick={hideResult}>
              <GiCancel />
              CLOSE
            </button>
          </div>
        </div>
      ) : (
        true
      )}
    <ToastContainer/>  
    </main>
  );
};

export default Check;
