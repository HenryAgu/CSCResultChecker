// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

// components
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Check from "./Pages/Check/Check";
import Register from "./Pages/Register/Register";
import Admin from "./Pages/Admin/Admin";
import Layout from "./Layout";

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
            </Routes>
            <Footer/>
          </BrowserRouter>
        </main>
      </>
    );
}

export default App
