// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";

function App() {

  return (
      <>
        <main>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
            </Routes>
            <Footer />
          </BrowserRouter>
        </main>
      </>
    );
}

export default App
