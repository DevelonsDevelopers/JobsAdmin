import { ALL_APPLIEDUSERS, ERROR, GETCOMPANY_APPLIEDUSER, GET_APPLIEDUSER, LOADING, SUCCESS } from "../../Utils/Constant"


const appliedUser = (state = {isLoading: true, success: false, error: false, appliedUsers: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_APPLIEDUSERS:
            return {...state, appliedUsers: action.payload.appliedUsers}
        case GET_APPLIEDUSER:
            return {...state, appliedUser: action.payload}
        case GETCOMPANY_APPLIEDUSER:
            return {...state, appliedUsers: action.payload}
        default:
            return state;

    }
}

export default appliedUser;