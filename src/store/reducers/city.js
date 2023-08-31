import { ALL_CITIES, CREATE_CITY, DELETE_CITY, ERROR, GETCOUNTRY_CITY, GET_CITY, LOADING, SUCCESS, UPDATE_CITY } from "../../Utils/Constant";


const city = (state = { isLoading: true, success: false, error: false, cities: [] }, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true }
        case SUCCESS:
            return { ...state, isLoading: false, success: true, error: false }
        case ERROR:
            return { ...state, isLoading: false, success: false, error: true }
        case ALL_CITIES:
            return { ...state, cities: action.payload.cities }
        case GET_CITY:
            return { ...state, city: action.payload }
        case GETCOUNTRY_CITY:
            return { ...state, citybycountry: action.payload }
        case CREATE_CITY:
            return { ...state, cities: [...state.cities, action.payload] }
        case UPDATE_CITY:
            return { ...state, cities: state.cities.map((city) => (city.id === action.payload.id ? action.payload : city)) }
        case UPDATE_CITY:
            console.log(action.payload)
            return { ...state, cities: state.cities.map((city) => (city.id === action.payload.id ? { ...city, status: action.payload.status } : city)) }
        case DELETE_CITY:
            return { ...state, cities: state.cities.filter((city) => city.id !== action.payload) }
        default:
            return state;
    }
}

export default city;