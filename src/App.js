import './App.css';
import React from 'react';
import TomBradle from './pages/TomBradle';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<TomBradle />}/>
      </Routes>
    </Router>
  );
}

export default App;