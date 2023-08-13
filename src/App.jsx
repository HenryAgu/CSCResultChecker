// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "./App.css";

// components
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Check from "./Pages/Check/Check";
import Register from "./Pages/Register/Register";
import Admin from "./Pages/Admin/Admin";
import Result from "./Pages/Results/Results";
import Layout from "./Layout";
import AdminRegister from "./Pages/AdminRegister/AdminRegister";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import AdminForgotPassword from "./Pages/AdminForgotPassword/AdminForgotPassword";
import AdminPasswordReset from "./Pages/AdminPasswordReset/AdminPasswordReset";
import Courses from "./Pages/Courses/Courses";
import Students from "./Pages/Students/Students";
import StudentAdmin from "./Pages/StudentAdmin/StudentAdmin";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import ViewResult from "./Pages/Results/ViewResult";

function App() {

  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route exact path="/check_result" element={<Check />} />
              <Route exact path="/register" element={<Register />} />
            </Route>
            {/* Admin Section */}
            <Route exact path="/admin/register" element={<AdminRegister />} />
            <Route
              exact
              path="/admin/register/login"
              element={<AdminLogin />}
            />
            <Route
              exact
              path="/admin/register/login/forgotpass"
              element={<AdminForgotPassword />}
            />
            <Route
              exact
              path="/admin/register/login/forgotpass/passwordrest"
              element={<AdminPasswordReset />}
            />
            <Route element={<ProtectedRoutes />}>
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/result" element={<Result />} />
              <Route exact path="/course" element={<Courses />} />
              <Route exact path="/student" element={<Students />} />
              <Route exact path="/studentadmin" element={<StudentAdmin />} />
              <Route exact path="/admin/results"element={<ViewResult/>}/>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
