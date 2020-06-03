import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import { ReactRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Card />
    </Router>
  );
}

export default App;
