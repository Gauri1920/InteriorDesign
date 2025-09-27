import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login"; // 

function App() {
  return (
    <Router>
      <div>
        {/* Simple Navbar */}
        <nav style={styles.navbar}>
          <h2 style={styles.logo}>MyApp</h2>
          <div>
            <Link style={styles.link} to="/signup">Signup</Link>
            <Link style={styles.link} to="/login">Login</Link> {/* ✅ Login link */}
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> {/* ✅ Login route */}
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#2575fc",
    color: "#fff",
  },
  logo: { margin: 0 },
  link: {
    marginLeft: "1rem",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
  },
};

export default App;
