import { useState } from "react";
import AddCourses from "./AddCourses";
import UpdateCourses from "./UpdateCourses";
import "./style/courses.css";

// React icon
import { FiUpload,FiArrowRight } from "react-icons/fi";

const Courses = () => {
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleAdd = () => {
    setAdd(!add);
  };

  const handleUpdate = () => {
    setUpdate(!update);
  };
  //   style={{display: value || value2 ?'none' : 'flex' }}
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
      <div className="cards">
        <div className="carddivs">
          <div className="inner_cards">
            
          </div>
        </div>
      </div>
      {add ? <AddCourses /> : null}
      {update ? <UpdateCourses /> : null}
    </div>
  );
};

export default Courses;
