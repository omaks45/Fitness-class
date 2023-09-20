import React, { useState } from 'react'
import "../styles/login.css"

const login = ()=> {

  const [action,setAction] = useState("sign up")
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>

      </div>
      <div className='inputs'>
        {action==="login"? <div><div/>:<div className='input'>
          <input type='text' placeholder='Name' />
        </div>}
        
        <div className='input'>
          <input type='email' placeholder='Email' />
        </div>
        <div className='input'>
          <input type='password' placeholder='password' />
        </div>
        {action==="sign up"?<div></div>:<div className='forgot-password'>lost password ? <span>click Here</span></div>}
        
        <div className='submit container'>
          <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setAction("sign up")}}>sign up</div>
          <div className={action==="sign up"?"submit gray":"submit"} onClick={()=>{setAction("login")}}>login</div>


        </div>
        
        
      </div>
    </div>

  )
}

export default login