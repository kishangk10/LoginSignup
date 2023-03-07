import React, { useState } from "react"
import STYLE from "./signup.module.css"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"

const Signup =()=>{

    let[username,setUsername]=useState()
    let[password,setPassword]=useState()
    let[password1,setPassword1]=useState()
    let[password2,setPassword2]=useState()

    let navigate=useNavigate()
    let handleChange=(e)=>{
        e.preventDefault()
        if(password1 === password2){
            password = password1
            localStorage.setItem("username",username);
            localStorage.setItem('password',password);
            navigate("/")
            toast.success("Registration Successful")
        }else{
            toast.error('Password are Not same',{
                position:toast.POSITION.TOP_RIGHT
            })
            console.log("not a valid");
        }
    }

    return(
        <div className={STYLE.mianblock} >
            <form action="">
                <ToastContainer/>
                <h2 className={STYLE.h2}>Signup</h2>
                <input type="text" placeholder="  Email" onChange={(e)=>{
                    setUsername(e.target.value)
                }}/>
                <br />
                <input type="password" placeholder="  Create password" onChange={(e)=>{
                    setPassword1(e.target.value)
                }}/>
                <br />
                <input type="password" placeholder="  Comfirm password" onChange={(e)=>{
                    setPassword2(e.target.value)
                }}/>
                <br />
                <button style={{backgroundColor:"#1877f2",color:"white"}} onClick={handleChange}> Signup </button>
                <p className={STYLE.p}>Alredy have an account? <Link to="/">Login</Link></p>
                <button style={{backgroundColor: "#1877f2",color:"white"}}>Login with Facebook</button><br />
                <button>Login with Google</button>
            </form>
        </div>
    )
}
export default Signup;