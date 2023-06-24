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
  const yearone = [
    { id: 1, course: "csc 180.1", score: 25, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
  ];

  const yeartwo = [
    { id: 1, course: "csc 180.1", score: 25, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
  ];

  const yearthree = [
    { id: 1, course: "csc 180.1", score: 25, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
  ];

  const yearfour = [
    { id: 1, course: "csc 180.1", score: 25, grade: "A" },
    { id: 2, course: "ges 100.1", score: 30, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
    { id: 3, course: "ges 102.1", score: 35, grade: "A" },
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

          <h3>Year 1</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearone.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Year 2</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearone.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Year 3</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearone.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Year 4</h3>
          <table>
            <thead>
              <tr>
                <th>COURSE CODE</th>
                <th>SCORE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {yearone.map((item) => (
                <tr key={item.id}>
                  <td>{item.course}</td>
                  <td>{item.score}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="result_buttons">
            <button onClick={hideResult}><GiCancel/>CLOSE</button>
          </div>
        </div>
      ) : (
        true
      )}
    </main>
  );
};

export default Check;
