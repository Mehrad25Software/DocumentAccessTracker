import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

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
  const [email, setEmail] = useState("");
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

    if (!email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5050/api/login",
        { email, password },
        { withCredentials: true }
      );

      const role = response.data.role;

      if (role === "Adam") {
        alert("Successfully logged in as Adam!");
        navigate("/adam-dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' style={{ color: "rgb(247, 215, 113)", fontWeight: "bold" }}>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5" >Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

              
              <MDBBtn outline   size='lg' style={{ color: "rgb(247, 215, 113)", fontWeight: "bold",borderRadius: "12px",
    borderColor: "rgb(247, 215, 113)",
    transition: "background-color 0.3s, color 0.3s" }}>
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
