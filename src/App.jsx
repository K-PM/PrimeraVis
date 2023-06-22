import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/tail.css';
import Inicio from './pages/Inicio';
import Information from './utils/Information';
import InformationStack from './components/InformationStack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Infrormation" element={<Information />} />
        <Route path="/information/:title/:imgUrl/:description" component={<InformationStack/>} />
      </Routes>
    </Router>
  );
}

export default App;
