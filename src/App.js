import React from 'react';
import Header from './JS/Header';
import Content from './JS/Content';
import Footer from './JS/Footer';
import HeaderBar from "./JS/HeaderBar";
import { Link,Routes,Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div>
        <nav>
          <ul>
            <li><Link to="/header" >Home</Link></li>
            <li><Link to="/footer">about</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/header" element={<HeaderBar/>}></Route>
          <Route path="/footer" element={<Footer/>}></Route>
        </Routes>
    </div>
  );
}
export default App;
