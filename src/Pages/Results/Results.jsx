import { useState } from "react";
import ManualResult from "./ManualResult";
import CsvResult from "./CsvResult";
import "./style/Results.css";

// React icon
import { FiUpload } from "react-icons/fi";

// images
import ManualImage from "./images/Manually.png";
import ExcelImage from "./images/Excel.png";

const Result = () => {
  const [manual, setManual] = useState(false);
  const [Csv, setCsv] = useState(false);

  const handleClick = () => {
    setManual(true);
  };
  const handleClick2 = () => {
    setCsv(true);
  };

  return (
    <div className="resultContainer">
      <div className="ResultHeader">
        <div className="header_text">
          <h2>Students</h2>
        </div>
        <div className="export" onClick={() => handleToggle("resultPage")}>
          <FiUpload className="export_icon" />
          <p>Export</p>
        </div>
      </div>

      <div
        className="cards"
        style={{ display: manual || Csv ? "none" : "flex" }}
      >
        <div className="carddivs course_carddivs" onClick={handleClick}>
          <div className="course_cards add_result">
            <img src={ManualImage} alt="Manual" />
            <h2>Add result manually</h2>
          </div>
          <div className="course_cards update_result" onClick={handleClick2}>
            <img src={ExcelImage} alt="Excel" />
            <h2>Add with excel spreedsheet</h2>
          </div>
        </div>
      </div>
      {manual ? <ManualResult /> : null}
      {Csv ? <CsvResult /> : null}
    </div>
  );
};

export default Result;
