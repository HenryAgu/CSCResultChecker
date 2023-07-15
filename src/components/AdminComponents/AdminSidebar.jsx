import { useContext, useState } from "react";
import { MyContext } from "../../Context";
import { NavLink } from "react-router-dom";
import "./styles/AdminSidebar.css";

import {
  FiHome,
  FiUsers,
  FiBookOpen,
  FiFileMinus,
  FiUserCheck,
  FiLogOut,
} from "react-icons/fi";

import Home from "../../Pages/Home/Home";
import DashboardPage from "../DashBoard/Dashboard";
import ResultPage from "../../Pages/Results/Results";
import CoursesPage from "../../Pages/Courses/Courses";
import StudentPage from "../../Pages/Students/Students";
import AdminPage from "../../Pages/StudentAdmin/StudentAdmin";
const AdminSidebar = () => {
  const contextValue = useContext(MyContext);

  const { sharedState } = contextValue;
  const [path, setPath] = useState("");

  const sideItems = [
    {
      path: "/admin",
      name: "Dashboard",
      icon: <FiHome />,
    },
    {
      path: "/course",
      name: "Courses",
      icon: <FiBookOpen />,
    },
    {
      path: "/student",
      name: "Student",
      icon: <FiUsers />,
    },
    {
      path: "/result",
      name: "Result",
      icon: <FiFileMinus />,
    },
    {
      path: "/studentadmin",
      name: "Admin",
      icon: <FiUserCheck />,
    },
  ];

  const handleClick = (path) => {
    setPath(path);
    console.log(path);
  };

  const render = (path) => {
    switch (path) {
      case "/result":
        return <ResultPage />;
      case "/admin":
        return <DashboardPage />;
      case "/student":
        return <StudentPage />;
      case "/course":
        return <CoursesPage />;
      case "/studentadmin":
        return <AdminPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="mainbody">
      <div className="sidebar">
        {sideItems.map((item, index) => (
          <>
            <div
              key={index}
              className="itemBody"
              activeClassName="active"
              onClick={() => handleClick(item.path)}
            >
              <div className="itemIcon">{item.icon}</div>
              <h3 className="itemName">{item.name}</h3>
            </div>
          </>
        ))}
        <NavLink to="/">
          <div className="signout">
            <FiLogOut className="signout_icon" />
            <span className="signout_name">Sign Out</span>
          </div>
        </NavLink>
      </div>
      <div className="mainbar">{render(path)}</div>
    </div>
  );
};

export default AdminSidebar;
