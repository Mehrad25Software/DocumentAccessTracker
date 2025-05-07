import "./App.css";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructorDashboard from "./pages/AdamDashboard";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <body>
          {" "}
          {/* can change text-bg-dark to text-bg-light */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route
              path="/instructor-dashboard"
              element={<InstructorDashboard />}
            ></Route>
          </Routes>
        </body>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
