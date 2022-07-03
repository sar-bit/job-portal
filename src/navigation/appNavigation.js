import React from 'react'
import HomePage from '../pages/homePage';
import JobDetails from '../pages/jobDetails';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  


function AppNavigation() {
  return (
    <Router>  
        <Routes>
   <Route path="/" component={HomePage} />
   <Route path="/JobDetails/:postId" component={JobDetails} />   
   </Routes>
</Router>
  )
}

export default AppNavigation
