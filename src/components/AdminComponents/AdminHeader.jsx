import { useContext } from "react";
import { NavLink } from "react-router-dom";
import menu from "./icons/menu4.svg";
import xIcon from "./icons/x.svg";
import "./styles/AdminHeader.css";
import { MyContext } from "../../Context";

const AdminHeader = () => {
  const contextValue = useContext(MyContext);

  const { sharedState, toggleShareBoolean } = contextValue;

  return (
    <main>
      <div>
        <div className="header">
          <div className="heading">
            <div className="centerIcon">
              <img
                className={sharedState ? "clicked" : "icon"}
                src={sharedState ? xIcon : menu}
                width={32}
                height={32}
                onClick={toggleShareBoolean}
              />
            </div>
            <h2 className="header1"> Uniport | Admin </h2>
          </div>
          <NavLink to="/">
            <h2 className="header1 log">Logout</h2>
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default AdminHeader;
