import React from 'react'
import"./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import About from './components/About/About'
import Contact from './components/Contact/Contact'

import Home from './components/Home/Home';
import Error from './components/Error/Error';




export default function App() {
  return (
       <Router>
        
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error/> }/>
          </Route>
        </Routes>
         
       </Router>
    
  )
}

