import React from 'react';
import {Header} from './components/Header/Header'
import {Home} from './components/Home/Home'
import {About} from './components/About/About'
import './App.css';
import {Contact } from './components/Contact/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Routes>


      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>

      </Routes>
      <Contact/>
      </div>
    </Router>
  );
}

export default App;
