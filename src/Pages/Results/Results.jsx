import { useState } from "react";
import ManualResult from "./ManualResult";
import CsvResult from "./CsvResult";
import "./style/Results.css";

// React icon
import { FiUpload } from "react-icons/fi";

// images
import ManualImage from "./images/Manually.png";
import ExcelImage from './images/Excel.png';

const Result = () => {
  const [manual, setManual] = useState(false);
  const [Csv, setCsv] = useState(false);
  const [active, setActive] = useState(null)

  const handleClick = () => {
    // setManual(true);
    // setClicked(false);
    setActive('manual');
    //console.log(`manual ${manual}`)
  };

  const Click2 = () => {
    // setManual(false)
    // setCsv(true);
    setActive('csv');
   // console.log(`CSV ${Csv}`)
   console.log(`current component is: ${active}`)
  };

  console.log(`current component is: ${active}`)
  return (
    <div>
      <div className="resultContainer">
        <div className="ResultHeader">
          <div className="header_text">
            <h2>Results</h2>
          </div>
          <div className="export" onClick={() => handleToggle("resultPage")}>
            <FiUpload className="export_icon" />
            <p>Export</p>
          </div>
        </div>

        {
          active === null && (
            <div className="cards">
              <div className="resultdivs result_carddivs" onClick={handleClick} >
                <div className="result_cards add_result">
                  <img src={ManualImage} alt="Manual" />
                  <h2>Add new Result</h2>
                </div>
              </div>
              <div className="result_cards Excel_form" onClick={Click2}>
                  <img src={ExcelImage} alt="Excel" />
                  <h2>Enter Result Sheet</h2>
              </div>
            </div>
          )
        }
        {active === 'manual' && <ManualResult/>}
        {active === 'csv' && <CsvResult/>}
      </div>
    </div>
  );
};

export default Result;
