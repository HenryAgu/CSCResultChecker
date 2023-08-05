import { useState, useEffect } from "react";
import AddCourses from "./AddCourses";
import UpdateCourses from "./UpdateCourses";
import "./style/courses.css";

// React icon
import { FiUpload } from "react-icons/fi";
import { MdKeyboardBackspace } from "react-icons/md";

// images
import AddCourse from "./images/AddCourse.png";
import UpdateCourse from "./images/UpdateCourse.png";

// NavLink
import { NavLink } from "react-router-dom";

const Courses = () => {
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [active, setActive] = useState(null)

  const handleAdd = () => {
    setAdd(!add)
  };

  const handleUpdate = () => {
    setUpdate(!update);
  };

  // const [studentPage, setStudentPage] = useState(false);
  // const [coursesPage, setCoursesPage] = useState(false);
  // const [resultPage, setResultPage] = useState(false);
  // const [adminPage, setAdminPage] = useState(false);
  // const path = {
  //   student: "/student",
  //   course: "/courses",
  //   result: "/result",
  //   admin: "/admin",
  // };

  // const handleToggle = (stateName) => {
  //   const updatedState = {
  //     ...JSON.parse(localStorage.getItem("myStates")),
  //     [stateName]: !eval(stateName),
  //   };
  //   setStudentPage(updatedState.studentPage);
  //   setAdminPage(updatedState.adminPage);
  //   setResultPage(updatedState.resultPage);
  //   setCoursesPage(updatedState.coursesPage);
  //   localStorage.setItem("myStates", JSON.stringify(updatedState));
  // };

  // useEffect(() => {
  //   console.log(studentPage);
  //   console.log(coursesPage);
  //   console.log(resultPage);
  //   console.log(adminPage);
  // }, [studentPage, coursesPage, resultPage, adminPage]);

  // useEffect(() => {
  //   localStorage.clear();
  //   setStudentPage(false);
  //   setAdminPage(false);
  //   setResultPage(false);
  //   setCoursesPage(false);
  // }, []);
  return (
    <div className="courses_container">
      <div className="coursesHeader">
        <div className="header_text">
          <h2>Courses</h2>
        </div>
        <div className="export" onClick={() => handleToggle("resultPage")}>
          <FiUpload className="export_icon" />
          <p>Export</p>
        </div>
      </div>
      <div className="cards" style={{display: add || update ? 'none' : 'flex' }}>
        <div className="carddivs course_carddivs" onClick={handleAdd} >
          <div className="course_cards add_course">
            <img src={AddCourse} alt="Add Course" />
            <h2>Add a course</h2>
          </div>
        </div>
        <div className="course_cards update_course" onClick={handleUpdate}>
            <img src={UpdateCourse} alt="UpdateCourse" />
            <h2>Update Courses</h2>
        </div>
      </div>
      {add ? <AddCourses /> : null}
      {update ? <UpdateCourses /> : null}
    </div>
  );
};

export default Courses;
