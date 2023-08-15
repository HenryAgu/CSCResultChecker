import "./style/removeadmin.css";
import {useState} from 'react';
import axios from 'axios';

const UpdateAdmin = ({ page, setPage }) => {
  const [data, setData] = useState('');
  const [isError, setError] = useState('')
  const [formBody, setFormBody] = useState({
    adminNumber: "",
    firstName: "",
    lastName: "",
    middleName: "",
    email: ""
  });

  const URL = "https://result-backend.onrender.com/admin";
  const handleAdminInputChange = (event) => {
    const { name, value } = event.target;
    setFormBody((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formBody);

  const handleAdminUpdate = async (event) => {
    event.preventDefault();
    setError('')
    const response = axios
          .put(URL, formBody)
          .then((res) => {
            console.log(res.data);
            setData(res.data)
            toast.success('Admin details successfully updated ', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
          .catch(error => {
            if (error.response.status === 400){
              if(typeof error.response.data === 'string'){
                setError(error.response.data)
              }
            } else {
              setError('An error occured')
            }
            console.log(error)
          });
    
  }

  const inline = {
    color:"red",
    fontSize: '20px'
  }

  return (
    <div className="sAdminMain">
      <div className="sAdminCard">
        <h2 className="sAdmindesc">Remove an administrator</h2>
        <hr />
        <form className="sAdminform" onSubmit={handleAdminUpdate}>
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
          <label>
            <div className="sAdminStyle">Admin number:</div>
          </label>
          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              type="text"
              placeholder="Input your admin number"
              name="adminNumber"
              onChange={handleAdminInputChange}
            />
          </div>

          <label>
            <div className="sAdminStyle">Last Name:</div>
          </label>
          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              type="text"
              placeholder="Enter Admin's last name"
              name="lastName"
              onChange={handleAdminInput}
            />
          </div>

          <label>
            <div className="sAdminStyle">First Name:</div>
          </label>
          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              type="text"
              placeholder="Enter Admin's first name"
              name="firstName"
              onChange={handleAdminInputChange}
            />
          </div>

          <label>
            <div className="sAdminStyle">Middle Name:</div>
          </label>
          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              type="text"
              placeholder="Enter Admin's middle name"
              name="middleName"
              onChange={handleAdminInputChange}
            />
          </div>

          <label>
            <div className="sAdminStyle">Email:</div>
          </label>
          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              type="text"
              placeholder="Enter Admin's email"
              name="email"
              onChange={handleAdminInputChange}
            />
          </div>
          {isError ? <div style={inline}> {isError} </div> : null}
          <button className="btn" type="submit">
            Remove
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAdmin;
{/* <div className="input">
<input
  type="text"
  className="input-field"
  name="secretKey"
  onChange={handleChange}
  required
/>
<label className="input-label">Secret Key</label>
</div> */}