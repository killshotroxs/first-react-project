import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Postings from './Components/Postings/Postings';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/postings' />}></Route>
        <Route path='/postings' element={<Postings />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}
  
export default App;