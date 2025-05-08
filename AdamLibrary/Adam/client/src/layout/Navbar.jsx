import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


const Navbar = (props) => {

  const navigate = useNavigate();
  
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState('');


  
  const renderCustomNavbar  = () => {
    switch(userRole) {
      
        default:
          return(
            <>
           
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
            <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/" style={{ color: "rgb(247, 215, 113)", fontWeight: "bold" }} >
              Home
            </Link>
            </li >
            <li class="nav-item" >
              <Link class="nav-link active" to="/Login"  style={{color:"rgb(247, 215, 113)", fontWeight: "bold" }}>
                Login
              </Link>
            </li>
           
                </ul >
              
            Logged out
            </>
          );
    }
  }
  
  return (
    <>
      <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#964B00' }}>
        <div class="container-fluid" style={{ backgroundColor: '#964B00' , fontWeight: "bold" }}>
          <a class="navbar-brand" style={{ color: 'rgb(255, 236, 223)' }}>
            Library
            <img src="/images/logo.png" alt="" width="50px"/ >
          </a>
          <button 
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            
            {renderCustomNavbar()}
              
          </div>
                  </div>
                  
      </nav>
    </>
  );
};

export default Navbar;