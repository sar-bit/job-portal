import React from "react";
import HomePage from './pages/homePage';
import JobDetails from './pages/jobDetails';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  


function App() {
  return (
    <Router>  
    <Routes>
<Route exact path="/" element={<HomePage/>} />
<Route path="/JobDetails/:postId" element={<JobDetails/>} />   
</Routes>
</Router>
  );
}

export default App;
