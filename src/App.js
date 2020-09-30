import React from 'react';
import './App.css';
import Header from './component/Header';
import { CalorieConsumable } from './component/CalorieConsumable';
import { ConsumedRemaining } from './component/ConsumedRemaining';
import { FoodCalorieList } from './component/FoodCalorieList';
import { AddCalorieFood } from './component/AddCalorieFood';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div>
      <Header />
      <div className="Container">
        <GlobalProvider>
          <CalorieConsumable />
          <ConsumedRemaining />
          <FoodCalorieList />
          <AddCalorieFood />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
