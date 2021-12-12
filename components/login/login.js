import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login({ setLoginUser}) {

    const history =useNavigate();

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history("/")
        })
    }
    const register =() =>{
        history("/Register")
    }
    return (
        <div className="login responsive">
        
            <h2 className="title"><img src="https://www.pinclipart.com/picdir/middle/104-1043664_doctors-office-clip-art.png" class="avatar"/><p className="title">Doctor's Login</p></h2>
            <br/>
            <input type="text"  class="form-control input" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" class="form-control input" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <button className="button "  class="btn btn-primary d-grid gap-2 col-6 mx-auto" onClick={login}>Login</button>
            <div className="or">or</div>
            <button className="button"   class="btn btn-primary d-grid gap-2 col-6 mx-auto" onClick={register}>Register</button>
        </div>
    )
}

export default Login