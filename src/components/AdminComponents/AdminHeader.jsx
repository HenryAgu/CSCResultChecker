import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../Context";

// stylesheet
import "./styles/AdminHeader.css";

// React icons
import { RiArrowDownSLine } from "react-icons/ri";

// Images
import Logo from "./images/Logo.png";
import magnifier from "./images/magnifier.png";
import notification from "./images/notification.png";
import AdminProfile from "./images/profile.png";

const 
AdminHeader = () => {
  const contextValue = useContext(MyContext);

  return (
    <main>
        <div className="header">
            <div className="header_logo">
              <img src={Logo} alt="Logo" />
              <div className="logo_info">
                <h5>Uniport</h5>
                <h6>Admin</h6>
              </div>
            </div>
            <div className="header_search">
              <img src={magnifier} alt="magnifier" />
              <input type="text" placeholder="Search for anything here..."/>
            </div>
            <div className="header_admin">
              <div className="admin_notification">
                <img src={notification} alt="notification" />
              </div>
              <div className="admin_profile">
                <img src={AdminProfile} alt="Profile" />
              </div>
              <div className="admin_name">
                <h5>Henry</h5>
                <h6>Admin</h6>
              </div>
              <RiArrowDownSLine className="drop_down"/>
            </div>
        </div>
    </main>
  );
};

export default AdminHeader;
