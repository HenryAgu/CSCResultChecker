// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Check from "./Pages/Check/Check";
import Register from "./Pages/Register/Register";

function App() {

  return (
      <>
        <main>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/check_result" element={<Check/>}/>
              <Route exact path="/register" element={<Register/>}/>
            </Routes>
            <Footer />
          </BrowserRouter>
        </main>
      </>
    );
}

export default App
