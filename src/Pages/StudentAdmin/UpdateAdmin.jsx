import "./style/removeadmin.css";
const UpdateAdmin = ({ page, setPage }) => {
  return (
    <div className="sAdminMain">
      <div className="sAdminCard">
        <h2 className="sAdmindesc">Remove an administrator</h2>
        <hr />
        <form className="sAdminform">
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
            <div className="sAdminStyle">Last Name:</div>
          </label>
          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              type="text"
              placeholder="Enter Admin's last name"
              name="sAdmin-last-name"
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
              name="sAdmin-first-name"
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
              name="sAdmin-middle-name"
            />
          </div>

          <button className="btn" type="submit">
            Remove
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAdmin;
