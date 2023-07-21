import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom";
function LoginPage(){
    const auth = useAuth()
    const navigate = useNavigate()
    const [username, setUsername] = React.useState('')
    const login = (e) => {
        e.preventDefault()
        auth.login({username})
    }
    
    return (
        <>
        
        <h1>LoginPage</h1>
        <form onSubmit={login}>
            <label>Escribe tu nombre de usuario:</label>
            <input 
            onChange={e=>setUsername(e.target.value)}
            value={username}/>
            <button type="submit">Entrar</button>
        </form>
        </>
    )
}

export { LoginPage}