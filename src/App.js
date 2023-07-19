import React from 'react';
import './App.css';
import BillCard from './components/dashboard/third_card';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div style={{marginLeft: '20px'}}>
      <BillCard></BillCard>
      </div>
      
    </div>
  );
}

export default App;
