import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import csv from 'csvtojson';
import "./style/Results.css";

const CsvResult = () => {
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleFileUpload });

  return (
		<>
		<div className="file-upload-container">
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} accept=".xlsx,.xls" />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag and drop an excel or CSV spreadsheet file here, or click to select a file.</p>
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