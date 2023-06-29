import { useContext } from 'react'
import {MyContext} from '../../Context'
import {NavLink} from 'react-router-dom';
import './styles/AdminSidebar.css'
import Dashboard from './icons/squares-four.svg'
import Courses from './icons/book-open.svg'
import Student from './icons/student.svg'
import Result from './icons/file-text.svg'
import Admin from './icons/user-circle-gear.svg'
const AdminSidebar = () => {
    const contextValue = useContext(MyContext);

    const {sharedState} = contextValue

    const sideItems = [
        {
            path: '/admin',
            name: 'Dashboard',
            icon: Dashboard,
        },
        {
            path: '/',
            name: 'Courses',
            icon: Courses,
        },
        {
            path: '/student',
            name: 'Student',
            icon: Student,
        },
        {
            path: '/result',
            name: 'Result',
            icon: Result,
        },
        {
            path: '/',
            name: 'Admin',
            icon: Admin,
        },
    ]

    return(
        <div>
            <div style={{width: sharedState ? '300px' : '80px'}}className='sidebar'>
                {sideItems.map((item, index) => (
                <NavLink to={item.path} key={index} className="itemBody" title={item.name}>
                    <div className='itemIcon'><img src={item.icon} width={30} height={30}/></div>
                    <h3 style={{display: sharedState ? 'block': 'none'}} className='itemName'>{item.name}</h3>
                </NavLink>
                ))}
            </div>
        </div>
    )
}

export default AdminSidebar;