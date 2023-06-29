import "./style/AdminRegister.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

const AdminRegister = () => {
  return (
    <div>
      <Navbar />
    

    <div class="container">
      <div class="card">
        <h1>
          Register Account
        </h1>
        <form class="card-form">
          <div class="input">
            <input
              type="email"
              class="input-field"
              required
            />
            <label class="input-label">Email</label>
          </div>
          <div class="input">
            <input type="password" class="input-field" required />
            <label class="input-label">Password</label>
          </div>
          <div class="input">
            <input type="password" class="input-field" required />
            <label class="input-label">Confirm Password</label>
          </div>
          <div class="action">
          <NavLink to="/admin/register/login"> <button class="action-button">Get started</button></NavLink>
          </div>
          
          <div className="card-form-p">
            <p>have an account? <NavLink to="/admin/register/login">Login</NavLink></p>
            </div>
        </form>
      </div>
    </div>  
  </div>
  );
};

export default AdminRegister;
