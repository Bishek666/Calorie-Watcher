import React,{ createContext ,useReducer} from 'react';
import AppReducer from './AppReducer';

const defaultState = {
    foods: [
        {id:1 , foodItem:'Burger', calorieAmount:200},
        {id:2 , foodItem:'Fried Rice', calorieAmount:400},
        {id:3 , foodItem:'Pizza', calorieAmount:600},
        {id:4 , foodItem:'Protein Shake', calorieAmount:500},
    ],
    maxCalorie: 1400
}


// Now creating a context
export const GlobalContext = createContext(defaultState);

// Now creating a provider to give state value and also reducer actions
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, defaultState);

// Now creating actions for dispatch
    const deleteFoodItem = (id) => {
        dispatch({
            type: 'DELETE_FOOD_ITEM',
            foodId: id
        });  
    }

    const addFoodItem = (addedFoodItem, maxCalorie) => {
        dispatch({
            type: 'ADD_FOOD_ITEM',
            foodItem: addedFoodItem,
            maxCalorie: maxCalorie
        });
    }

    const addMaxCalorie = (maxCalorie) => {
        dispatch({
            type: 'ADD_MAX_CALORIE',
            maxCalorie: maxCalorie
        });
    }

    return(
        <GlobalContext.Provider value={{
            foods:state.foods,
            maxCalorie: state.maxCalorie,
            deleteFoodItem,
            addFoodItem,
            addMaxCalorie
            }}>
            {children}
        </GlobalContext.Provider>
    );

}