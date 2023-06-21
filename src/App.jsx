import { useState } from 'react'
import reactLogo from './assets/arrow.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container1">
        <img src={reactLogo} alt=""/>
        <h2>Join Us</h2>
        <p>Subscribe Easy Tutorials YouTube Channel to <br/>watch more videos</p>
        <button className="abt">About Us</button>
    </div>
        <div className="container2">
            <form action="" method="get">
            <h1 className="reg_form">Register Here</h1>
            <label for="name">NAME</label>
            <input type="text" id="name" placeholder="Name"/>
            <label for="phone">PHONE NUMBER</label>
            <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9{4}" placeholder="Phone number" required/>
            <label for="email">EMAIL</label>
            <input type="email" id="email" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"  placeholder="Email ID" required/>
            <label for="pswd">PASSWORD</label>
            <input type="password" id="pswd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"  placeholder="Password" required/>
            <input className="reg" type="submit" value="Register"/>
        </form>
    </div>
    </>
  )
}

export default App
