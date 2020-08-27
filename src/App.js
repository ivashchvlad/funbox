import React, { useState, useEffect } from 'react';
import './App.css';

import FoodCard from './FoodCard';
import _food from './mock';

function App() {
  const [food, setFood] = useState([]);
  useEffect(() => {
    setFood(_food);
  }, [])
  return (
    <div className="App">
      <main>
        <div className="title">
          <h1>Ты сегодня покормил кота?</h1>
        </div>
        <div className="food">
          { 
            food.map(item => (
              <FoodCard 
                taste={item.taste} 
                portion={item.portion} 
                soldout={item.soldout} 
                gift={item.gift}
                caption={item.caption}
                customer={item.customer}
                key={item.id}
              />
            )) 
          }
        </div>
      </main>
    </div>
  );
}

export default App;
