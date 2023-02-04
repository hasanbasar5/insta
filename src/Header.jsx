import React from 'react'
import "./header.css"
export default function Header() {
  return (
    <div>
        <header>
            <div className='logo'>
               <img src={require("./logo.png")} width="150px"></img>
            </div>
            <input type="text" name="search" placeholder="seacrh">
              
            </input>
           
           <div className='btn'>
             <button>Log In</button>
            <button>Sign Up</button>
            </div>
            <i class="fa-solid fa-magnifying-glass"></i>
        </header>
    </div>
  )
}

