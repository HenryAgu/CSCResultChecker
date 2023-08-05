import { useState } from "react";
import { useDropzone } from "react-dropzone";
import csv from "csvtojson";
import "./style/Results.css";

const CsvResult = ({ page, setPage }) => {
  const [uploadedData, setUploadedData] = useState(null);

  const handleFileUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const csvData = e.target.result;
      const jsonData = await csv().fromString(csvData);
      setUploadedData(jsonData);
    };

    reader.readAsText(file);
  };

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
          <input {...getInputProps()} accept=".xlsx,.xls" />
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
    </>
  );
};

export default CsvResult;
