import{ useState } from'react'
import './style/student.css'

const UpdateStudent = () => {

  const [selected1, setSelected1] = useState('')
  const [selected2, setSelected2] = useState('')

  const selectedOption1 = (e) => {
    setSelected1(e.target.value)
  }

  const selectedOption2 = (e) => {
    setSelected2(e.target.value)
  }
  return (
    <div className="updateStudent">
      <div className="updateCard">
        <h2 className="studentdesc">Update student</h2>
        <hr/>
        <form className="studentform">
            <label>
            <div className="studentStyle">
                Last Name:
            </div>
            </label> 
            <div className="studentInputTab">
            <input className="studentInput" type='text' placeholder="Enter student's last name" name="student-last-name"/> 
            </div>

            <label>
            <div className="studentStyle">
                First Name:
            </div>
            </label> 
            <div className="studentInputTab">
            <input className="studentInput" type='text' placeholder="Enter student's first name" name="student-first-name"/> 
            </div>

            <label>
            <div className="studentStyle">
                Middle Name:
            </div>
            </label> 
            <div className="studentInputTab">
            <input className="studentInput" type='text' placeholder="Enter student's last name" name="student-middle-name"/> 
            </div>

            <label>
            <div className="studentStyle">
                Matriculation Number:
            </div>
            </label> 
            <div className="studentInputTab">
            <input className="studentInput" type='text' placeholder="Enter matriculation number" name="student-matric-no"/> 
            </div>

            <label className="levelLabel">
            <div  className="studentStyle">
                Select level:
            </div >
            </label>
            <div>
            <select id="Drop-Down" value={selected1} className="studentLevel" name="student-level" onChange={selectedOption1}> 
                <option value="default">Choose a Level</option>
                <option value="option1">Level 1</option>
                <option value="option2">Level 2</option>
                <option value="option3">Level 3</option>
                <option value="option4">Level 4</option>
            </select>
            </div>
            
            <div>
            <select id="Drop-Down" value={selected2} className="studentLevel" name="student-level" onChange={selectedOption2}> 
                <option value="default">Choose a department</option>
                <option value="option1">Computer Science</option>
            </select>
            </div>
            

            <button className="btn" type="submit">Update</button>
        </form>
      </div>
    </div>
  )  
}

export default UpdateStudent