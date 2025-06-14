import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import MyBooks from './pages/MyBooks';
import Recommendations from './pages/Recommendations';

function App() {
  return(
    <Router>
      <Navbar />
      <div className='p4'>
         <Routes>
         <h1>App.js</h1>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={< Search />} />
            <Route path='/my-books' element={< MyBooks />}/>
            <Route path='/recommendation' element={< Recommendations/>}/>
         </Routes>
      </div>
    </Router>
  )
};


export default App; 