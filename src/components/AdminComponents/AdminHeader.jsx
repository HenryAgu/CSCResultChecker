import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import menu from './icons/menu4.svg'
import xIcon from './icons/x.svg'
import './styles/AdminHeader.css'
import {MyContext} from '../../Context'



const AdminHeader = () => {
    const contextValue = useContext(MyContext);

    const {sharedState, toggleShareBoolean} = contextValue
    
    return(
        <main>
            <div>
                <div className="header">
                    <div className='heading'>
                    <img className={sharedState ? 'clicked' : 'icon'} src={sharedState ? xIcon : menu} width={35} height={35} onClick={toggleShareBoolean}/>
                        <h2 className="header1"> Uniport | Admin </h2> 
                    </div>
                    <NavLink to="/"><h2 className="header1 log">Logout</h2></NavLink>
                </div>
            </div>
        </main>
    )
}

export default AdminHeader