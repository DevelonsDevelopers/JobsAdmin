import { ALL_PAYMENT, ERROR, LOADING, SUCCESS, UPDATE_PAYMENT, UPDATE_PAYPAL, UPDATE_STRIPE } from "../../Utils/Constant"


const payment = (state = {isLoading: true, success: false, error: false, payments: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_PAYMENT:
            return {...state, payments: action.payload.payments, id: null, status: null}
        case UPDATE_PAYMENT:
            return {...state, payments: action.payload}
        case UPDATE_PAYPAL:
            return {...state, paypal: action.payload}
        case UPDATE_STRIPE:
            return {...state, stripe: action.payload}
        default:
            return state;
    }
}

export default payment;