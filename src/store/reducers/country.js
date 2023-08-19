import { ALL_COUNTRIES, CREATE_COUNTRY, DELETE_COUNTRY, ERROR, GET_COUNTRY, LOADING, SUCCESS, UPDATE_COUNTRY } from "../../Utils/Constant";


const country = (state = {isLoading: true, success: false, error: false, countries: [] }, action) => {
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS: 
            return {...state, isLoading: false, success: true, error: false}
        case ERROR: 
            return {...state, isLoading: false, success: false, error: true}
        case ALL_COUNTRIES: 
            return {...state, countries: action.payload.countries}
        case GET_COUNTRY: 
            return {...state, country: action.payload}
        case CREATE_COUNTRY:
            return {...state, countries: [...state.countries, action.payload]}
        case UPDATE_COUNTRY: 
            return {...state, countries: state.countries.map((country) => (country.id === action.payload.id ? action.payload : country)) }
        case DELETE_COUNTRY:
            return {...state, countries: state.countries.filter((country) => (country.id !== action.payload))}

        default:
            return state;
    }
}

export default country;