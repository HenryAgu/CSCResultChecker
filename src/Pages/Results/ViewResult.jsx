import React, { useState } from "react";

// stylesheet
import "./style/ViewStudent.css";
import { NavLink } from "react-router-dom";

// react icon
import { FiChevronLeft } from "react-icons/fi";

const ViewResult = () => {
  const [yearOneResult, setYearOneResult] = useState([
    {
      id: 1,
      courseCode: "GES100.1",
      courseTitle: "Communication skills in English",
      grade: "a",
    },
    {
      id: 2,
      courseCode: "GES102.1",
      courseTitle: "Introduction to Philosophy and Logic",
      grade: "b",
    },
    {
      id: 3,
      courseCode: "mth110.1",
      courseTitle: "algebra and trigonometry",
      grade: "b",
    },
    {
      id: 4,
      courseCode: "mth120.1",
      courseTitle: "calculus",
      grade: "b",
    },
    {
      id: 5,
      courseCode: "phy101.1",
      courseTitle: "mechanisms and properties of matter",
      grade: "b",
    },
    {
      id: 6,
      courseCode: "phy102.1",
      courseTitle: "laboratory practices i",
      grade: "b",
    },
    {
      id: 7,
      courseCode: "csc180.1",
      courseTitle: "introduction to computer science and basic programming",
      grade: "b",
    },
    {
      id: 8,
      courseCode: "chem130.1",
      courseTitle: "general chemistry i",
      grade: "b",
    },
    {
      id: 9,
      courseCode: "fsb101.1",
      courseTitle: "general biology i",
      grade: "b",
    },
    {
      id: "",
      courseCode: "",
      courseTitle: "second semester",
      grade: "",
    },
    {
      id: 10,
      courseCode: "GES101.2",
      courseTitle: "Computer appreciations and application",
      grade: "a",
    },
    {
      id: 11,
      courseCode: "csc182.2",
      courseTitle: "computer applications",
      grade: "b",
    },
    {
      id: 12,
      courseCode: "csc183.2",
      courseTitle: "introduction to problem solving",
      grade: "b",
    },
    {
      id: 13,
      courseCode: "mth114.2",
      courseTitle: "introduction to set logic and numbers",
      grade: "b",
    },
    {
      id: 14,
      courseCode: "mth124.2",
      courseTitle: "coordinate geometry",
      grade: "b",
    },
    {
      id: 15,
      courseCode: "ges103.2",
      courseTitle: "nigerian people and culture",
      grade: "b",
    },
    {
      id: 16,
      courseCode: "phy112.2",
      courseTitle: "introduction to electricity and magnetism",
      grade: "b",
    },
    {
      id: 17,
      courseCode: "phy103.2",
      courseTitle: "laboratory practices i",
      grade: "b",
    },
    {
      id: 18,
      courseCode: "sta160.2",
      courseTitle: "descriptive statistics",
      grade: "b",
    },
  ]);
  const [yearTwoResult, setYearTwoResult] = useState([
    {
      id: 1,
      courseCode: "mth270.1",
      courseTitle: "numeric analysis",
      grade: "a",
    },
    {
      id: 2,
      courseCode: "sta260.1",
      courseTitle: "introduction to probability and statistics",
      grade: "a",
    },
    {
      id: 3,
      courseCode: "mth270.1",
      courseTitle: "numeric analysis",
      grade: "a",
    },
    {
      id: 4,
      courseCode: "sta260.1",
      courseTitle: "introduction to probability and statistics",
      grade: "a",
    },
    {
      id: 5,
      courseCode: "mth270.1",
      courseTitle: "numeric analysis",
      grade: "a",
    },
    {
      id: 6,
      courseCode: "sta260.1",
      courseTitle: "introduction to probability and statistics",
      grade: "a",
    },
    {
      id: 7,
      courseCode: "mth270.1",
      courseTitle: "numeric analysis",
      grade: "a",
    },
    {
      id: 8,
      courseCode: "sta260.1",
      courseTitle: "introduction to probability and statistics",
      grade: "a",
    },
    {
      courseTitle: "second semester",
    },
    {
      id: 9,
      courseCode: "csc282.2",
      courseTitle: "database programming",
      grade: "a",
    },
    {
      id: 10,
      courseCode: "csc285.2",
      courseTitle: "digital designs and microprocessors",
      grade: "a",
    },
    {
      id: 11,
      courseCode: "csc286.2",
      courseTitle: "data structures",
      grade: "a",
    },
    {
      id: 12,
      courseCode: "csc287.2",
      courseTitle: "object oriented programming",
      grade: "a",
    },
    {
      id: 13,
      courseCode: "fsc2c1.2",
      courseTitle: "community service",
      grade: "a",
    },
    {
      id: 14,
      courseCode: "mth224.2",
      courseTitle: "mathematical methods i",
      grade: "a",
    },
    {
      id: 15,
      courseCode: "mth250.2",
      courseTitle: "elementary differential equations",
      grade: "a",
    },
    {
      id: 16,
      courseCode: "sta262.2",
      courseTitle: "mathematical statistics i",
      grade: "a",
    },
  ]);
  const [yearThreeResult, setYearThreeResult] = useState([
    {
      id: 1,
      courseCode: "ges300.1",
      courseTitle: "fundamental of entrepreneurship",
      grade: "a",
    },
    {
      id: 2,
      courseCode: "csc395.1",
      courseTitle: "introduction to software engineering",
      grade: "a",
    },
    {
      id: 3,
      courseCode: "csc382.1",
      courseTitle: "computer architecture i",
      grade: "a",
    },
    {
      id: 4,
      courseCode: "csc394.1",
      courseTitle: "operating systems",
      grade: "a",
    },
    {
      id: 5,
      courseCode: "csc396.1",
      courseTitle: "automata theory, computability & formal languages",
      grade: "a",
    },
    {
      id: 6,
      courseCode: "csc397.1",
      courseTitle: "computer methods",
      grade: "a",
    },
    {
      id: 7,
      courseCode: "sta370.1",
      courseTitle: "operations research",
      grade: "a",
    },
    {
      courseTitle: "second semester",
    },
    {
      id: 8,
      courseCode: "csc300.2",
      courseTitle: "industrial research",
      grade: "a",
    },
  ]);
  const [yearFourResult, setYearFourResult] = useState([
    {
      id: 1,
      courseCode: "ges400.1",
      courseTitle: "entrepreneurship",
      grade: "a",
    },
    {
      id: 2,
      courseCode: "csc480.1",
      courseTitle: "database management",
      grade: "a",
    },
    {
      id: 3,
      courseCode: "csc481.1",
      courseTitle: "object oriented programming ii",
      grade: "a",
    },
    {
      id: 4,
      courseCode: "csc482.1",
      courseTitle: "compiler construction",
      grade: "a",
    },
    {
      id: 5,
      courseCode: "csc483.1",
      courseTitle: "algorithms and complexity analysis",
      grade: "a",
    },
    {
      id: 6,
      courseCode: "csc486.1",
      courseTitle: "system analysis and design",
      grade: "a",
    },
    {
      id: 7,
      courseCode: "csc496.1",
      courseTitle: "programming languages (4th and 5th Generation)",
      grade: "a",
    },
    {
      id: 8,
      courseCode: "csc498.1",
      courseTitle: "computer network & communications",
      grade: "a",
    },
    {
      courseTitle: "second semester",
    },
    {
      id: 9,
      courseCode: "csc493.2",
      courseTitle: "internet and web applications",
      grade: "a",
    },
    {
      id: 10,
      courseCode: "csc494.2",
      courseTitle: "introduction to artificial intelligence",
      grade: "a",
    },
    {
      id: 11,
      courseCode: "csc495.2",
      courseTitle: "computer architecture ii",
      grade: "a",
    },
    {
      id: 12,
      courseCode: "csc470.2",
      courseTitle: "project",
      grade: "a",
    },
    {
      id: 13,
      courseCode: "csc491.2",
      courseTitle: "computer modelling and simulation",
      grade: "a",
    },
    {
      id: 14,
      courseCode: "csc492.2",
      courseTitle: "computer graphics",
      grade: "a",
    },
    {
      id: 15,
      courseCode: "csc497.2",
      courseTitle: "project management (audited course)",
      grade: "a",
    },
  ]);


  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);

  // result checker function
  const userResultChecker = (event) => {
    event.preventDefault();
    setShow(false);
    setHide(true);
  };

  return (
    <section className="view_result">
      <NavLink to="/admin">
        <div>
          <FiChevronLeft className="back" title="Go back" />
        </div>
      </NavLink>
      {show ? (
        <div className="search_result">
          <form action="" onSubmit={userResultChecker}>
            <div className="inner_form">
              <label htmlFor="">Mat No:</label>
              <input type="text" placeholder="Enter Mat Number" required />
            </div>
            <div className="inner_form">
              <label htmlFor="">Enrollment Year:</label>
              <input type="number" placeholder="Enter Enrollment Year" required />
            </div>
            <button>Check Result</button>
          </form>
        </div>
      ) : (
        false
      )}
      {hide ? (
        <div>
          <div className="student_year">
            <h3>2018</h3>
          </div>
          <p>Mat No: u2018/5570001</p>
          {/* Year one */}
          <div className="year_one">
            <div className="result_header">
              <h3>Year One</h3>
            </div>
            {/* Table for result */}
            <table>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Grade</th>
              </tr>
              <tbody>
                {yearOneResult.map((result) => (
                  <tr key={result.id}>
                    <td>{result.courseCode}</td>
                    <td>{result.courseTitle}</td>
                    <td>{result.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Year two */}
          <div className="year_one">
            <div className="result_header">
              <h3>Year Two</h3>
            </div>
            {/* Table for result */}
            <table>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Grade</th>
              </tr>
              <tbody>
                {yearTwoResult.map((result) => (
                  <tr key={result.id}>
                    <td>{result.courseCode}</td>
                    <td>{result.courseTitle}</td>
                    <td>{result.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Year three */}
          <div className="year_one">
            <div className="result_header">
              <h3>Year Three</h3>
            </div>
            {/* Table for result */}
            <table>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Grade</th>
              </tr>
              <tbody>
                {yearThreeResult.map((result) => (
                  <tr key={result.id}>
                    <td>{result.courseCode}</td>
                    <td>{result.courseTitle}</td>
                    <td>{result.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Year four */}
          <div className="year_one">
            <div className="result_header">
              <h3>Year Four</h3>
            </div>
            {/* Table for result */}
            <table>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Grade</th>
              </tr>
              <tbody>
                {yearFourResult.map((result) => (
                  <tr key={result.id}>
                    <td>{result.courseCode}</td>
                    <td>{result.courseTitle}</td>
                    <td>{result.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        true
      )}
    </section>
  );
};

export default ViewResult;
