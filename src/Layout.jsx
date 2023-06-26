import { Outlet} from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function Layout() {

  return (
    <div>
        <Navbar/>
        <div>
          <Outlet/>
        </div>
    </div>

  )
}