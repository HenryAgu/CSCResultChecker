import { useState, useEffect } from "react";
import "./styles/dashboard.css";
import Students from "../../Pages/Students/Students";
import Courses from "../../Pages/Courses/Courses";
import Admin from "../../Pages/StudentAdmin/StudentAdmin";
import Results from "../../Pages/Results/Results";

// React icon
import { FiUpload,FiArrowRight } from "react-icons/fi";

// NavLink
import { NavLink } from "react-router-dom";

// Images
import admin from "./images/admin.png";
import course from "./images/course.png";
import student from "./images/student.png";
import results from "./images/Result.png";
import LearnMore from "./images/learn-more.png";

const Dashboard = () => {
  const [studentPage, setStudentPage] = useState(false);
  const [coursesPage, setCoursesPage] = useState(false);
  const [resultPage, setResultPage] = useState(false);
  const [adminPage, setAdminPage] = useState(false);
  const path = {
    student: "/student",
    course: "/courses",
    result: "/result",
    admin: "/admin",
  };

  useEffect(() => {
    const storedState = localStorage.getItem("myStates");
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      setStudentPage(parsedState.studentPage);
      setAdminPage(parsedState.adminPage);
      setResultPage(parsedState.resultPage);
      setCoursesPage(parsedState.coursesPage);
    } else {
      const initialState = {
        studentPage: false,
        coursesPage: false,
        resultPage: false,
        adminPage: false,
      };
      setStudentPage(initialState.studentPage);
      setAdminPage(initialState.adminPage);
      setResultPage(initialState.resultPage);
      setCoursesPage(initialState.coursesPage);
      localStorage.setItem("myStates", JSON.stringify(initialState));
    }
  }, []);

  const handleToggle = (stateName) => {
    const updatedState = {
      ...JSON.parse(localStorage.getItem("myStates")),
      [stateName]: !eval(stateName),
    };
    setStudentPage(updatedState.studentPage);
    setAdminPage(updatedState.adminPage);
    setResultPage(updatedState.resultPage);
    setCoursesPage(updatedState.coursesPage);
    localStorage.setItem("myStates", JSON.stringify(updatedState));
  };

  useEffect(() => {
    console.log(studentPage);
    console.log(coursesPage);
    console.log(resultPage);
    console.log(adminPage);
  }, [studentPage, coursesPage, resultPage, adminPage]);

  useEffect(() => {
    localStorage.clear();
    setStudentPage(false);
    setAdminPage(false);
    setResultPage(false);
    setCoursesPage(false);
  }, []);
  return (
    <div className="dashboard">
      <div
        style={{
          display:
            studentPage || resultPage || coursesPage || adminPage
              ? "none"
              : "inner_dashboard",
        }}
      >
        <div className="AdminHeader">
          <div className="header_text">
            <h2>Dashboard</h2>
            <span>Welcome, Mr. Agu!</span>
          </div>
          <div className="export" onClick={() => handleToggle("resultPage")}>
            <FiUpload className="export_icon" />
            <p>Export</p>
          </div>
        </div>
        <div className="learn_more">
          <div className="learn_more_left">
            <h1>You can now release batch-result</h1>
            <h4>Student result compilation made easy, you can now do that with just a click.</h4>
            <button onClick={() => handleToggle("resultPage")}>Learn More</button>
          </div>
          {/* <div className="learn_more_right">
            <img src={LearnMore} alt="Learn-more" />
          </div> */}
        </div>
        <div className="cards">
          <div className="carddivs">
            <div className="student inner_cards">
              <div
                className="hcard"
              >
                <img src={student} alt="student" />
                <h2>Students</h2>
                <h3>101</h3>
                <div className="view" onClick={() => handleToggle("studentPage")}>
                <p>View</p>
                <FiArrowRight/>
                </div>
              </div>
            </div>
            <div className="courses inner_cards">
              <div
                className="hcard"
              >
                <img src={course} alt="course" />
                <h2>Courses</h2>
                <h3>300</h3>
                <div className="view" onClick={() => handleToggle("coursesPage")}>
                <p>View</p>
                <FiArrowRight/>
                </div>
              </div>
            </div>
            <div className="result inner_cards">
              <div className="hcard">
                <img src={results} alt="result" />
                <h2>Result</h2>
                <h3>400</h3>
                <div className="view" onClick={() => handleToggle("resultPage")}>
                <p>View</p>
                <FiArrowRight/>
                </div>
              </div>
            </div>
            <div className="admin inner_cards">
              <div className="hcard">
                <img src={admin} alt="admin" />
                <h2>Admins</h2>
                <h3>2</h3>
                <div className="view" onClick={() => handleToggle("adminPage")}>
                <p>View</p>
                <FiArrowRight/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {studentPage && <Students />}
      {resultPage && <Results />}
      {adminPage && <Admin />}
      {coursesPage && <Courses />}
    </div>
  );
};

export default Dashboard;
