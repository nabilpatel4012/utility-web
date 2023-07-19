import React from 'react';
import './App.css';
import RecipeReviewCard from './components/dashboard/main-card';
import CardWithButton from './components/dashboard/new_card';
import BillCard from './components/dashboard/third_card';
import BasicButtons from './components/dashboard/buttons';

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
