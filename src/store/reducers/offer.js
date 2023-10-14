import { ALL_OFFERS, ERROR, GET_OFFERS, LOADING, OFFERS_BY_COMPANY, SUCCESS } from "../../Utils/Constant"


const offer = (state = {isLoading: true, success: false, error: false, offers: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_OFFERS:
            return {...state, offers: action.payload.offers}
        case GET_OFFERS:
            return {...state, offer: action.payload}
        case OFFERS_BY_COMPANY:
            return {...state, offers: action.payload}
        default:
            return state;

    }
}

export default offer;