import { useState } from 'react';
import ManualResult from './ManualResult'
import CsvResult from './CsvResult'
import "./style/Results.css";

const Result = () => {
    const [manual, setManual] =useState(false) 
    const [Csv, setCsv] =useState(false) 

    const handleClick = () => {
      setManual(!manual)
    }
    const handleClick2 = () => {
      setCsv(!Csv)
    }

  return (
    <div>
        <div className='ResultHeader'>
            <h2>Results</h2>
        </div>

        <div style={{display: manual ||Csv ?'none' : 'flex' }}className="ResultBoxes">
            <div className="rboxes" onClick={handleClick}><p className="rpara">Add Result Manually</p></div>
            <div className="rboxes" onClick={handleClick2}><p className="rpara">Add with excel sheet</p></div>
        </div>
       {
        manual ? <ManualResult/> : null
       }
       {
        Csv ? <CsvResult/> : null
       }
    </div>
  );
};

export default Result;