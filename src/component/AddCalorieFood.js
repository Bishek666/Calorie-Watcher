import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddCalorieFood = () => {
    const [foodName, setFoodName] = useState('');
    const [calorieAmount, setCalorieAmount] = useState(0);
    const [maxCalorie, setMaxCalorie] = useState(1400);
    

    const {addFoodItem, addMaxCalorie} = useContext(GlobalContext);

    const onSubmitted = e => {
        e.preventDefault();
        
        const addedFoodItem = {
            id: Math.floor(Math.random()*10000000),
            foodItem: foodName,
            calorieAmount: +calorieAmount
        }
 
        addFoodItem(addedFoodItem, maxCalorie);
    }    
    const onAddingMaxCalorie = e => {
        e.preventDefault();
 
        addMaxCalorie(maxCalorie);
    }    

    return (
        <div>
            <h1>Add Your Calorie</h1>
            <div className="form-control" >
            <label>Set Your Total Calorie:</label>
                    <input type="number"
                     value={maxCalorie} 
                     placeholder="Enter Max Calorie..." 
                     onChange={(e) => setMaxCalorie(e.target.value)} 
                     min="0" 
                     required/>
                     <button className="btn-maxCal" onClick={onAddingMaxCalorie}>Max Calorie</button>
            </div>
            <br />
            <form onSubmit= {(e) => onSubmitted(e)}>
                <div className="form-control" >
                    <label>Food Name:</label>
                    <input type="text" 
                    value={foodName} 
                    placeholder="Enter Food Name..." 
                    onChange={(e) => setFoodName(e.target.value)} 
                    required/>
                    <label>Calorie:</label>
                    <input type="number" 
                    value={calorieAmount} 
                    placeholder="Enter Calorie value ..." 
                    onChange={(e) => setCalorieAmount(e.target.value)}
                    min="0" 
                    required/>
                    <button className="btn">Add Calorie</button>
                </div>
              
            </form>
        </div>
    )
}
