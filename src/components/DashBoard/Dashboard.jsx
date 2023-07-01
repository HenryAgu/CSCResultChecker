import { useState, useEffect } from 'react'
import './styles/dashboard.css'
import Students from '../../Pages/Students/Students'
import Courses from '../../Pages/Courses/Courses'
import Admin from '../../Pages/StudentAdmin/StudentAdmin'
import Results from '../../Pages/Results/Results'

const Dashboard = () => {
    const [studentPage, setStudentPage] = useState(false);
    const [coursesPage, setCoursesPage] = useState(false);
    const [resultPage, setResultPage] = useState(false);
    const [adminPage, setAdminPage] = useState(false);
    const path = {
        student: '/student',
        course: '/courses',
        result: '/result',
        admin: '/admin',
    }

    useEffect(() => {
        const storedState = localStorage.getItem('myStates')
        if (storedState) {
            const parsedState = JSON.parse(storedState);
            setStudentPage(parsedState.studentPage)
            setAdminPage(parsedState.adminPage)
            setResultPage(parsedState.resultPage)
            setCoursesPage(parsedState.coursesPage)
        } else {
            const initialState = {
                studentPage: false,
                coursesPage: false,
                resultPage: false,
                adminPage: false
            }
            setStudentPage(initialState.studentPage)
            setAdminPage(initialState.adminPage)
            setResultPage(initialState.resultPage)
            setCoursesPage(initialState.coursesPage)
            localStorage.setItem('myStates', JSON.stringify(initialState))
        }
    }, [])

    const handleToggle = (stateName) => {
        const updatedState = {
            ...JSON.parse(localStorage.getItem('myStates')),
            [stateName]: !eval(stateName),
        }
        setStudentPage(updatedState.studentPage)
        setAdminPage(updatedState.adminPage)
        setResultPage(updatedState.resultPage)
        setCoursesPage(updatedState.coursesPage)
        localStorage.setItem('myStates', JSON.stringify(updatedState))
    }

    useEffect(() => {
        console.log(studentPage)
        console.log(coursesPage)
        console.log(resultPage)
        console.log(adminPage)
    }, [studentPage, coursesPage, resultPage, adminPage])

    useEffect(() => {
        localStorage.clear()
        setStudentPage(false)
        setAdminPage(false)
        setResultPage(false)
        setCoursesPage(false)
    },[])
    return (
        <div>
            <div style={{display: studentPage || resultPage|| coursesPage || adminPage ? 'none' : 'block'}}>
                <div className='sAdminHeader'>
                    <h2>Dashboard</h2>
                </div>
                <div className='cards'>
                    <div className='carddivs'>
                        <div className='box bxcard'><div className="hcard" onClick={() => handleToggle('studentPage')}><h3>Student</h3></div></div>
                        <div className='box bxcard'><div className="hcard" onClick={() => handleToggle('coursesPage')}><h3>Courses</h3></div></div>
                        <div className='box bxcard'><div className="hcard" onClick={() => handleToggle('resultPage')}><h3>Results</h3></div></div>
                        <div className='box bxcard'><div className="hcard" onClick={() => handleToggle('adminPage')}><h3>Admins</h3></div></div>
                    </div>
                </div>
            </div>
                {
                    studentPage && <Students/>
                }
                {
                    resultPage && <Results/>
                }
                {
                    adminPage && <Admin/>
                }
                {
                    coursesPage && <Courses/>
                }
        </div>
        
    )
}

export default Dashboard;