import{ useState } from'react'
import './style/courses.css'

const RemoveCourses = () => {

  const [selected, setSelected] = useState('')

  const selectedOption = (e) => {
    setSelected(e.target.value)
  }
  return (
    <div className="courseMain">
      <div className="courseCard">
        <h2 className="description">Remove Courses</h2>
        <hr/>
        <form className="courseform">
          <label className="levelLabel">
            <div  className="courseStyle">
              Select level:
            </div >
          </label>
          <select id="Drop-Down" value={selected} className="courseLevel" name="course-level" onChange={selectedOption}> 
            <option value="default">Choose a Level</option>
            <option value="option1">Level 1</option>
            <option value="option2">Level 2</option>
            <option value="option3">Level 3</option>
            <option value="option4">Level 4</option>
          </select>
      
          <label>
            <div className="courseStyle">
              Course:
            </div>
          </label> 
          <div className="courseInputTab">
            <input className="courseInput" type='text' placeholder="Enter course name" name="course-input"/> 
          </div>
          <button className="btn" type="submit">Add</button>
        </form>
      </div>
    </div>
  )  
}

export default RemoveCourses