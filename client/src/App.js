import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes}  from 'react-router-dom'
import AppBar1 from './components/Nav/AppBar';

import SignInForm from './components/Auth/SignUp';
import LoginForm from './components/Auth/Login';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import { useEffect, useState } from 'react';
import Parent from './Parent';
import Upload from './components/pages/Upload';
import About from './components/pages/About';
import Statuses from './components/activity/Statuses';

function App() {

  useEffect(() => {
    setTimeout(()=>{
       
    } ,  4000)
  }, [])
  
  return (
    <BrowserRouter>
    <div className="App">
      <AppBar1/>
      <Routes>
        <Route path='/Signup' Component={SignInForm}/>
        <Route path='/Login' Component={LoginForm}/>
        <Route path='/Profile' Component={Profile}/>
        <Route path='/Activity' Component={Statuses}/>
          <Route path='/' Component={Home}/>
        <Route path='/Upload' Component={Upload}/>
        <Route path='/About' Component={About}/>
        <Route path='/About' Component={About}/>

      
      </Routes>
    </div>
    </BrowserRouter>

    // <>
    // <div>
    //   <Parent/>
    // </div>
    // </>
    
  );
}

export default App;


// import React, { useState } from "react"
// import axios from 'axios'

// function App() {
//   const [file, setFile] = useState()
//   const upload = () => {
//     const formData = new FormData()
//     formData.append('file', file)
//     axios.post('http://localhost:3001/upload',formData )
//     .then( res => {})
//     .catch(er => console.log(er))
//   }
//    return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
//       <button type="button" onClick={upload}>Upload</button>
//     </div>
//   )
// }

// export default App;