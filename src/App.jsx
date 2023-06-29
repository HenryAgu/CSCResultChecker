// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

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


function App() {
  return (
      <>
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route exact path="/check_result" element={<Check/>}/>
                <Route exact path="/register" element={<Register/>}/>
              </Route>
              <Route exact path="/admin" element={<Admin/>}/>
              <Route exact path="/admin/register" element={<AdminRegister/>}/>
              <Route exact path="/admin/register/login" element={<AdminLogin/>}/>
              <Route exact path="/admin/register/login/forgotpass" element={<AdminForgotPassword/>}/>
              <Route exact path="/admin/register/login/forgotpass/passwordrest" element={<AdminPasswordReset/>}/>
              <Route exact path="/result" element={<Result/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </main>
      </>
    );
}

export default App
