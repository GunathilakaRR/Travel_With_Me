import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    
    <Router>

    <Navbar />
    <Routes>
      <Route path='/'  element Component={Home}/>
      <Route path='/services'  element Component={Services}/>
      <Route path='/products'  element Component={Products}/>
      <Route path='/sign-up'  element Component={SignUp}/>
    </Routes>
    </Router>
     
  
      
    
  );
}

export default App;
