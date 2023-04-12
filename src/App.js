import { useState } from "react";
import React from 'react'
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  

export default function App(){
    const [mode , setMode] = useState("light");
    const changeMode = ()=>{
        if(mode === 'light'){
            setMode("dark");
            console.log(mode);
            document.body.style.backgroundColor = "#3d414e"
            document.body.style.color = "white"
        }else{
            setMode("light");
            console.log(mode);
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        }
    }
    return(
        <>
            <Router>            
                <Navbar logo1="text" logo2 = "utils" mode = {mode} changeMode = {changeMode} />
                <Routes>
                    {/* <Navbar/> */}
                    <Route path="/" element={<TextForm mode = {mode}/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </Router>
        </>
    )
}

// export default App;