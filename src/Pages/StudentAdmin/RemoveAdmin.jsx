import './style/removeadmin.css'
const RemoveAdmin = () => {
    return(
        <div className="sAdminMain">
            <div className="sAdminCard">
                <h2 className="sAdmindesc">Remove an administrator</h2>
                <hr/>
                <form className="sAdminform">
                    <label>
                    <div className="sAdminStyle">
                        Last Name:
                    </div>
                    </label> 
                    <div className="sAdminInputTab">
                    <input className="sAdminInput" type='text' placeholder="Enter Admin's last name" name="sAdmin-last-name"/> 
                    </div>

                    <label>
                    <div className="sAdminStyle">
                        First Name:
                    </div>
                    </label> 
                    <div className="sAdminInputTab">
                    <input className="sAdminInput" type='text' placeholder="Enter Admin's first name" name="sAdmin-first-name"/> 
                    </div>

                    <label>
                    <div className="sAdminStyle">
                        Middle Name:
                    </div>
                    </label> 
                    <div className="sAdminInputTab">
                    <input className="sAdminInput" type='text' placeholder="Enter Admin's last name" name="sAdmin-middle-name"/> 
                    </div>
                    
                    <button className="btn" type="submit">Remove</button>
                </form>
            </div>
        </div>
    )
}

export default RemoveAdmin