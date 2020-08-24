import React from 'react';
import './App.css';

import FoodCard from './FoodCard';

function App() {
  return (
    <div className="App">
      <main>
        <div className="title">
          <h1>Ты сегодня покормил кота?</h1>
        </div>
        <div className="food">
          <FoodCard/>
        </div>
      </main>
    </div>
  );
}

export default App;
