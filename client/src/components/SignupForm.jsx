import React, {useContext, useState} from 'react'
import { UserContext } from '../context/user'

const SignupForm = ({setShowLogin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [email, setEmail] = useState("")
    const {setUser} = useContext(UserContext)
    const style ={display: "flex", justifyContent: "center", alignItems: "center"}
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch("/signup", {
            method:"POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({username, password, password_confirmation: passwordConfirmation, email}),
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((u) => setUser(u))
            }
        })
    }

  return (
    <div>
        <h1 style={style}>Signup</h1>
        <form onSubmit={handleSubmit}>
            <div style={style}>
                <label>Username:</label>
                <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
            <div style={style}>
                <label>Email:</label>
                <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div style={style}>
                <label>Password:</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div style={style}>
                <label>Confirm Password:</label>
                <input type="password" id="password_confirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
            </div>
            <div style={style}>
                <button>Submit</button>
            </div>
        </form>
        <div style={style}>
            <label>Have an account?</label> 
            <button onClick={() => setShowLogin(true)}>Log in</button>
        </div>
    </div>
  )
}

export default SignupForm