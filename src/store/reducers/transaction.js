import {  ALL_TRANSACTIONS, ERROR, LOADING, SUCCESS } from "../../Utils/Constant"


const transaction = (state = {isLoading: true, success: false, error: false, transactions: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_TRANSACTIONS:
            return {...state, transactions: action.payload.transactions}
        default:
            return state;

    }
}

export default transaction;
