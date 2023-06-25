import { useState } from "react";

// stylesheet
import "./style/Check.css";
import "./style/Result.css";

// React icons
import { BiSearchAlt } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

// Nav link
import { NavLink } from "react-router-dom";

const Check = () => {
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);

  // Result data

  // year one first semester
  const yearOneFirst = [
    { id: 1, course: "csc 180.1", score: 95, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
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
  const yearFourSecond = [
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
  const resultChecker = (event) => {
    event.preventDefault();
    setShow(false);
    setHide(true);
  };

  // hide result container
  const hideResult = () => {
    setShow(true);
    setHide(false);
  };

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
              <input type="name" placeholder="Matriculation Number" required />
            </div>
            <div className="inner_form inner_check_form">
              <label htmlFor="">Enter Your School Email:</label>
              <input type="email" placeholder="Valid School Email" required />
            </div>
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
                <td>U2018/5570000</td>
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
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearOneFirst.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
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
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearOneSecond.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
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
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearTwoFirst.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
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
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearTwoSecond.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
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
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearThreeFirst.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
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
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearThreeSecond.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
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
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearFourFirst.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
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
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearFourSecond.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
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
    </main>
  );
};

export default Check;
