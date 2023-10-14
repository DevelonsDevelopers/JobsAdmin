import { ALL_INTERACTIONS, ERROR, GETCOMPANY_INTERACTIONS, GET_INTERACTIONS, LOADING, SUCCESS } from "../../Utils/Constant"


const interaction = (state = {isLoading: true, success: false, error: false, interactions: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_INTERACTIONS:
            return {...state, interactions: action.payload.interactions}
        case GET_INTERACTIONS:
            return {...state, interaction: action.payload}
        case GETCOMPANY_INTERACTIONS:
            return {...state, interactions: action.payload}
        default:
            return state;

    }
}

export default interaction;