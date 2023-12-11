// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import Exam1 from "./Exam1"; // Import the new component
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
      <Routes>
        <Route path="/app" element={<HomePage />} />
        <Route path="/exam1" element={<Exam1 />} />
      </Routes>
  );
};

export default App;




