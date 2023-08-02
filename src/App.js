import React from 'react';
import './App.css';
import BillCard from './components/dashboard/third_card';
import SecondaryCard from './components/dashboard/secondary_card';
import BillingCard from './components/dashboard/billing_card';

function App() {
  return (
    <div className="App" style={{alignItems:"center"}}>
      <h1>Hello</h1>
      <div style={{marginLeft: '20px', alignItems:"center"}}>
      <BillCard></BillCard>
      <hr style={{width: "80%", alignSelf: "start"}}></hr>
      <SecondaryCard></SecondaryCard>
      <hr style={{width: "80%", alignSelf: "start"}}></hr>
      <BillingCard></BillingCard>
      </div>
      
    </div>
  );
}

export default App;
