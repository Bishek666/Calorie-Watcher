import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const FoodCalorie = (props) => {
//     const cname = props.transaction.amount < 0 ? 
//    "minus": "plus";
//    const sign = props.transaction.amount < 0 ? '-':'+';

   const { deleteFoodItem } = useContext(GlobalContext);
    return (
        <li className="minus">
            {props.food.foodItem} 
            <span>+{props.food.calorieAmount}</span><button className="delete-btn" onClick={() => deleteFoodItem(props.food.id)}>x</button>
        </li>
    )
}