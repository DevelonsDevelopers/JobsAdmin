import { ALL_CATEGORIES, CREATE_CATEGORY, DELETE_CATEGORY, ERROR, GET_CATEGORY, LOADING, SUCCESS, UPDATE_CATEGORY } from "../../Utils/Constant"


const category = (state = {isLoading: true, success: false, error: false, categories: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_CATEGORIES:
            return {...state, categories: action.payload.categories}
        case GET_CATEGORY:
            return {...state, category: action.payload}
        case CREATE_CATEGORY:
            return {...state, categories: [...state.categories, action.payload]}
        case UPDATE_CATEGORY:
            return {...state, categories: state.categories.map((category) => (category._id === action.payload._id ? action.payload : category))}
        case DELETE_CATEGORY:
            return { ...state, categories: state.categories.filter((category) => category.id !== action.payload)}
        default:
            return state;
    }
}

export default category;