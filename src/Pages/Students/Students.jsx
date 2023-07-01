import{ useState } from'react'
import AddStudent from './AddStudent'
import UpdateStudent from './UpdateStudent'
import './style/student.css'

const Students = () => {

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
        <div className='studentHeader'>
            <h2>Student</h2>
        </div>

        <div style={{display: add || update ?'none' : 'flex' }} className="StudentBoxes">
            <div className="sboxes" onClick={handleAdd}><p className="studentpara">Add Student</p></div>
            <div className="sboxes" onClick={handleUpdate}><p className="studentpara">Update Student</p></div>
        </div>
        {
            add ? <AddStudent/> : null
        }
        {
            update ? <UpdateStudent/> : null
        }
    </div>
    
  )  
}

export default Students