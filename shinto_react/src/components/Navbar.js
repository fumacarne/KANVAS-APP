import React from "react";
import logo from "./Logo";

function Navbar() {
return(
  <div>


    <img url="./images/kambaslogo.png" width="50" height="50" alt="Home">
      </img>
 
  
  <ul className="nav justify-content-end ">
  <li className="nav-item">
    <a className="nav-link  active" href="https://localhost:3000/login">/Login</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="https://localhost:3000/signup">/SignUp</a>
  </li>
 
</ul>
 </div>

)
}
export default Navbar