import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from '../../axios_order';


export function* initIngredientsSaga() {
    try {
        const response = yield axios.get('/ingredients.json');
        yield put(actions.setIngredients(response.data))
    } catch (error) {
        yield put(actions.fetchIngredientsFail())
    }
};