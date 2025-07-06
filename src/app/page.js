import React from 'react';
import Dashboard from './../components/Dashboard';
import '../../src/App.css';

const App = () => {
  return (
    
    <div className="app">
      <h1 className="header">Budget Buddy</h1>
      <p className='text-center'>Your Personal Finance Tracker</p>
      <Dashboard />     
      
    </div> 
    
  );
};

export default App;