import React from 'react';
import './App.css';
import CardWithButton from './components/dashboard/new_card';
import BillCard from './components/dashboard/third_card';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div style={{marginLeft: '20px'}}>
        <CardWithButton></CardWithButton>
      <BillCard></BillCard>
      </div>
      
    </div>
  );
}

export default App;
