import { ALL_CATEGORIES, CREATE_CATEGORY, DELETE_CATEGORY, ERROR, GET_CATEGORY, LOADING, RESET_STATUS, SUCCESS, UPDATE_CATEGORY, UPDATE_STATUS } from "../../Utils/Constant"


const category = (state = {isLoading: true, success: false, error: false, categories: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_CATEGORIES:
            return {...state, categories: action.payload.categories, id: null, status: null}
        case GET_CATEGORY:
            return {...state, category: action.payload}
        case UPDATE_STATUS:
            return {...state, categories: state.categories.map((category) => (category.id === action.payload.id ? {...category, status: action.payload.status} : category))}
        case CREATE_CATEGORY:
            return {...state, categories: [...state.categories, action.payload]}
        case UPDATE_CATEGORY:
            return {...state, categories: state.categories.map((category) => (category.id === action.payload.id ? action.payload : category))}
        case DELETE_CATEGORY:
            return { ...state, categories: state.categories.filter((category) => category.id !== action.payload)}
        case RESET_STATUS:
            return {...state, id: null, status: null}
        default:
            return state;
    }
}

export default category;