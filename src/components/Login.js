import { useState } from "react";
import { UseAuth } from "../auth";
import { useNavigate,useLocation } from "react-router-dom";

export const Login = () => {
    const [user,setUser] = useState('')
    const auth = UseAuth()
    const navigate = useNavigate()
    const locaton = useLocation()

    const redirectPath = locaton.state?.path || '/'

    console.log(redirectPath)
    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, {replace:true})
    }

    return (
        <div>
            <label>
                Username: <input type="text" onChange={(e) => setUser(e.target.value)}/>
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}