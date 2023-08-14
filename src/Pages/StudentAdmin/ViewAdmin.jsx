import { useState, useEffect } from "react";
import "./style/viewadmin.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ViewAdmin = ({ page, setPage }) => {
  const [adminList, setAdminList] = useState([]);
  const [show, setShow] = useState(false);
  const [table, setTable] = useState(true);
  const [updateID, setUpdateID] = useState("");
  useEffect(() => {
    // fetch admin list from backend
    const fetchAdminList = async () => {
      try {
        const response = await axios.get(
          "https://result-backend.onrender.com/admin"
        );
        console.log(response);
        setAdminList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdminList();
  }, []);

  // handle delete admin
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        "https://result-backend.onrender.com/admin",
        { data: { adminNumber: id } }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Admin successfully deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // remove admin from adminList
        const newAdminList = adminList.filter(
          (admin) => admin.adminNumber !== id
        );
        setAdminList(newAdminList);
      } else {
        console.log("error occured");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    password: "",
    adminNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form validation passed, submit the form
      console.log("Form submitted");
      try {
        axios
          .put("https://result-backend.onrender.com/admin", {
            firstName: formData.firstName,
            lastName: formData.lastName,
            middleName: formData.middleName,
            password: formData.password,
            email: formData.email,
            // adminNumber: updateID,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              toast.success("Admin successfully created", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              // set fields to empty
              setFormData({
                firstName: "",
                lastName: "",
                middleName: "",
                email: "",
                password: "",
                passwordConfirm: "",
              });
            } else {
              console.log("error occured");
            }
          })
          .catch((error) => {
            console.log(error.response.data.error);
            toast.error(error.response.data.error, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      // Form validation failed, update the 'errors' state
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const hasErrors = () => {
    return Object.keys(errors).length !== 0;
  };
  return (
    <div className="main_view">
      <div
        style={{
          padding: "7px 15px",
          backgroundColor: "gray",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "max-content",
          display: "flex",
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <p>Back</p>
      </div>
      {table && (
        <table>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          <tbody>
            {adminList.length > 0 &&
              adminList.map((admin) => (
                <tr key={admin.id}>
                  <td>{admin.firstName}</td>
                  <td>{admin.middleName}</td>
                  <td>{admin.email}</td>
                  <td>
                    <button
                      className="delete_button"
                      onClick={() => handleDelete(admin.adminNumber)}
                    >
                      Delete
                    </button>
                    {/* Update */}
                    <button
                      className="update_button"
                      onClick={() => {
                        setTable(false);
                        setShow(true);
                        setUpdateID(admin.adminNumber);
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
      {/* show modal for update admin */}
      {show && (
        <>
          <div className="sAdminCard update_admin_form">
            <h2 className="sAdmindesc">Add an administrator</h2>
            <hr />
            <form className="sAdminform" onSubmit={handleSubmit}>
              <label>
                <div className="sAdminStyle">Admin Email:</div>
              </label>
              {errors.email && <span className="error">{errors.email}</span>}

              <div className="sAdminInputTab">
                <input
                  className="sAdminInput"
                  type="text"
                  placeholder="Enter admin email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <label>
                <div className="sAdminStyle">First Name:</div>
              </label>
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
              <div className="sAdminInputTab">
                <input
                  className="sAdminInput"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Enter Admin's first name"
                />
              </div>
              <label>
                <div className="sAdminStyle">Last Name:</div>
              </label>
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
              <div className="sAdminInputTab">
                <input
                  className="sAdminInput"
                  type="text"
                  placeholder="Enter Admin's last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <label>
                <div className="sAdminStyle">Middle Name:</div>
              </label>
              {errors.middleName && (
                <span className="error">{errors.middleName}</span>
              )}
              <div className="sAdminInputTab">
                <input
                  className="sAdminInput"
                  type="text"
                  placeholder="Enter Admin's middle name"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  required
                />
              </div>
              <label>
                <div className="sAdminStyle">Password:</div>
              </label>
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
              <div className="sAdminInputTab">
                <input
                  className="sAdminInput"
                  type="password"
                  placeholder="Enter admin password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn" type="submit" disabled={hasErrors()}>
                Update
              </button>
            </form>
          </div>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default ViewAdmin;
