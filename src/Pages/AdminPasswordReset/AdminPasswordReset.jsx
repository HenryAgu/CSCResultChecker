import "./style/AdminPasswordReset.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

const AdminPasswordReset = () => {
  return (
    <div>
      <Navbar />

      <div class="container">
        <div class="card">
          <h1>Reset Password</h1>
          <form class="card-form">
            <div class="input">
              <input
                type="password"
                class="input-field"
                required
                minLength="8"
                id="oldPassword"
              />
              <label class="input-label">Old Password</label>
            </div>
            <div class="input">
              <input
                type="password"
                class="input-field"
                required
                minLength="8"
                id="newPassword"
              />
              <label class="input-label">New Password</label>
            </div>
            <div class="input">
              <input
                type="password"
                class="input-field"
                required
                minLength="8"
                id="confirmPassword"
                pattern=".{8,}"
              />
              <label class="input-label">Confirm New Password</label>
            </div>
            <div class="action">
              <NavLink to="/admin/register/login/">
                <button class="action-button" type="submit">
                  Reset Password
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPasswordReset;
