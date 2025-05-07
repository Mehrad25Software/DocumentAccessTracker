import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./css/Dashboard.css";
import Button from "../components/Button";
import SingleFileUploader from "../components/SingleFileUploader";
import axios from "axios";

const InstructorDashboard = (props) => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);


  
};

export default InstructorDashboard;