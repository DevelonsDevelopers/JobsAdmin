import { ALL_TAGS, ERROR, LOADING, SUCCESS } from "../../Utils/Constant"


const tag = (state = {isLoading: true, success: false, error: false, tags: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_TAGS:
            return {...state, tags: action.payload.tags}
        default:
            return state;

    }
}

export default tag;
