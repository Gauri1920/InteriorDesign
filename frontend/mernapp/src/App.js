import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";        
import Dashboard from "./pages/Dashboard"; 

function App() {
  
  const isAuth = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/login" element={<login />} />
  
        {/* Dashboard page with auth check */}
        <Route
          path="/dashboard"
          element={isAuth ? <Dashboard /> : <Navigate to="/login" replace />}
        />

        {/* Redirect all other paths to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
