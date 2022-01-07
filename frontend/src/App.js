import React from 'react';
import './App.css';
import Service from "./Pages/Accueil";
import Navbar from './Composent/Nav';
import SignupField from './Pages/applyForm';
import LoginPage from './Pages/login';
import Meteo from './Pages/meteo';
import Map from './Pages/google';
import AppGitHub from './Composent/appGitHub';
import Search from './Composent/searchGitHub';
import User from './Composent/UserGitHub';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Service/>}/>
          
        <Route path="/connect" element={<SignupField/>}/>
        
        <Route path="/login" element={<LoginPage/>}/>
       
       
        <Route path="/meteo" element={<Meteo/>}/>
      
        <Route path="/google" element={<Map/>}/>
      
        <Route path="/github" element={<Search/>}>
            {/*  <Route component={Search}/>
            <Route path="user/:username" component={User}/> */}
        </Route> 
      
      </Routes>
    </div>
  </Router> 
  );
}

export default App;
