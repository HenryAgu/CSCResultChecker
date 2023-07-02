import { MyContextProvider } from "./Context";
import AdminHeader from "./components/AdminComponents/AdminHeader";
import AdminSidebar from "./components/AdminComponents/AdminSidebar";
import AdminBody from "./components/AdminComponents/AdminBody";
import "./Wrapper.css";

// Images
import MobileImage from "./Pages/Admin/images/mobileImage.png";

// Nav link
import { NavLink } from "react-router-dom";

function Wrapper() {
  return (
    <>
      <div className="entire_dashboard">
        <MyContextProvider>
          <AdminHeader />
          <div>
            <AdminSidebar />
          </div>
        </MyContextProvider>
      </div>
      <div className="entire_mobile_dashboard">
        <img src={MobileImage} alt="Mobile Image" />
        <p>
          We're sorry, but it seems that the current page cannot be viewed on
          your device due to the screen size limitation. To ensure the best user
          experience and readability, the page you're trying to access requires
          a larger screen size.
        </p>
        <NavLink to="/"><span>Back To Home</span></NavLink>
      </div>
    </>
  );
}

export default Wrapper;
