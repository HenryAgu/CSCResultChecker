import { useState } from "react";
import { useDropzone } from "react-dropzone";
import csv from "csvtojson";
import * as XLSX from 'xlsx';
import "./style/Results.css";
import axios from 'axios';

// react icons
import { BsFillSendFill } from "react-icons/bs";

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CsvResult = ({ page, setPage }) => {
  const [uploadedData, setUploadedData] = useState(null);
  const [matNo, setMatNo] = useState('')
  const [gradeData, setGradeData] = useState([]);
  const [error, setError] = useState(false);

  const URL = 'http://localhost:4000/results'

  const handleFileUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, {type: 'array'});
      // Assuming the first sheet is the one you want to work with
      const firstSheetName = wb.SheetNames[0];
      const firstSheet = wb.Sheets[firstSheetName];

      // Convert the sheet to JSON
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);
      const filteredData = jsonData.filter(row => Object.keys(row).length > 3);


      const courseInfo = jsonData.slice(3).map((row) => ({
        rowNumber: jsonData.indexOf(row) + 1,
        length: row.length,
        matNo: row[3],
        courseCode: row[1],
        courseTitle: row[2],
        cu: row[4],
        score: row[6],
        // ... other relevant columns
      }));


      const headers = jsonData[3]; 

      // Extract course data
      const courseData = jsonData.slice(9); // Start from row 9

      //console.log('Student Information:', studentInfo);
      console.log('Course Data:', courseData);
      console.log('Headers:', headers);
      console.log('MatNo header:', headers.__EMPTY_6)

      const matricNumber = headers.__EMPTY_6

      const matNo = matricNumber.split(': ')

      console.log('My no:',matNo[1])
      console.log(typeof matNo[1])

      // const newCourseData = courseData.filter(item => {
      //   return '__EMPTY' in item && '__EMPTY_1' in item && '__EMPTY_7' in item
      // })

      const newCourseData = courseData.filter(item => {
        return (
          '__EMPTY' in item &&
          '__EMPTY_1' in item &&
          '__EMPTY_7' in item &&
          item['UNIVERSITY OF PORT HARCOURT'] !== 'S/No'
        );
      });
      

      const electiveCourseObject = courseData.find(item => {
        return item['__EMPTY_1'] === 'ELECTIVE COURSES';
      });
      
      console.log('Elective Course Object:', electiveCourseObject);
      
      

      console.log('Actual Grade Info:', newCourseData);
      //console.log('Actual Grade Info Two:', newCourseDataTwo);
      
      setMatNo(matNo[1]);
      setGradeData(newCourseData)
      //console.log(courseDataWithMeaningfulKeys)

      setUploadedData(jsonData);
    };

    reader.readAsArrayBuffer(file);;
  };
  console.log(gradeData);
  console.log(matNo);

  const sendData = () => {
    setError(false)
      if (gradeData.length === 0 && matNo === ''){
        setError(true)
      } else{
        console.log('value')
        toast.success("Result Uploaded!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      // const response = axios
    //     .post(URL, formBody)
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((error) => error.response.data);
    //   console.log(response.data);
      }
  }
  

  console.log(error)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFileUpload,
  });

  return (
    <>
      <div className="file-upload-container">
        <div style={{ width: "400px", display: "flex", justifyContent:"flex-start"}}>
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
        </div>
        <div
          {...getRootProps()}
          className={`dropzone ${isDragActive ? "active" : ""}`}
        >
          <input {...getInputProps()} accept=".xlsx, .xls" />
          {isDragActive ? (
            <p>Drop the file here...</p>
          ) : (
            <p>
              Drag and drop an excel or CSV spreadsheet file here, or click to
              select a file.
            </p>
          )}
        </div>
        {uploadedData && (
          <div className="uploaded-file">
            <p>File Uploaded:</p>
            <table>
              <thead>
                <tr>
                  {Object.keys(uploadedData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {uploadedData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((cell, cellIndex) => (
                      <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {error ? <div className='excelErr'><p>Please upload an excel sheet</p></div>: null}
      <button className='excelSendButton' onClick={sendData}><span>Send Uploaded File</span><BsFillSendFill className="send_button"/></button>
      <ToastContainer/>
    </>
  );
};

export default CsvResult;
