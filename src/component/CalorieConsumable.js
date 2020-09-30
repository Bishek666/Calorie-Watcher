import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const CalorieConsumable = () => {
    const {foods} = useContext(GlobalContext);
    const {maxCalorie} = useContext(GlobalContext);

    const calorieAmount = foods.map(food => food.calorieAmount);
    const totalCalorieAmount = +calorieAmount.reduce((accumulator,calorie) => (accumulator += calorie),0).toFixed(2);
   
    let clr = "rgb(23, 190, 168)";
    let overConsumed = 0;

    useEffect( () => {
        CalorieConData();
      });

    const CalorieConData = () => {
        if(totalCalorieAmount > maxCalorie ){
                clr = "#d83422";
                overConsumed = totalCalorieAmount - maxCalorie;
                // console.log('totalCalorieAmount: ' + typeof(totalCalorieAmount)   );
                // console.log('maxCalorie: ' +  typeof(maxCalorie));
                // console.log('overConsumed:' +overConsumed);  
            }
        if(totalCalorieAmount > 0 && totalCalorieAmount <= maxCalorie){
                clr = "#39d467";
            }

        return clr

      }
    
    
     
  


    return (
        <div className="Cal-des">
            <div className="calorie-description">
                <h4>Max set Calorie:</h4>
                <h5>{maxCalorie} <i><b><u>Calories</u></b></i></h5>
            </div>
            <div className="calorie-description" style={{backgroundColor:CalorieConData()}}>
                <h4>Over Consumed Calorie:</h4>
                <h5>{overConsumed} <i><b><u>Calories</u></b></i></h5>
            </div>
        </div>
        
    )
}
