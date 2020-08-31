import React, { useState, useEffect } from 'react';
import './App.scss';

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
                key={item.id}
                taste={item.taste} 
                portion={item.portion} 
                weight={item.weight}
                soldout={item.soldout} 
                gift={item.gift}
                caption={item.caption}
                customer={item.customer}
              />
            )) 
          }
        </div>
      </main>
    </div>
  );
}

export default App;
