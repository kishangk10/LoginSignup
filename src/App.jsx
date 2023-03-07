import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

const App=()=>{
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default App