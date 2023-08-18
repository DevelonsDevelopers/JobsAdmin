import { ALL_CITIES, ERROR, LOADING, SUCCESS } from "../../Utils/Constant";


const city = (state = {isLoading: true, success: false, error: false, cities: [] }, action) => {
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS: 
            return {...state, isLoading: false, success: true, error: false}
        case ERROR: 
            return {...state, isLoading: false, success: false, error: true}
        case ALL_CITIES: 
            return {...state, cities: action.payload.cities}
        default:
            return state;
    }
}

export default city;