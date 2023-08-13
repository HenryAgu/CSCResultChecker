import { useState } from "react";
import ManualResult from "./ManualResult";
import CsvResult from "./CsvResult";
import "./style/Results.css";

// React icon
import { FiUpload } from "react-icons/fi";

// images
import ManualImage from "./images/Manually.png";
import ExcelImage from "./images/Excel.png";
import ViewResultImage from "./images/ViewResult.png";
import ViewResult from "./ViewResult";
import { NavLink } from "react-router-dom";

const Result = () => {
  // const [manual, setManual] = useState(false);
  // const [Csv, setCsv] = useState(false);
  const [pageToDisplay, setPageToDisplay] = useState("");
  const [page, setPage] = useState(0);

  // result option component

  const HandleResultOption = () => {
    return (
      <>
        <div className="ResultHeader">
          <div className="header_text">
            <h2>Results</h2>
          </div>
          <div className="export" onClick={() => handleToggle("resultPage")}>
            <FiUpload className="export_icon" />
            <p>Export</p>
          </div>
        </div>
        <div className="cards">
          <div className="resultdivs result_carddivs" onClick={handleClick}>
            <div className="result_cards add_result">
              <img src={ManualImage} alt="Manual" />
              <h2>Add new Result</h2>
            </div>
          </div>
          <div className="result_cards Excel_form" onClick={Click2}>
            <img src={ExcelImage} alt="Excel" />
            <h2>Enter Result Sheet</h2>
          </div>
          <NavLink to="/admin/results">
            <div className="result_cards Excel_form update_result">
              <img src={ViewResultImage} alt="View" />
              <h2>View Result</h2>
            </div>
          </NavLink>
        </div>
      </>
    );
  };

  const handleClick = () => {
    // setManual(true);
    // setClicked(false);
    setPageToDisplay("manual");
    setPage(page + 1);
    //console.log(`manual ${manual}`)
  };

  const Click2 = () => {
    // setManual(false)
    // setCsv(true);
    setPageToDisplay("csv");
    setPage(page + 1);
    // console.log(`CSV ${Csv}`)
  };

  const componentList = [
    <HandleResultOption />,
    pageToDisplay === "manual" ? (
      <ManualResult page={page} setPage={setPage} />
    ) : (
      <CsvResult page={page} setPage={setPage} />
    ),
  ];

  return (
    <div>
      <div className="resultContainer">{componentList[page]}</div>
    </div>
  );
};

export default Result;
