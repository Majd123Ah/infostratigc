import React, { useState } from 'react'
import { Alert } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const DashHeader = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.push("/")
        } catch {
            setError("Failed to log out")
        }
    }

    return (

        <div className='DashHeaderd'>
            <div className='navbar-dash'>
                <div className='emailuser'>
                    <strong>Email:</strong> {currentUser.email}
                </div>
                <button className="mybtn" onClick={handleLogout} >Log Out</button>
                <div className='outerorr'>
                    {error && <Alert variant="danger" >{error} </Alert>}
                </div>

            </div>

        </div>

    )
}

export default DashHeader
