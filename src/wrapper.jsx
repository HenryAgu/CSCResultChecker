import {MyContextProvider} from './Context'
import AdminHeader from './components/AdminComponents/AdminHeader'
import AdminSidebar from './components/AdminComponents/AdminSidebar'
import AdminBody from './components/AdminComponents/AdminBody'
import './Wrapper.css'

function Wrapper() {
    return (
        <MyContextProvider>

                <AdminHeader/>
                <div>
                    <AdminSidebar/>
                </div>
                
        </MyContextProvider>
    )
}

export default Wrapper