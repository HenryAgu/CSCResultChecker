import{ useState } from'react'
import AddAdmin from './AddAdmin'
import RemoveAdmin from './RemoveAdmin'
import './style/studentAdmin.css'

const StudentAdmin = () => {

  const [value, setValue] =useState(false) 
  const [value2, setValue2] =useState(false) 
    const [selected1, setSelected1] = useState('')
  const [selected2, setSelected2] = useState('')

  const selectedOption1 = (e) => {
    setSelected1(e.target.value)
  }

  const selectedOption2 = (e) => {
    setSelected2(e.target.value)
  }

  const handleClick = () => {
    setValue(!value)
  }
  const handleClick2 = () => {
    setValue2(!value2)
  }

  return (
    <div>
        <div className='sAdminHeader'>
            <h2>Administrator</h2>
        </div>

        <div style={{display: value || value2 ?'none' : 'flex' }}className="sAdminBoxes">
            <div className="adminboxes" onClick={handleClick}><p className="adminpara">Add an Admin</p></div>
            <div className="adminboxes" onClick={handleClick2}><p className="adminpara">Remove an Admin</p></div>
            <div className="adminboxes"><p className="adminpara">View all Admin</p></div>
        </div>
       {
        value ? <AddAdmin/> : null
       }
       {
        value2 ? <RemoveAdmin/> : null
       }
    </div>
    
  )  
}

export default StudentAdmin