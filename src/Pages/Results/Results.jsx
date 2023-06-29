// // import {useState, useRef} from "react"; 
// // import "./style/Results.css";

// // const Result = () => {
// // 	const [files, setFiles] = useState(null);
// 	// const inputRef = useRef();

// 	// const handleDragOver = (e) => {
// 	// 	e.preventDefault();
// 	// };

// 	// const handleDrop = (e) => {
// 	// 	e.preventDefault();
// 	// 	setFiles(e.dataTransfer.files)
// 	// };

// // 	if (files) return (
// // 		<div className="uploads">
// // 			<ul>
// // 				{Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
// // 			</ul>
// // 		</div>
// // 	)
	
// //   return (
// //     <>
// //       <div className="modal">
// // 				<div className="modal-header">
// // 					<div className="modal-logo"></div>
// 					// <button className="btn-close">
// 					// 	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="var(--c-text-secondary)"/></svg>
// 					// </button>
// // 				</div>
// // 				<div className="modal-body">
// // 					<h2 className="modal-title">Upload a file</h2>
// // 					<p className="modal-description">Attach the file below</p>
// // 					{!files && (
// // 						<button className="upload-area" onDragOver={handleDragOver} onDrop={handleDrop}>
// // 							<span className="upload-area-title">Drag file(s) here to upload.</span>
// // 							<span className="upload-area-description">
// // 							Alternatively, you can select a file by 
// // 							<input 
// // 								type="file"
// // 								accept=".xlsx,.xlsm,.xlsb,.xltx"
// // 								multiple 
// // 								onChange={(e) => setFiles(e.target.files)} hidden 
// // 								ref={inputRef}
// // 							/>
// // 							<br/><strong><button onClick={() => inputRef.current.click()} className="altbutton">clicking here</button></strong>
// // 							</span>
// // 						</button>
// // 					)}
// // 				</div>
// // 				<div className="modal-footer">
// // 					<button className="btn-secondary" onClick={() => setFiles(null)}>Cancel</button>
// // 					<button className="btn-primary">Upload File</button>
// // 				</div>
// //       </div>
// //     </>
// //   )
// // }

// // export default Result

// import {useState, useRef} from "react"; 
// import "./style/Results.css";

// function Result() {
// 	const [image, setImage] = useState(null);
// 	const [fileName, setFileName] = useState(null);
// 	const inputRef = useRef();

// 	const handleDragOver = (e) => {
// 		e.preventDefault();
// 	};

// 	const handleDrop = (e) => {
// 		e.preventDefault();
// 		setFileName(e.dataTransfer.fileName)
// 	};

// 	return (
// 		<div className="conttt">
// 		<main>
// 			<form className="result--form" action="" onDragOver={handleDragOver} onDrop={handleDrop} onClick={() => inputRef.current.click()}>
// 				<input type="file" accept=".jpg,.xlsx,.xlsm,.xlsb,.xltx" className="input-field" hidden ref={inputRef} onChange={({ target: {files}}) => {
// 					files[0] && setFileName(files[0].name);
// 					if (files){
// 						setImage(URL.createObjectURL(files[0]));
// 					}
// 				}}/>

// 				{image ?
// 				<img src={image} width={150} height={150} alt={fileName}/>
// 				:
// 				<>
// 				<p>Browse files to upload</p>
// 				</>
// 			}
// 			</form>
// 			{/* <section className="uploaded-row">
// 				<span className="upload-content">
// 					{fileName}
// 					<button className="btn-close" onClick={() => {
// 						setFileName("No selected File")
// 						setImage(null)
// 					}}>
// 						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="var(--c-text-secondary)"/></svg>
// 					</button>
// 				</span>
// 			</section> */}
// 		</main>
// 		</div>
// 	)
// }

// export default Result;

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import XLSX from 'xlsx';
import csv from 'csvtojson';
import "./style/Results.css";

const Result = () => {
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
          <p>Drag and drop a spreadsheet file here, or click to select a file.</p>
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

export default Result;