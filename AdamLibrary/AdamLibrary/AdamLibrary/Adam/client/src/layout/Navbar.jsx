import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";



const Navbar = (props) => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = Cookies.get('token'); // Get the token from cookies
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.role); // Set user role from the decoded token
      setUserName(`${decodedToken.fName} ${decodedToken.lName}`);
    } else {
      // Not sure if we need anything here
    }
  }, [navigate]);

  const logoutHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5050/api/logout", {}, { withCredentials: true });
      console.log("Server Response:", response);
      if (response.status === 200) {
        alert("Logged out successfully!");
        // Redirect to login page or refresh the page
        window.location.href = "/login"; // Adjust the URL to your login page
      } else {
        alert(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Error logging out. Please try again.");
    }
  };
  const renderCustomNavbar  = () => {
    switch(userRole) {
      
      case 'adem':
        return(
          <>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/adam-dashboard">
              Adam Dashboard
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" onClick={logoutHandler}>
              Log Out
            </Link>
          </li>
          </ul>
          Logged in as: {userName}
          </>
        );
      
        default:
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/"
            style={{ color: "rgb(247, 215, 113)", fontWeight: "bold" }}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link active"
            to="/Login"
            style={{ color: "rgb(247, 215, 113)", fontWeight: "bold" }}
          >
            Login
          </Link>
        </li>
      </ul>

      {/* Search Form */}
      <form
        className="d-flex" 
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Searching for:", searchTerm);
          // Optionally navigate or trigger search logic here
          // navigate(`/search?q=${searchTerm}`);
        }}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Look for folder"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline-light " type="submit" style={{backgroundColor:"rgb(175, 149, 64)"}}>
          Search
        </button>
      </form>

      <span className="ms-4">Logged out</span>
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