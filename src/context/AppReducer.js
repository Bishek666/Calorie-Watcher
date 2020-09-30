export default (state, action) => {
    switch(action.type){
        case 'DELETE_FOOD_ITEM':
            return{
                ...state,
                foods: state.foods.filter(food => food.id !== action.foodId)
            }
        case 'ADD_FOOD_ITEM':
            return{
                ...state,
                foods: state.foods.concat(action.foodItem),
                maxCalorie: action.maxCalorie
            }
        case 'ADD_MAX_CALORIE':
            return{
                ...state,
                maxCalorie: action.maxCalorie
            }
        default:
            return state;
    }
}