import { useState } from "react";
import AddAdmin from "./AddAdmin";
import UpdateAdmin from "./UpdateAdmin";
import ViewAdmin from "./ViewAdmin";
import "./style/studentAdmin.css";

// React icon
import { FiUpload } from "react-icons/fi";

// images
import AddAdminImage from "./images/AddAdmin.png";
import ViewAdminsImage from "./images/ViewAdmins.png";



const StudentAdmin = () => {
  const [pageToDisplay, setPageToDisplay] = useState("");
  const [page, setPage] = useState(0);

  const handleAdd = () => {
    setPageToDisplay("add new admin");
    setPage(page + 1);
  };

  const handleUpdate = () => {
    setPageToDisplay("update admin");
    setPage(page + 1);
  };

  const handleView = () => {
    setPageToDisplay("update a student");
    setPage(page + 1);
  };

  const HandleAdminOption = () => {
    return (
      <div >
        <div className="AdminHeader">
          <div className="header_text">
            <h2>Administrator</h2>
          </div>
          <div className="export" onClick={() => handleToggle("resultPage")}>
            <FiUpload className="export_icon" />
            <p>Export</p>
          </div>
        </div>
  
        <div
          className="cards"
          style={{ display: "flex" }}
        >
          <div className="carddivs course_carddivs">
            <div className="course_cards add_admin" onClick={handleAdd}>
              <img src={AddAdminImage} alt="Add Admin" />
              <h2>Add an admin</h2>
            </div>
            <div className="course_cards view_admin" onClick={handleView}>
              <img src={ViewAdminsImage} alt="UpdateAdmin" />
              <h2>View all admin</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
 

  const componentList = [
    <HandleAdminOption />,
    pageToDisplay === "add new admin" ? (
      <AddAdmin page={page} setPage={setPage} />
    ) : pageToDisplay === "update admin" ? (
      <UpdateAdmin page={page} setPage={setPage} />
    ) : (
      <ViewAdmin page={page} setPage={setPage} />
    ),
  ];
  return <div className="admin_container"> {componentList[page]}</div>;
};

export default StudentAdmin;
