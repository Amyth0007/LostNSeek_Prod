import React from 'react'

const logout = () => {

    const logout = ()=>{
      let user = localStorage.setItem("logout");
      console.log('====================================');
      console.log(user);
      console.log('====================================');
    }
    const check = ()=>{
       let user =  localStorage.getItem("logout");
        console.log('====================================');
        console.log();
        console.log('====================================');
    }
  return (
    <div>
        
        <button onClick={check}>is user login</button>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default logout