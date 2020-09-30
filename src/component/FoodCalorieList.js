import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import {FoodCalorie} from './FoodCalorie';

export const FoodCalorieList = () => {
    const {foods} = useContext(GlobalContext);
    
    return (
        <div>
            <h3>Consumed Foods</h3>
            <ul className="list">
                  {foods.map(food => (
                      <FoodCalorie key={food.id} food={food} />
                  ))} 
            </ul>
        </div>
    )
}
