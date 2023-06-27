import './styles/dashboard.css'

const Dashboard = () => {

    return (
        <div className='cards'>
            <div className='carddivs'>
                <div className='box card1'><div><h2>Student</h2></div></div>
                <div className='box card2'><div><h2>Courses</h2></div></div>
                <div className='box card3'><div><h2>Results</h2></div></div>
                <div className='box card4'><div><h2>Admins</h2></div></div>
            </div>
        </div>
    )
}

export default Dashboard;