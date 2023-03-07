import React,{useState} from "react";
import STYLEE from "./login.module.css"
import {Link} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom";

const Login =()=>{
    let [username,setUserName]=useState("")
    let [password,setPassword]=useState("")

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        if(localStorage.getItem('username') === username && localStorage.getItem('password') === password  ){
            toast.success(`${username} is Logged in Successfully`,{
                position:toast.POSITION.TOP_RIGHT
            })
            navigate("/home")
        }else{
            toast.error(`username and password are not same`,{
                position:toast.POSITION.TOP_RIGHT
            })
        }
    }

    return(
        <div className={STYLEE.mianblock}>
        <form action="">
            <ToastContainer/>
            <h2>Login</h2>
            <input type="text" placeholder="  Email" onChange={(e)=>{
                setUserName(e.target.value)
            }}/>
            <br />
            <input type="password" placeholder="  password" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <br />
            <Link to="/" className={STYLEE.fpwd}>Forget password?</Link>
            <button style={{backgroundColor: "#1877f2",color:"white"}} onClick={handleSubmit}> Login </button>
            <p className={STYLEE.p}>Don't have an account? <Link to="/signup" className={STYLEE.su}>Signup</Link> </p>
            <button style={{backgroundColor: "#1877f2",color:"white"}} >Login with Facebook</button><br />
            <button >Login with Google</button>
        </form>
    </div>
    )
}
export default Login;