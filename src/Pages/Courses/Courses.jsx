import{ useState } from'react'
import AddCourses from './AddCourses'
import UpdateCourses from './UpdateCourses'
import './style/courses.css'

const Courses = () => {

  const [add, setAdd] = useState(false)
  const [update, setUpdate] = useState(false)

  const handleAdd = () => {
    setAdd(!add)
  }

  const handleUpdate = () => {
    setUpdate(!update)
  }
//   style={{display: value || value2 ?'none' : 'flex' }}
  return (
    <div>
        <div className='coursesHeader'>
            <h2>Courses</h2>
        </div>

        <div style={{display: add || update ?'none' : 'flex' }} className="CoursesBoxes">
            <div className="cboxes" onClick={handleAdd}><p className="coursespara">Add Student</p></div>
            <div className="cboxes" onClick={handleUpdate}><p className="coursespara">Update Student</p></div>
        </div>
        {
            add ? <AddCourses/> : null
        }
        {
            update ? <UpdateCourses/> : null
        }
    </div>
    
  )  
}

export default Courses