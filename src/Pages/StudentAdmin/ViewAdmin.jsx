import { useState } from "react";
import "./style/viewadmin.css";

const ViewAdmin = () => {
    const [adminList, setAdminList] = useState([
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
        },
        {
            id: 2,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
        },
    ])
  return (
    <div className="main_view">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        <tbody>
            {adminList.map((admin)=> (
                <tr key={admin.id}>
                    <td>{admin.firstName}</td>
                    <td>{admin.lastName}</td>
                    <td>{admin.email}</td>
                    <td><button className="delete_button">Delete</button></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAdmin;
