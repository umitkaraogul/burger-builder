import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredient: name
    }
};
export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredient: name
    }
};
export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
}
export const fetchIngredientsFail = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}
export const initIngredients = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS
    }
};