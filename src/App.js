import { AdminDashboard } from "./components/AdminDashboard";
import "./App.css";
import LoginPage from "./components/LoginPage";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router basename="/subdirectory">
      <div className="w-screen h-screen bg-black">
        <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
