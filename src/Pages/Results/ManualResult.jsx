import { useState } from 'react'
import './style/manaulresult.css'

const ManualResult = () => {
    return(
        <div className="mainFormBody">
            <div className="mainFormCard">
                <h2 className="mainFormDesc"> Add Results</h2>
                <hr/>
            <form className="mainForm">
                <div className="label">
                    <label>
                        Level:
                    </label>
                </div>
                <select id="resultResultSelector" name="result-Level" className="results-selector">
                    <option value="default">Select Level</option>
                    <option value="option 1">Level 1</option>
                    <option value="option 2">Level 2</option>
                    <option value="option 3">Level 3</option>
                    <option value="option 4">Level 4</option>
                </select>
                <div className="label">
                    <label>
                        Matriculation Number:
                    </label>
                </div>
                <div>
                    <input type='text'placeholder="Enter the student's matriculation Number" className="resultInput"/>
                </div>
                <div className="label">
                    <label>
                        Courses:
                    </label>
                </div>
                <select id="courseSelector" name="result-course" className="results-selector">
                    <option value="default">Select Level</option>
                    <option value="option 1">Chem 360</option>
                    <option value="option 2">CSC 400</option>
                    <option value="option 3">CSC 481</option>
                    <option value="option 4">CSC 410</option>
                </select>
                <div className="label">
                    <label>
                        Grade:
                    </label>
                </div>
                <select id="gradeSelector" name="result-grade" className="results-selector">
                    <option value="default">Select Level</option>
                    <option value="option 1">Chem 360</option>
                    <option value="option 2">CSC 400</option>
                    <option value="option 3">CSC 481</option>
                    <option value="option 4">CSC 410</option>
                </select>
                <div>
                    <button type="submit" className="result-button">Add Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default ManualResult