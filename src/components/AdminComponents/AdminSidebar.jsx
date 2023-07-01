import { useContext, useState } from 'react'
import {MyContext} from '../../Context'
import {NavLink} from 'react-router-dom';
import './styles/AdminSidebar.css'
import Dashboard from './icons/squares-four.svg'
import Courses from './icons/book-open.svg'
import Student from './icons/student.svg'
import Result from './icons/file-text.svg'
import Admin from './icons/user-circle-gear.svg'
import DashboardPage from '../DashBoard/Dashboard'
import ResultPage from '../../Pages/Results/Results'
import CoursesPage from '../../Pages/Courses/Courses'
import StudentPage from '../../Pages/Students/Students'
import AdminPage from '../../Pages/StudentAdmin/StudentAdmin'
const AdminSidebar = () => {
    const contextValue = useContext(MyContext);

    const {sharedState} = contextValue
    const [path, setPath] = useState('')

    const sideItems = [
        {
            path: '/admin',
            name: 'Dashboard',
            icon: Dashboard,
        },
        {
            path: '/course',
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
            path: '/studentadmin',
            name: 'Admin',
            icon: Admin,
        },
    ]

    const handleClick = (path) => {
        setPath(path)
        console.log(path)
    }

    const render = (path) => {
        switch (path) {
            case '/result':
                return <ResultPage/>
            case '/admin':
                return <DashboardPage/>
            case '/student':
                return <StudentPage/>
            case '/course':
                return <CoursesPage/>
            case '/studentadmin':
                return <AdminPage/>
            default:
                return <DashboardPage/>
        }
    }

    return(
        <div className="mainbody">
            <div style={{width: sharedState ? '300px' : '80px'}}className='sidebar'>
                {sideItems.map((item, index) => (
                <div key={index} className="itemBody" title={item.name} onClick={() => handleClick(item.path)}>
                    <div className='itemIcon'><img src={item.icon} width={30} height={30}/></div>
                    <h3 style={{display: sharedState ? 'block': 'none'}} className='itemName'>{item.name}</h3>
                </div>
                ))}
            </div>
            <div className="mainbar">
                    {render(path)}
            </div>
        </div>
    )
}

export default AdminSidebar;