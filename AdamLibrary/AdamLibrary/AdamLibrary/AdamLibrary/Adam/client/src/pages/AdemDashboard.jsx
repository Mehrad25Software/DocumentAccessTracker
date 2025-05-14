import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./css/Dashboard.css";
import { jwtDecode } from 'jwt-decode';
import Button from "../components/Button";
import axios from "axios";

const AdemDashboard = (props) => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token"); // Get the token from cookies
    if (token) {
      const decodedToken = jwtDecode(token);
      const { role } = decodedToken; // Get the role from the decoded token

      // Check if the role is not 'instructor'
      if (role !== "adem") {
        navigate("/"); // Redirect to login if not adam
      }
    } else {
      navigate("/login"); // Redirect to login if no token is found
    }
  }, [navigate]);

  return (
    <>
      
      <div class="body" className="body">
         <h1 className="animate__animated animate__rubberBand home">Welcome to The Library </h1>
         <img
  src="../images/library.webp"
  alt="Library"
  style={{ width: "100%", maxWidth: "800px", height: "auto"}}
/>

        <br/>
    
        
      </div>
    </>
  );
  
};

export default AdemDashboard;