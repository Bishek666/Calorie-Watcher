import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const ConsumedRemaining = () => {
    const {foods} = useContext(GlobalContext);
    const {maxCalorie} = useContext(GlobalContext);

    const calorieAmount = foods.map(food => food.calorieAmount);
    const totalCalorieAmount = +calorieAmount.reduce((accumulator,calorie) => (accumulator += calorie),0).toFixed(2);

    // if(setCalorie > totalCalorieAmount){
    //     leftCalorie = setCalorie - totalCalorieAmount;
    // }

    let remainingCalorie = 0;
    if (totalCalorieAmount < maxCalorie){
        remainingCalorie = maxCalorie-totalCalorieAmount;
    }
    // console.log(totalCalorieAmount);
    // console.log(maxCalorie);
    // console.log(remainingCalorie);

    
    return (
        <div className="con-rem-container">
            <div>
                <h4>Consumed</h4>
                <p className="consumed plus">+{totalCalorieAmount} Calorie</p>
            </div>
            <div>
                <h4>Remaining</h4>
                <p className="remaining minus">{remainingCalorie} Calorie</p>
            </div>
        </div>
    )
}
