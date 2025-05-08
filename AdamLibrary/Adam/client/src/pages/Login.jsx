import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./css/styles.css";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';


const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      alert("You are already logged in!");
      navigate("/");
    }
  }, [navigate]);

  const loginFunc = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5050/api/login",
        { username, password },
        { withCredentials: true }
      );

      const role = response.data.role;

      if (role === "Adem") {
        alert("Successfully logged in !");
        navigate("/instructor-dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    
    
    <MDBContainer fluid className="login-container"
    style={{
      backgroundImage: `url("/images/old.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "90vh",
    }} >

      <MDBRow className='d-flex justify-content-center align-items-center h-100' >
        <MDBCol col='12'>

          <MDBCard className='text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px',backgroundColor:'rgb(161, 103, 26)' }} >
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-red-50 mb-5" >Please enter your login and password!</p>

          
           
              <MDBInput
   wrapperClass='mb-4 mx-5 w-100'
  labelClass='text-white'
  label='Login'
  id='usernameInput'
  type='text'
  size="lg"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  style={{ backgroundColor: "rgb(175, 149, 64)" }}
/>            



<MDBInput
   wrapperClass='mb-4 mx-5 w-100'
  labelClass='text-white'
  label='Password'
  id='passwordInput'
  type='password'
  size="lg"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  style={{ backgroundColor: "rgb(175, 149, 64)" }}
/>

              
              <MDBBtn
                onClick={loginFunc} 
                outline
                size="lg"
                style={{
                  color: "rgb(250, 250, 250)",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  borderColor: "rgb(175, 149, 64)",
                  transition: "background-color 0.3s, color 0.3s",
                }}
              >
                Login
              </MDBBtn>


             

             
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
  
};

export default Login;
