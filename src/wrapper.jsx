import { MyContextProvider } from "./Context";
import AdminHeader from "./components/AdminComponents/AdminHeader";
import AdminSidebar from "./components/AdminComponents/AdminSidebar";
import AdminBody from "./components/AdminComponents/AdminBody";
import "./Wrapper.css";

// Images
import MobileImage from "./Pages/Admin/images/mobileImage.png";

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

    </div>
</>
  );
}

export default Wrapper;
