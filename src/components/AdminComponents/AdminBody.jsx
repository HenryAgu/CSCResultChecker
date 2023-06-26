import './styles/AdminBody.css'
import Dashboard from '../DashBoard/Dashboard'
const AdminBody = () => {
    return(
        <div className='adBody'>
            <div className='mainbar'>
                <div className='mainname'>
                    <h3>Dashboard</h3>
                </div>
                <div>
                    <Dashboard/>
                </div>
            </div>
        </div>
    )
}

export default AdminBody;